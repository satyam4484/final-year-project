import React,{useReducer,useContext} from "react";
import {globalReducer} from "./Reducer/globalReducer.js";
const AppContext = React.createContext();

const initialState = {
    theme:'light',
    isloading:false,
    isloggedin:false,
    user:{}
};

const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(globalReducer,initialState);

    const toggleTheme = () => {
        dispatch({type:'TOGGLE_THEME'});
    }

    return (
        <AppContext.Provider value={{...state,toggleTheme}}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export { AppContext, AppProvider };