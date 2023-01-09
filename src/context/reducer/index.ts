import { Reducer } from "react";
import { IAction, IAppContext, IUser } from "../../interface/appContext";
import { AMOUNT, HISTORY, NAME, ONE_HISTORY } from "./type";
export const initialState :IUser={
    name:"",
    history:[],
    amount:0
}
export const appReducer: Reducer<IUser,IAction> =(state,action)=>{
    switch (action.type) {
        case NAME:
            return {
                ...state,
                name:action.payload
            }
        case HISTORY:
            return {
                ...state,
                history:[...state.history,...action.payload]
            }
            case ONE_HISTORY:
                return {
                    ...state,
                    history:[...state.history,action.payload]
                }
        case AMOUNT:
            return{
                ...state,
                amount:action.payload
            }
    
        default:
            return state
    }
}