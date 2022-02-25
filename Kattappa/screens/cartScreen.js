import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialIcons } from '@expo/vector-icons';
import universal_constants from '../assets/constants/universal_constants';

export default class cartScreen extends React.Component{
    // static navigationOptions = {
    //     title: 'Cart',
        
    // }

    static navigationOptions = ({ navigation }) => {
    
        return {
            drawerLabel: 'Cart',
            title: 'Cart',
            headerStyle: {  backgroundColor: universal_constants['app_primary_header_color']},
            headerTintColor: 'white',
            headerLeft: ( <TouchableOpacity activeOpacity={1.0} onPress={()=>navigation.navigate('allCategories')} style={{flex:1, justifyContent:'center', alignItems:'center', marginLeft:10}}>
            <MaterialIcons name="arrow-back" size={27} color="white" />
       </TouchableOpacity> ),
        };
      };

    render(){
        return(
            <View style={styles.boxStyle}>
                <Text style={styles.textStyle}> cart screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boxStyle: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle: {
        fontSize:16
    }
});

