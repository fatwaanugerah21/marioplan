export const createProject = (project) => {
   return (dispatch, getState, { getFirebase }) => {
      
      const firestoreDatabase = getFirebase().firestore();
      firestoreDatabase.collection('projects').add({
         ...project,
         authorFirstName: project.firstName,
         authorLastName: project.lastName,
         createdAt: new Date()
      }).then(() => {
         dispatch({ type: "CREATE_PROJECT", project })
      }).catch(error => dispatch({ type: "CREATE_PROJECT_ERROR", error }))
      
      // Adding notifications
      getFirebase().firestore().collection('notifications').add({
         content: "Project was just added by",
         user: `${project.firstName} ${project.lastName}`,
         time: new Date()
      })
   }
};

