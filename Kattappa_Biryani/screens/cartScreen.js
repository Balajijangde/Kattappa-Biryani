import React from 'react';
import {Text, View, Button} from 'react-native';

export default class cartScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Cart screen </Text>
                <Button title="login" onPress={()=>this.props.navigation.navigate("login")} />
                <Button title="menu" onPress={()=>this.props.navigation.navigate("menu")} />
            </View>
        )
    }
}