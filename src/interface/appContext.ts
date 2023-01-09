interface IAppContext{
    state:IUser,
    dispatch:React.Dispatch<IAction>
}
interface IUser{
    name:String,
    history:Array<IHistory>
    amount:number
}
interface IHistory{
    amount:Number,
    desc:String,
    type:String,
    _id:String
}
interface IAction{
    type:String,
    payload:any
}
interface IValue{
    user:IUser,
    update?:Function
}
export type { IAppContext,IAction,IValue,IUser}