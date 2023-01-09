import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext, useState } from "react";
import {  Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { DARK_PRIMARY_BG, PRIMARY_BLUE, PRIMARY_PINK } from "../../colors/color";
import { appContext } from "../../context/AppContext";
import { AMOUNT, HISTORY, ONE_HISTORY } from "../../context/reducer/type";
import { storeAmount } from "../../database/asyncStorage";
import { createHistory } from "../../database/realm";
import { H6Thin } from "../atom/Text";

const PayMoneyModal = ({isModal,onToggleModal} : PayMoneyModalProps) => {
  const [number,setNumber]=useState("")
  const [desc,setDesc]=useState("")
  const state=useContext(appContext)

  const handleSubmit=async()=>{
    createHistory({_id:Date.now().toString(),amount:number,desc,date:Date.now().toString(),type:"EXPENSE"})
    let amount=await AsyncStorage.getItem("@amount")||"0";
    console.log("the amount in ls :",amount);
    
    let prev_amount=parseInt(amount)
    let current_amount=parseInt(number)
    let total_amount=0
      total_amount=prev_amount-current_amount;
    const cb=()=>{
      state?.dispatch({type:AMOUNT,payload:total_amount})
    }
    storeAmount(total_amount,cb)
    state?.dispatch({type:ONE_HISTORY,payload:{amount:number,desc,type:'EXPENSE'}})
    onToggleModal()
  }
  
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModal}
        onRequestClose={onToggleModal}
      >
        <View style={styles.centeredView}>
        <View style={styles.__content}>
        <Pressable style={styles.__close} onPress={onToggleModal}></Pressable>
          <View style={styles.__inputContent}>
              <H6Thin>
                <> Amount </>
              </H6Thin>
              <TextInput
                style={styles.__textInput}
                onChangeText={setNumber}
                value={number}
                placeholder="Enter Amount"
                keyboardType="numeric"
              />
              <H6Thin>
                  <> Description </>
              </H6Thin>
              <TextInput
                  style={styles.__textInput}
                  onChangeText={setDesc}
                  value={desc}
                  placeholder="Enter Description"
              />
              <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={["#6953F7", PRIMARY_PINK]} style={styles.__gradient}>
                      <Pressable style={styles.__submitBtn} onPress={handleSubmit}>
                          <H6Thin>
                              <>Submit</>
                          </H6Thin>
                      </Pressable>
              </LinearGradient>
            </View>
        </View>
        </View>
      </Modal>
    </View>
  );
};
type PayMoneyModalProps={
    isModal:boolean,
    onToggleModal:()=>void;
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  __content:{
    width:"80%",
    borderWidth:2,
    borderRadius:20,
    borderColor:PRIMARY_BLUE,
    display:"flex",
    alignItems:"center",
    padding:20,
    position:"relative",
    backgroundColor:DARK_PRIMARY_BG
  },
  __textInput:{
    width:"100%",
    backgroundColor:"#272727",
    paddingHorizontal:20,
    borderRadius:50,
    marginVertical:10
  },
  __inputContent:{
    width:"100%"
  },
  __gradient:{
    borderRadius:50,
    marginVertical:10
  },
  __submitBtn:{
    width:"100%",
    paddingVertical:10,
    borderRadius:50,
    display:"flex",
    alignItems:"center",

  },
  __close:{
    position:"absolute",
    width:15,
    height:15,
    backgroundColor:PRIMARY_PINK,
    right:10,
    top:10,
    borderRadius:50
  }
});

export default PayMoneyModal;