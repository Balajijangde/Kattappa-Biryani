import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Product from './../../assets/components/product';
import Menu from './../../assets/storage/menu';

export default class menu5Screen extends React.Component{

    static navigationOptions = () => {
        return {
            title: 'Sweets',
        }
    }

    render(){
        return(
           <ScrollView style={styles.main_view}>
               {Menu.map(p => {
                    if(p.category=="sweets"){
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