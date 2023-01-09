import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { DARK_PRIMARY_BG, PRIMARY_BLUE, PRIMARY_PINK } from '../../colors/color'
import { Body, H4Thin, H5Thin } from '../atom/Text'
import { appContext } from '../../context/AppContext'


const historyData=[
    {
        _id:"1",
        amount:"20",
        desc:"mobile recharged",
        date:"20 0 0"
    },
    {
        _id:"2",
        amount:"20",
        desc:"mobile recharged",
        date:"20 0 0"
    },
    {
        _id:"3",
        amount:"20",
        desc:"mobile recharged",
        date:"20 0 0"
    },
    {
        _id:"4",
        amount:"20",
        desc:"mobile recharged",
        date:"20 0 0"
    },
    {
        _id:"5",
        amount:"20",
        desc:"mobile recharged",
        date:"20 0 0"
    },
    {
        _id:"6",
        amount:"20",
        desc:"mobile recharged",
        date:"20 0 0"
    },
    {
        _id:"7",
        amount:"20",
        desc:"mobile recharged",
        date:"20 0 0"
    },
    {
        _id:"8",
        amount:"20",
        desc:"mobile recharged",
        date:"20 0 0"
    },
    {
        _id:"9",
        amount:"20",
        desc:"mobile recharged",
        date:"20 0 0"
    },
    {
        _id:"10",
        amount:"20",
        desc:"mobile recharged",
        date:"20 0 0"
    },
    {
        _id:"11",
        amount:"20",
        desc:"mobile recharged",
        date:"20 0 0"
    },
    {
        _id:"12",
        amount:"20",
        desc:"mobile recharged",
        date:"20 0 0"
    },
    {
        _id:"13",
        amount:"20",
        desc:"mobile recharged",
        date:"20 0 0"
    }
]

const Item=({amount,desc,type}:any)=>{
    return (
        <View style={styles.__content}>
            <View>
                <H5Thin><>{amount}</></H5Thin>
                <Body txtStyle={{color:"#ffffff70"}}><>{desc}</></Body>
            </View>
            {type==='INCOME'?(

                <View style={styles.__blueIcon}></View>
            ):(

                <View style={styles.__pinkIcon}></View>

            )}
        </View>
    )
}
const RenderItem=({item}:any)=>{
    return (
        <Item amount={item.amount} desc={item.desc} type={item.type}/>
    )
}
const HistoryContent = () => {
    const state=useContext(appContext)
    console.log(state?.state.history);
    
  return (
    <SafeAreaView>
        <View style={styles.__container}>
            <View style={styles.__header}>
                <H4Thin><>History</></H4Thin>
            </View>
            <View style={styles.__scroll}>
                <FlatList data={state?.state.history} renderItem={RenderItem} keyExtractor={(item,i)=>JSON.stringify(i)}/>
            </View>
            <View style={styles.__endContent}></View>
        </View>
    </SafeAreaView>
  )
}

export default HistoryContent

const styles = StyleSheet.create({
    __container:{
        width:"100%",
        minHeight:"100%",
        backgroundColor:DARK_PRIMARY_BG,
    },
    __header:{
        paddingVertical:30,
        paddingHorizontal:30
    },
    __content:{
        paddingVertical:20,
        backgroundColor:"#27272760",
        paddingHorizontal:20,
        marginVertical:10,
        marginHorizontal:30,
        borderRadius:10,
        display:"flex",
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center"
    },
    __pinkIcon:{
        width:20,
        height:20,
        backgroundColor:PRIMARY_PINK,
        borderRadius:50
    },
    __blueIcon:{
        width:20,
        height:20,
        backgroundColor:PRIMARY_BLUE,
        borderRadius:50
    },
    __endContent:{
        width:"100%",
        height:100
    },
    __scroll:{
        flex:1
    }
})