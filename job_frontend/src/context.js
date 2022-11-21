import React,{useReducer,useContext} from "react";
import { globalReducer } from "./Reducers/globalReducer";

const AppContext = React.createContext();



const initialState = {
    isLoggedIn:false
}
const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(globalReducer,initialState);

    console.log(state);
    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalReducer = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider};