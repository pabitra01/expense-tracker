import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackNavigationParamList = {
    Home: undefined;
    History: undefined
  };


export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackNavigationParamList
>;

export type BottomTabNavigatorParamList={
    Home: undefined;
    History: undefined
}