import { createContext, ReactElement, useReducer } from "react";
import { IAppContext, IUser, IValue } from "../interface/appContext";
import { appReducer, initialState } from "./reducer";

export const appContext=createContext<IAppContext|null>(null);

const AppContextProvider=(props: AppContextProviderProps)=>{
    const [state,dispatch]=useReducer(appReducer,initialState)
    const {children} = props;
    return (
        <appContext.Provider value={{state,dispatch}}>
            {children}
        </appContext.Provider>
    )
}

type AppContextProviderProps={
    children:ReactElement
}
export default AppContextProvider