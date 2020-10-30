import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { signUp } from '../redux/actions/AuthAction'

class SignUp extends Component {
   state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
   }

   handleSubmit = (e) => {
      e.preventDefault();
      this.props.signUp(this.state)
   }

   handleChange = (e) => {
      this.setState({
         [e.target.id]: e.target.value
      })
   }

   render() {
      if (this.props.uid) {
         return <Redirect to="/" />
      }
      return (
         <form onSubmit={this.handleSubmit} className="container white create-project ">
            <h4>Sign Up</h4> <br />
            <div className="input-field">
               <label htmlFor="firstName">First Name</label>
               <input type="text" id="firstName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
               <label htmlFor="lastName">Last Name</label>
               <input type="text" id="lastName" onChange={this.handleChange} />
            </div>
            <div className="input-field">
               <label htmlFor="email">Email</label>
               <input type="email" id="email" onChange={this.handleChange} />
            </div>
            <div className="input-field">
               <label htmlFor="password">Password</label>
               <input type="password" id="password" onChange={this.handleChange} />
            </div>
            <button className="btn blue">Submit</button>
         </form>
      )
   }
}
const mapStateToProps = (state) => {
   return {
      uid: state.firebase.auth.uid
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      signUp: (newUser) => dispatch(signUp(newUser))
   }

}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)