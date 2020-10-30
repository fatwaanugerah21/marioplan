import React from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'

const ProjectList = ({ projects }) => {
   console.log(projects);

   let tempProjects = <div>
      <p>Loading....</p>
   </div>
   if (projects) {
      tempProjects = projects.map(project => {
         return (
            <div className="white card" key={project.id}>
               <div className="card-content">

                  <Link to={"projects/" + project.id}><span className="title">{project.title}</span></Link>
                  <p>{project.body}</p>
               </div>
               <div className="card-action white grey-text">
                  <p className="grey-text">Posted by {project.authorFirstName} {project.authorLastName}</p>
                  <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
               </div>
            </div>
         )
      })
      // }

      return (
         <div className="container">
            {tempProjects}
         </div>
      )
   }
}
export default ProjectList;