import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PRIMARY_BLUE } from '../../../colors/color'
import Body2 from '../../atom/Text/Body2'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigatorProps } from '@react-navigation/native-stack/lib/typescript/src/types'

const BottomNavContent = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.__container}>
      <View style={styles.__content}>
        <Pressable style={styles.__icons} onPress={()=>{return}}></Pressable>
        <Pressable style={styles.__icons} onPress={()=>{return}}></Pressable>
        <Pressable style={styles.__icons} onPress={()=>{return}}></Pressable>
        <Pressable style={styles.__icons}   onPress={() =>{return}
        }></Pressable>
      </View>
    </View>
  )
}

export default BottomNavContent

const styles = StyleSheet.create({
    __container:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        bottom:20,
        paddingHorizontal:30
    },
    __content:{
        width:"100%",
        backgroundColor:"#272727",
        height:50,
        borderRadius:50,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:30
    },
    __icons:{
        width:20,
        height:20,
        backgroundColor:PRIMARY_BLUE,
        borderRadius:50
    }
})