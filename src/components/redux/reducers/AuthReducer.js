
const initState = {
   authError: null,
   email: null,
   isSignedIn: false,
   userIsCreated: false,
}

const authReducer = (state = initState, action) => {
   switch (action.type) {
      case "LOGIN_SUCCESS":
         return {
            email: action.email,
            authError: "Success",
            isSignedIn: true
         }
      case "LOGIN_FAILED":
         return {
            ...state,
            authError: "Username or password might be wrong"
         }
      case "SIGN_OUT":
         return {
            ...state,
            isSignedIn: false
         }
      case "SIGNUP_SUCCESS":
         return { 
            ...state,
            userIsCreated: true
         }
      case "SIGNUP_FAILED":
         return {
            ...state,
            userIsCreated: false
         }
      default:
         return { ...state, authError: null }
   }

}

export default authReducer;