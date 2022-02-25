import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {MaterialIcons } from '@expo/vector-icons';
import allCategoriesScreen from './allCategoriesScreen';
import universal_constants from '../assets/constants/universal_constants';

export default class splashScreen extends React.Component{
    // static navigationOptions = {
    //     title: 'Offers',
    //     headerLeft: (<Button title='go back' onPress={()=>this.props.navigation.navigate('allCategories')} />)
    // }
    static navigationOptions = ({ navigation }) => {
    
        return {
            drawerLabel: 'Offers',
            title: 'Offers',
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
                <Text style={styles.textStyle}> offer screen</Text>
                <Button title='go back' onPress={()=>this.props.navigation.navigate('allCategories')} />
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

