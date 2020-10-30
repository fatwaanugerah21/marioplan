import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLink = () => {
   return (
      <nav className="nav-wrapper grey darken-4">
         <div className="container">
            <ul className="right">
               <li><NavLink to="/sign-in">Sign In</NavLink></li>
               <li><NavLink to="/sign-up">Sign Up</NavLink></li>
            </ul>
         </div>
      </nav>
   )
}

export default SignedOutLink;