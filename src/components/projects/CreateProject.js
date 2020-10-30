import React, { Component } from "react";
import { createProject } from "../redux/actions/ProjectActions";
import { connect } from 'react-redux'

class CreateProject extends Component {
   state = {
      title: "",
      body: "",
      firstName: "",
      lastName: ""
   }

   handleChange = (e) => {
      this.setState({ 
         [e.target.id]: e.target.value,
         firstName: this.props['profile'].firstName,
         lastName: this.props['profile'].lastName
      })

   }

   handleSubmit = (e) => {

      e.preventDefault();
      
      this.props['createProject'](this.state);
      this.props['history'].push('/');

   }

   render() {
      return (
         <form className=" container white create-project" onSubmit={this.handleSubmit}>
            <h3 className="center">Create new project</h3>
            <div className="input-field">
               <label htmlFor="title">Title</label>
               <input type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="input-field">
               <label htmlFor="body">Content</label>
               <input type="text" id="body" onChange={this.handleChange} />
            </div>
            <button className="btn">Submit</button>
         </form>
      )
   }
}
const addDispatchToProps = (dispatch) => {
   return {
      createProject: (project) => { dispatch(createProject(project)) }
   }
}
const mapStateToProps = (state) => {
   if (state.firebase.profile.firstName) {
      return {
         profile: state.firebase.profile
      };
   }

}

export default connect(mapStateToProps, addDispatchToProps)(CreateProject);