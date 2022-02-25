import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation';
import {MaterialIcons } from '@expo/vector-icons';
import menu1Screen from './Tabs/menu1';
import menu2Screen from './Tabs/menu2';
import menu3Screen from './Tabs/menu3';
import menu4Screen from './Tabs/menu4';
import menu5Screen from './Tabs/menu5';
import universal_constants from '../assets/constants/universal_constants';


const HomeTabNavigator = createMaterialTopTabNavigator({
    menu1: menu1Screen,
    menu2: menu2Screen,
    menu3: menu3Screen,
    menu4: menu4Screen,
    menu5: menu5Screen,

},{
    navigationOptions: {
        tabBarOptions: {
            scrollEnabled: true,
            activeTintColor: '#fff',
            inactiveTintColor: '#eee',
            style:{
                backgroundColor: universal_constants['app_primary_header_color']
            },
            indicatorStyle: {
                 backgroundColor: '#488b1f'
             }
          }
          
          
    }
})


export default class menuScreen extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Explore Menu',
            drawerIcon: (<MaterialIcons name="restaurant-menu" size={20} color="black" />),
            drawerLabel: 'Menu',
            headerStyle: {  backgroundColor: universal_constants['app_primary_header_color']},
            headerTintColor: 'white',
            headerLeft: ( <TouchableOpacity activeOpacity={1.0} onPress={()=>navigation.navigate('allCategories')} style={{flex:1, justifyContent:'center', alignItems:'center', marginLeft:10}}>
            <MaterialIcons name="arrow-back" size={27} color="white" />
       </TouchableOpacity> ),

        }
    }


    render(){
        return(
            <HomeTabNavigator />
        )
    }
}


