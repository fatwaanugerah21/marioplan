import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../redux/actions/AuthAction';
import { connect } from 'react-redux';

const SignedInLink = (props) => {

   const { profile } = props;
   const initial = profile.firstName ? profile.firstName[0] + profile.lastName[0] : "   "
   return (
      <nav className="nav-wrapper grey darken-4">
         <div className="container">
            <ul className="right">

               <li><NavLink to="/create-project">Create Project</NavLink></li>
               <li><NavLink to="/logout" onClick={props.logOut}>Log Out</NavLink></li>
               <li><NavLink to="/" className="btn btn-floating pink lighten-1">{initial}</NavLink></li>
            </ul>
         </div>
      </nav>
   )
}
const mapDispatchToProps = (dispatch) => {
   return {
      logOut: () => dispatch(signOut())
   }
}

export default connect(null, mapDispatchToProps)(SignedInLink);