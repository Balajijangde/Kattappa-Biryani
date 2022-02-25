import React from 'react';
import {View, Text, StyleSheet, WebView, TouchableOpacity} from 'react-native';
import universal_constants from '../assets/constants/universal_constants';
import {MaterialIcons } from '@expo/vector-icons';

export default class paymentScreen extends React.Component{
    static navigationOptions = ({ navigation }) => {
    
        return {
            drawerLabel: 'Payment',
            title: 'Payment',
            headerStyle: {  backgroundColor: universal_constants['app_primary_header_color']},
            headerTintColor: 'white',
            headerLeft: ( <TouchableOpacity activeOpacity={1.0} onPress={()=>navigation.navigate('allCategories')} style={{flex:1, justifyContent:'center', alignItems:'center', marginLeft:10}}>
            <MaterialIcons name="arrow-back" size={27} color="white" />
       </TouchableOpacity> ),
        };
    };
    render(){
        return(
            <WebView  style={styles.web_view} />
        )
    }
}

const styles = StyleSheet.create({
    web_view: {
        flex: 1,
    }
});

