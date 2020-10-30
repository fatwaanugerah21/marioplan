import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../redux/actions/AuthAction';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
   state = {
      email: "",
      password: "",
   }

   handleSubmit = (e) => {
      e.preventDefault();
      this.props['signIn'](this.state);
   }

   handleChange = (e) => {
      this.setState({
         [e.target.id]: e.target.value
      })
   }

   render() {
      const { authError, uid } = this.props;
      if (uid) return <Redirect to="/" />
      return (
         <form onSubmit={this.handleSubmit} className="container white create-project">
            <h4>Sign In</h4><br />
            <div className="input-field">
               <label htmlFor="email">Email</label>
               <input className="" type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
               <label htmlFor="password">Password</label>
               <input className="" type="password" id="password" onChange={this.handleChange} />
            </div>
            <button className="btn blue">Submit</button>
            <div className="red-text center">
               <p>{authError}</p>
            </div>
         </form>
      )
   }
}
const mapStateToProps = (state) => {
   return {
      authError: state.auth.authError,
      uid: state.firebase.auth.uid
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      signIn: (credential) => dispatch(signIn(credential))
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)