import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';

class ProjectDetails extends Component {
   render() {
      const project = this.props['project']
      if (project) {
         return (
            <div className="container section project-details">
               <div className="card z-depth-0">
                  <div className="card-content">
                     <span className="card-title"> {project.title} </span>
                     <p>{project.body}</p>
                  </div>
                  <div className="card-action grey lighten-4 grey-text">
                     <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                     <div>{moment(project.createdAt.toDate()).calendar()}</div>
                  </div>
               </div>
            </div>
         )
      } else {
         return (
            <div className="container section card">Loading....</div>
         )
      }
   }
}
const mapStateToProps = (state, ownProps) => {
   const id = ownProps.match.params.id;
   const projects = state.firestore.data.projects;
   const project = projects ? (projects[id]) : (null)
   return {
      project
   }
}

export default compose(
   connect(mapStateToProps, null),
   firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);