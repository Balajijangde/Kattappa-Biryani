import React from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet, ImageBackground} from 'react-native';

export default class LoginScreen extends React.Component{
constructor(props){
    super(props);
}
    render(){
        return(
            <ImageBackground source={require("./../assets/images/signup_background.jpg")} style={styles.background}>
                <View style={styles.overlay}>
                    <View style={styles.upper_block}>
                        <Text style={styles.welcome}> 
                            Join us ! {"\n"} 
                        </Text>
                        <Text style={styles.subtitle}> 
                            one step away to {"\n"} taste Royal Biryani.
                        </Text>
                    </View>
                    <View style={styles.middle_block}>
                        <View style={styles.input_container}>
                            <TextInput multiline={false} style={styles.inputs} underlineColorAndroid='transparent' placeholder='Email address' placeholderTextColor='black' />
                            <TextInput multiline={false} style={styles.inputs} underlineColorAndroid='transparent' placeholder='Password' placeholderTextColor='black' />
                            <TextInput multiline={false} style={styles.inputs} underlineColorAndroid='transparent' placeholder='Password again' placeholderTextColor='black' />
                        </View>
                    </View>
                    
                    <View style={styles.lower_block}>
                        <TouchableOpacity style={styles.login_button} activeOpacity={1.0}>
                            <Text style={styles.button_text}> Signup to Kattappa Biryani </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    upper_block: {
        flex: 1,
        justifyContent: 'flex-end',
        
    },
    middle_block: {
        flex: 2,
        justifyContent: 'center',
    
    },
    lower_block:{
        flex: 1,
        alignItems: 'flex-end',

    },
    welcome: {
        fontFamily: 'serif',
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 24,
        textAlign: 'center',
    },
    subtitle: {
        fontFamily: 'sans-serif',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 18,
        textAlign: 'center',
    },
    input_container: {
        height: 225,
        width: 270,
        elevation:100,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        alignSelf: 'flex-end',
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        
        
    },
    login_button:{
        backgroundColor: '#3b5998',
        width: 270,
        height: 60,
        justifyContent: 'center',
        borderRadius: 3,

    },
    button_text: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontFamily: 'Roboto',
        textAlign: 'left',
        marginLeft: 20,


    },
    inputs: {
        height: 75,
        paddingLeft: 20,
        color: 'rgba(0,0,0, 0.8)',

    }
})