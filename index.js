// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);



import { Navigation } from "react-native-navigation";
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import App from "./App";
import {name as appName} from './app.json';
import BasicAnimation from "./screens/BasicAnimation";
import useAnimatedStyle_ from "./screens/useAnimatedStyle_";
import AnimatingProps from "./screens/AnimatingProps";

// -AppRegistry.registerComponent(appName, () => App);


Navigation.registerComponent('com.myApp.mainScreen', () => App);
Navigation.registerComponent('BasicAnimation',() => BasicAnimation);
Navigation.registerComponent('useAnimatedStyle',() => useAnimatedStyle_);
Navigation.registerComponent('AnimatingProps',() => AnimatingProps);


Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'com.myApp.mainScreen'
             }
           }
         ]
       }
     }
  });
});
