export const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_MESSAGE":
      return {
        ...state,
        error: {
          ...state.error,
          isError: action.data.isError,
          variant: action.data.variant,
          title: action.data.title,
          message: action.data.message,
        },
      };

    case "LOGIN_USER":
      return { ...state, isLoggedIn: true, user: action.data };

    case "USER_LOGOUT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return { ...state, isLoggedIn: false, user: {} };

    case "USER_PROFILE":
      return { ...state, profile: action.data };

    case "TOGGLE_SPIN":
      return { ...state, isLoading: !state.isLoading };
    
    case "UPDATE_PROFILE":
      return {...state,profile:{...action.profile,...action.data}}
    default:
      return state;
  }
};
