import React from 'react';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import Notification from './Notification';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

function Dashboard(props) {

   const uid = props.uid;
   if (!uid) {

      return <Redirect to="/sign-in" />
   }
   if (props.projects) {
      return (
         <div className="dashboard row ">
            <div className="col s12 m6">
               <ProjectList projects={props.projects} />
            </div>
            <div className="col s12 m4">
               <Notification notifications={props.notifications} />
            </div>
         </div>
      )
   } else {
      return (
         <div className="center center-align">

            <div className="container center white-text">Loading beb sabar yah...</div>
         </div>
      )
   }


}

const mapStateToProps = (state) => {
   console.log(state);

   return {
      projects: state.firestore.ordered.projects,
      uid: state.firebase.auth.uid,
      notifications: state.firestore.ordered.notifications
   }
}

export default compose(
   connect(mapStateToProps),
   firestoreConnect([
      { collection: 'projects', orderBy: ["createdAt", "desc"] },
      { collection: 'notifications', limit: 3, orderBy: ["time", "desc"] }
   ])
)(Dashboard);
