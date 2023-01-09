import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DARK_PRIMARY_BG } from '../../colors/color'
import HomeHeader from './HomeHeader'
import Analytics from './Analytics'

const HomeContent = () => {
  return (
    <View style={styles.__container}>
        <HomeHeader/>
        <Analytics/>
    </View>
  )
}

export default HomeContent

const styles = StyleSheet.create({
    __container:{
        height:"100%",
        width:"100%",
        backgroundColor:DARK_PRIMARY_BG
      },
})