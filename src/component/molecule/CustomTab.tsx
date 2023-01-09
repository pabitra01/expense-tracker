import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,Pressable} from 'react-native';
import { PRIMARY_BLUE } from '../../colors/color';

const  CustomTab=({ state, descriptors, navigation }:any)=> {
  return (
    <View style={{ flexDirection: 'row' }}>
        <View style={styles.__container}>
            <View style={styles.__content}>
      {state.routes.map((route: { key: string | number; name: any; }, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable style={styles.__icons} onPress={onPress} key={route.key}></Pressable>
        );
      })}
         </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    __container:{
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        bottom:20,
        paddingHorizontal:30
    },
    __content:{
        width:"100%",
        backgroundColor:"#272727",
        height:50,
        borderRadius:50,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:30
    },
    __icons:{
        width:20,
        height:20,
        backgroundColor:PRIMARY_BLUE,
        borderRadius:50
    }
})
export default CustomTab
