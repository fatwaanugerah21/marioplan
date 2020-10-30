import React from 'react';
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';
import { Link } from 'react-router-dom';
import { connect } from "react-redux"


const Navbar = (props) => {
   const { profile, uid } = props;
   const link = uid ? < SignedInLink profile={profile} /> : <SignedOutLink />;
   return (
      <nav className="nav-wrapper grey darken-3 header">
         <div className='container'>
            <Link to="/" className="brand-logo">Project ndak jelasnya Fatwa</Link>
            {link}
         </div>
      </nav>
   )
}

const mapStateToProps = (state) => {
   return {
      uid: state.firebase.auth.uid,
      profile: state.firebase.profile
   };

}

export default connect(mapStateToProps)(Navbar);