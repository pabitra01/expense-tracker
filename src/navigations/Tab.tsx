import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigatorParamList } from './type';
import EntryScene from '../scene/home/EntryScene';
import HistoryScene from '../scene/history/HistoryScene';
import CustomTab from '../component/molecule/CustomTab';
const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={(props: any) => <CustomTab {...props} />}>
      <Tab.Screen
        name="Home"
        component={EntryScene}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="History" component={HistoryScene} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default BottomTabs;