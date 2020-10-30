const projectReducer = (state = {}, action) => {
   switch (action.type) {
      case "CREATE_PROJECT":   
      return {
            ...state,
            projects: [...state["projects"], action.project]
         }
      case "CREATE_PROJECT_ERROR":
         return state;
      default:
         return state;
   }
}


export default projectReducer;