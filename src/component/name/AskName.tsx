import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { DARK_PRIMARY_BG, PRIMARY_BLUE, PRIMARY_PINK } from '../../colors/color'
import { H6Thin } from '../atom/Text'
import LinearGradient from 'react-native-linear-gradient'
import { appContext } from '../../context/AppContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NAME } from '../../context/reducer/type'
import { storeName } from '../../database/asyncStorage'

const AskName = () => {
  const [name,setName]=useState("");
  const state=useContext(appContext);
  const cb=()=>{
    state?.dispatch({type:NAME,payload:name})
  }
  const handleSubmit=async()=>{
    storeName(name,cb);
  }
  
  
  return (
    <View style={styles.__content}>
      <View style={styles.__form}>
        <TextInput
          style={styles.__textInput}
          onChangeText={setName}
          value={name}
          placeholder="Enter Your Name"
        />
        <Pressable onPress={handleSubmit} style={styles.__presseble}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={["#6953F7", PRIMARY_PINK]} style={styles.__gradient}>
                 <H6Thin>
                      <>Submit</>
                  </H6Thin>         
            </LinearGradient>
        </Pressable>
      </View>
    </View>
  )
}

export default AskName

const styles = StyleSheet.create({
  __content:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height:"100%",
    backgroundColor:DARK_PRIMARY_BG
  },
  __form:{
    width:"80%",
    height:"50%",
    borderRadius:20,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:20
  },
  __textInput:{
    width:"100%",
    backgroundColor:"#272727",
    paddingHorizontal:20,
    borderRadius:50,
    marginVertical:10
  },
  __presseble:{
    width:"100%",
    marginVertical:30
  },
  __gradient:{
    width:"100%",
    paddingVertical:10,
    borderRadius:50,
    display:"flex",
    alignItems:"center",
    justifyContent:'center'
  }
})