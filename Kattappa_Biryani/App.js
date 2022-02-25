import React from 'react';
import {View, Text, Button} from 'react-native';
import { createDrawerNavigator } from 'react-navigation';

import cartScreen from './screens/cartScreen';
import menuScreen from './screens/menuScreen';

export default class App extends React.Component{
    render(){
        return (
                <Navigator />
        )
    }
}


const Navigator = createDrawerNavigator({
    AllCategories: AllCategoriesScreen,
    AboutUs: AboutUsScreen,
        
},{
    initialRouteName: 'cart'
})
