import { View, Text, StatusBar } from 'react-native'
import React, { useContext, useEffect } from 'react'
import HomeScene from './HomeScene'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AMOUNT, NAME } from '../../context/reducer/type'
import { appContext } from '../../context/AppContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DARK_PRIMARY_BG } from '../../colors/color'
import { useNavigation } from '@react-navigation/native'

const EntryScene = () => {
    const state=useContext(appContext);
    const __getName=async()=>{
     try {
       let name=await AsyncStorage.getItem("@name")
       console.log(name);
       
       state?.dispatch({type:NAME,payload:name})
       } catch (error) {
           console.log("error occ");
       }
    }
    const getAmount=async()=>{
      try {
        let amount=await AsyncStorage.getItem("@amount")
        console.log(amount);
        
        state?.dispatch({type:AMOUNT,payload:amount})
        } catch (error) {
            console.log("error occ");
        }
    }
    useEffect(()=>{AsyncStorage.getAllKeys().then((keyArray) => {
        AsyncStorage.multiGet(keyArray).then((keyValArray) => {
          let myStorage: any = {};
          for (let keyVal of keyValArray) {
            myStorage[keyVal[0]] = keyVal[1]
          }
          console.log('CURRENT STORAGE: ', myStorage);
        })
      });
        __getName()
        getAmount()
    },[])
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={DARK_PRIMARY_BG} barStyle={"dark-content"}/>
      <HomeScene/>
    </SafeAreaView>
  )
}

export default EntryScene