import Realm from "realm";

const User ={
    name:"User",
    properties:{
        _id:"string",
        name:"string",
        amount:"string"
    }
}
const History= {
    name:"History",
    properties:{
        _id:"string",
        amount:"string",
        desc:"string",
        date:"string",
        type:"string"
    },
    primaryKey: "_id",
}



export const getAll=()=>{
    Realm.open({
        path:"myrealm",
        schema:[User]
    }).then((realm)=>{
        const data=realm.objects("User")
        console.log(data);
    })
}
export const WriteDb=()=>{
    Realm.open({
        path:"myrealm",
        schema:[User]
    }).then((realm)=>{
        realm.write(() => {
            let user = realm.create("User", {
                _id:"_id",
              name:"Pabitra"
            });
            console.log(user);
          });
    })
}

export const getAllHistory=(cb:(data:any)=>void)=>{
    Realm.open({
        path:"myrealm",
        schema:[History]
    }).then((realm)=>{
        let history=realm.objects("History");
        console.log(history);
        cb(history)
        
    })
}
interface ICreateHistory{
    _id:string,
    amount:string,
    desc:string,
    date:string,
    type:string
}
export const createHistory=(value:ICreateHistory)=>{
    Realm.open({
        path:'myrealm',
        schema:[History]
    }).then((realm)=>{
        realm.write(()=>{
            let history=realm.create("History",value)
            console.log(history);
            
        })
    })
}