import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity, ImageBackground, Image} from 'react-native';


export default class splashScreen extends React.Component{
    static navigationOptions = {
        
    }
    render(){
        return(
            <ImageBackground source={require('./../assets/images/splash_screen.jpg')} style={styles.splashBackground} resizeMode="cover">
                <View style={styles.splashOverlay}>
                    <View  style={{flex:1, justifyContent:'flex-end', alignItems: 'center'}} >
                        <Image source={require('./../assets/images/logo.png')} style={{width: 300, height: 50, }}/>
                    </View>
                    <View  style={{flex:1}} />
                    <View  style={{flex:1, justifyContent:'center', alignItems: 'center'}} >
                        <Text style={styles.normalText}>No matter where you are,{"\n"} whether you are at home, office or{"\n"} at the beach. we will find you and{"\n"} we will feed you.</Text>
                    </View>
                    <View  style={styles.buttonContainer} >
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')} style={styles.loginButton} activeOpacity={0.9}>
                            <Text style={styles.loginButtonText}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('register')} style={styles.registerButton} activeOpacity={0.9}>
                            <Text style={styles.registerButtonText}>REGISTER</Text>
                        </TouchableOpacity>   

                                         
                    </View>
                    <View style={{flex:0.3, justifyContent:'flex-start'}}>
                        <Text style={{alignSelf:'center', color:'white'}} onPress={()=>this.props.navigation.navigate('drawerNavigator')}> SKIP </Text>
                    </View>
                </View>
            </ImageBackground>
            )
        }
}

const styles = StyleSheet.create({
    loginButton:{
        backgroundColor:'#65ab0c', 
        padding:10, 
        width:150, 
        borderRadius:3
    },
    registerButton:{
        backgroundColor:'white', 
        padding:10, 
        width:150, 
        borderRadius:3
},
loginButtonText:{
    fontSize:18, 
    color:'white', 
    textAlign:'center'
},
registerButtonText:{
    fontSize:18, 
    color:'#626262', 
    textAlign:'center'
},
splashBackground:{
    flex:1, 
    height:undefined, 
    width:undefined
},
normalText:{
    textAlign:'center', 
    fontSize:16, 
    color:'white',
    
},
splashOverlay:{
    flex:1, 
    backgroundColor:'rgba(0,0,0,0.8)', 
    flexDirection:'column'
},
buttonContainer:{
    flex:1, 
    justifyContent:'space-evenly', 
    alignItems: 'center', 
    flexDirection:'row'}
});

