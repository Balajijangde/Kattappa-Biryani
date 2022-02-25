import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class profileScreen extends React.Component{
    static navigationOptions = {
        title: 'My Account'
    }
    render(){
        return(
            <View style={styles.boxStyle}>
                <Text style={styles.textStyle}> profile screen</Text>
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

