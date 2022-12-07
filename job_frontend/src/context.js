import React, { useReducer, useContext } from "react";
import { globalReducer } from "./Reducers/globalReducer";

const AppContext = React.createContext();

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  error: { isError: false, variant: "danger", title: "", message: "" },
  user:{},
  profile:{}
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const toggleSpin = () => {
    dispatch({ type: "TOGGLE_SPIN" });
  };

  const setMessage = (isError, variant, title, message) => {
    dispatch({
      type: "SET_MESSAGE",
      data: { isError, variant, title, message },
    });
  };
  const userLogout = () => {
    dispatch({ type: "USER_LOGOUT" });
  };
  const userLogin = (data) => {
    dispatch({ type: "LOGIN_USER", data });
  };

  const setUserProfile = (profile) => {
    dispatch({ type: "USER_PROFILE", data: profile });
  };

  const updateProfile = (data) => {
    dispatch({type:'UPDATE_PROFILE',data:data});
  }

  return (
    <AppContext.Provider
      value={{ ...state, setMessage, toggleSpin, userLogin, setUserProfile,userLogout, updateProfile}}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
