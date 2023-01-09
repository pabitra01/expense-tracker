import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import HistoryContent from '../../component/history/HistoryContent'
import { appContext } from '../../context/AppContext'
import { HISTORY } from '../../context/reducer/type'
import { getAllHistory } from '../../database/realm'

const HistoryScene = () => {
  const state=useContext(appContext)
  const cb=(data:any)=>{
    state?.dispatch({type:HISTORY,payload:data})
  }
  useEffect(()=>{
    getAllHistory(cb);
    console.log(state);
    
  },[])
  return (
    <HistoryContent/>
  )
}

export default HistoryScene