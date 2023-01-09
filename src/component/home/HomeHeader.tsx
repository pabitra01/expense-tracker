import { ActivityIndicator, Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { H1, H2, H4Thin, H5Thin, H6Thin } from '../atom/Text'
import { PRIMARY_BLUE, PRIMARY_PINK } from '../../colors/color'
import LinearGradient from 'react-native-linear-gradient'
import AddMoneyModal from '../modal/AddMoneyModal'
import PayMoneyModal from '../modal/PayMoneyModal'
import { appContext } from '../../context/AppContext'

const HomeHeader = () => {
    const [isAddMoneyModal,setIsAddModal]=useState(false);
    const [isPayModal,setIsPayModal]=useState(false);
    const togglePayModal=()=>{
        setIsPayModal(!isPayModal)
    }
    const toggleAddModal=()=>{
        setIsAddModal(!isAddMoneyModal)
    }
    const state=useContext(appContext)
    
  return (
    <View style={styles.__title}>
        <H4Thin>
            <>Welcome
            <Text style={styles.__name}> {state?.state.name} ,</Text>
            </>
        </H4Thin>
        <View style={styles.__balance}>
            <H5Thin txtStyle={{color:"#ffffff70"}}>
                <>Your Balance</>
            </H5Thin>
        </View>
        <View style={styles.__amount}>
            <H2>
                <>₹ {state?.state.amount || 0}</>
            </H2>
        </View>
        {/* <View>
            <ActivityIndicator size={"large"} color={"pink"}/>
        </View> */}
        <View style={styles.__btns}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={["#6953F7", PRIMARY_PINK]} style={styles.__addBtn}>
                    <Pressable onPress={toggleAddModal}>
                        <H6Thin>
                            <>Add Money</>
                        </H6Thin>
                    </Pressable>
            </LinearGradient>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={["#6953F7", PRIMARY_PINK]} style={styles.__payBtn}>
                    <Pressable onPress={togglePayModal}>
                        <H6Thin>
                            <>Pay Money</>
                        </H6Thin>
                    </Pressable>
            </LinearGradient>
        </View>
        <AddMoneyModal isModal={isAddMoneyModal} onToggleModal={toggleAddModal}/>
        <PayMoneyModal isModal={isPayModal} onToggleModal={togglePayModal}/>
    </View>
  )
}

export default HomeHeader

const styles = StyleSheet.create({
    __title:{
        paddingTop:30,
        paddingHorizontal:30
    },
    __name:{
        color:PRIMARY_BLUE
    },
    __btns:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:30,
    },
    linearGradient: {
        flex: 1,
        width:30,
        height:40,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
    __addBtn:{
        width:'45%',
        textAlign:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:50

    },
    __payBtn:{
        width:'45%',
        textAlign:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        borderRadius:50

    },
    __balance:{
        paddingTop:20
    },
    __amount:{

    }
})