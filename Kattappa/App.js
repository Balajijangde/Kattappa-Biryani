import React from 'react';
import {createStackNavigator} from 'react-navigation';
import loginScreen from './screens/loginScreen';
import registerScreen from './screens/registerScreen';
import splashScreen from './screens/splashScreen';
import drawerNavigator from './screens/drawerNavigator';
import allCategoriesScreen from './screens/allCategoriesScreen';

const RootStackNavigator = createStackNavigator({
  splash: splashScreen,
  login: loginScreen,
  register: registerScreen,
  drawerNavigator: drawerNavigator,
  allCategories: allCategoriesScreen,
},{
  initialRouteKey: 'splash',
  headerMode: 'none'
})


export default class App extends React.Component{
  render(){
    return(
        <RootStackNavigator />
    );
  }
}

