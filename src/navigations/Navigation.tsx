import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HistoryScene from '../scene/history/HistoryScene';
import RootStackNavigator from './RootStack';
import BottomTabs from './Tab';

const Navigation = () => {
    return (
        <NavigationContainer>
           <BottomTabs/>
        </NavigationContainer>
  )
}

export default Navigation