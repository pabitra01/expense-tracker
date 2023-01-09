import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EntryScene from '../scene/home/EntryScene';
import HistoryScene from '../scene/history/HistoryScene';
import { RootStackNavigationParamList } from './type';


const RootStack = createNativeStackNavigator<RootStackNavigationParamList>();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Home" component={EntryScene} />
      <RootStack.Screen name="History" component={HistoryScene} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;