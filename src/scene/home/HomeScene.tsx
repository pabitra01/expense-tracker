import React, { useContext, useEffect } from 'react'
import HomeContent from '../../component/home/HomeContent'
import AskNameScene from '../name/AskNameScene'
import { appContext } from '../../context/AppContext'
import { IAppContext, IValue } from '../../interface/appContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NAME } from '../../context/reducer/type'

const HomeScene = () => {
  const state=useContext(appContext);
  if(state?.state.name===null || state?.state.name===""){
    return <AskNameScene/>
  }else{
    return <HomeContent/>
  }
}

export default HomeScene
