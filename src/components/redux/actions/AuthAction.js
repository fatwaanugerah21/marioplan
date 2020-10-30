export const signIn = (credential) => {

   return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();

      firebase.auth().signInWithEmailAndPassword(
         credential.email,
         credential.password,
      ).then(() => {
         dispatch({
            type: 'LOGIN_SUCCESS', email: credential.email
         })
      }).catch(() => {
         dispatch({
            type: 'LOGIN_FAILED'
         })
      })


   }
}

export const signOut = () => {

   return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      firebase.auth().signOut().then(
         dispatch({ type: 'SIGN_OUT' })
      )
   }
}


export const signUp = (newUser) => {
   const { firstName, lastName } = newUser;

   return (dispatch, getState, { getFirebase }) => {
      const firebase = getFirebase();
      const firestore = getFirebase().firestore();
      firebase.auth().createUserWithEmailAndPassword(
         newUser.email,
         newUser.password
      ).then((response) => {
         // This method is to make a collection but with knowed UID from the firebase right?
         firestore.collection("users").doc(response.user.uid).set(
            {
               firstName,
               lastName
            }
         )
      }).then(() => {
         dispatch({ type: "SIGNUP_SUCCESS" })
      }).catch((error) => {
         dispatch({ type: "SIGNUP_FAILED", error })
      })
      firebase.firestore().collection('notifications').add({
         content: "Joined the party",
         user: `${newUser.firstName} ${newUser.lastName}`,
         time: new Date()
      })
   }
}