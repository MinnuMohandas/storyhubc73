import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import WriteStory from './screens/writeStoryScreen.js'
import ReadStory from './screens/readStoryScreen.js'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class App extends React.Component {
  render(){
  return (
      <AppContainer/>
   );
  }
}

const Tabcontainer=createBottomTabNavigator({
  write:WriteStory ,
  read:ReadStory
},
{
  defaultNavigationOptions:({navigation})=>({
   tabBarIcon:({})=>{
     const routname=navigation.state.routeName;
     if(routname==="write"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:35,height:35}}/>
        )
     }
     else if(routname==="read"){
       return(
         <Image
         source={require("./assets/read.png")}
         style={{width:35,height:35}}/>
       )
    }
   }
  })
}
);
const AppContainer=createAppContainer(Tabcontainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
