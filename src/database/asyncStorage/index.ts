import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeName=async (name:string,cb:()=>void)=>{
    try {
        await AsyncStorage.setItem("@name",name)
        cb();
    } catch (error) {
        console.log("falied to store name");
    }
}

export const storeAmount=async (amount:number,cb:()=>void)=>{
    try {
        await AsyncStorage.setItem("@amount",JSON.stringify(amount))
        cb();
    } catch (error) {
        console.log("falied to store amount");
        
    }
}