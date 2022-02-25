import React from 'react';
import {StyleSheet, ScrollView, Text, View, TouchableOpacity, ImageBackground, Alert} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import universal_constants from './../assets/constants/universal_constants';

export default class AllCategoriesScreen extends React.Component{

  constructor(props){
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    
    return {
        drawerLabel: 'All Categories',
        title: 'All Categories',
        headerStyle: {  backgroundColor: universal_constants['app_primary_header_color']},
        headerTintColor: 'white',
        headerLeft: ( <TouchableOpacity activeOpacity={1.0} onPress={()=>navigation.openDrawer()} style={{flex:1, justifyContent:'center', alignItems:'center', marginLeft:10}}>
                            <MaterialIcons name="menu" size={27} color="white" />
                      </TouchableOpacity> ),
    };
  };

  render(){
    return(

      <ScrollView style={styles.main_view}>
        <View style={styles.category_row}>
          <Category category_name="Chicken Roast" category_image={require("./../assets/images/cat1.jpg")} />
          <Category category_name="Royal Biryani" category_image={require("./../assets/images/cat2.jpg")} />
          <Category category_name="Beverages" category_image={require("./../assets/images/cat3.jpg")} />
          <Category category_name="Desserts" category_image={require("./../assets/images/cat4.jpg")} />         
        </View>
      </ScrollView>
    )
  }
}


class Category extends React.Component{

constructor(props){
  super(props);
}  
  render(){
    return(
      <TouchableOpacity style={styles.category_container} activeOpacity={0.8} onPress={this.props.href} elevation={10}>
        <ImageBackground source={this.props.category_image} resizeMode='cover' style={styles.category_background} borderRadius={10}>
          <View style={styles.category_info}> 
            <Text style={styles.category_info_text}> {this.props.category_name} </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      
    )
  }
}

const styles = StyleSheet.create({
  main_view: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  category_row: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    
  },
  category_container: {
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0, 0.4)',
    height: 120,
    width: 160,
    marginBottom: 7,
    borderRadius: 10,
    
    

  },
  category_background: {
    flex: 1,
    borderRadius: 10,


  },
  category_info: {
   position: 'absolute',
   bottom: 0,
   left: 0,
   right: 0,
   backgroundColor: 'rgba(0,0,0, 0.8)',
   height: 20,
   justifyContent: 'center',
   borderBottomLeftRadius: 10,
   borderBottomRightRadius: 10,
  },
  category_info_text: {
    color: 'white',
    marginLeft: 8,

  }
})