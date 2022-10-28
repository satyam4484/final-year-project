import React, { useReducer, useContext } from "react";
import { globalReducer } from "./Reducer/globalReducer.js";
const AppContext = React.createContext();

const initialState = {
  theme: "light",
  themeColor: "info",
  isLoading: false,
  isloggedin: false,
  error: { isError: false, variant: "danger", title: "", message: "" },
  user: {},
  profile: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  const setThemeColor = (color) => {
    dispatch({ type: "THEME_COLOR", color });
  };

  const toggleSpin = () => {
    dispatch({ type: "TOGGLE_SPIN" });
  };

  const setUserProfile = (profile) => {
    
    dispatch({ type: "USER_PROFILE", data:profile });
  };
  const userLogout = () => {
    dispatch({ type: "USER_LOGOUT" });
  };

  const userLogin = (data) => {
    dispatch({ type: "LOGIN_USER", data });
  };
  const setMessage = (isError, variant, title, message) => {
    dispatch({
      type: "SET_MESSAGE",
      data: { isError, variant, title, message },
    });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSpin,
        setMessage,
        setThemeColor,
        userLogin,
        userLogout,
        setUserProfile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
