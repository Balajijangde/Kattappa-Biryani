import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Product from './../../assets/components/product';
import Menu from "./../../assets/storage/menu";


export default class menu1Screen extends React.Component{

    static navigationOptions = () => {
        return {
            title: 'Veg',
        }
    }

    render(){
        return(
           <ScrollView style={styles.main_view}>
                {Menu.map(p => {
                    if(p.category=="veg"){
                        return(
                            <Product productName={p.name} productPrice={p.price} key={p.id} productImage={p.image}/>
                        )
                    }
                })}

           </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
   main_view: {
       flex: 1,
       flexDirection: 'column',
       paddingTop: 20,
       paddingLeft: 20,
       paddingRight: 20,
   } 
})