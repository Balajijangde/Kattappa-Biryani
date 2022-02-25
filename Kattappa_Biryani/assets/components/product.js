import React from 'react';
import {View, StyleSheet, Text, Image, Button, TouchableOpacity} from 'react-native';

export default class Product extends React.Component{
    render(){
        return(
            <View style={styles.product}>
                    <Image style={styles.product_image} source={this.props.productImage} />
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center', borderBottomLeftRadius: 7, }}>
                            <Text style={{fontSize: 18, marginLeft: 5}}> {this.props.productName} </Text>
                            <Text style={{fontSize: 15, marginLeft: 5, color: '#76D33D'}}> Rs. {this.props.productPrice} </Text>
                        </View>
                        <View style={{flex: 1, backgroundColor: 'white', justifyContent:'center', alignItems: 'flex-end', borderBottomRightRadius: 7, }}>
                            <TouchableOpacity activeOpacity={0.7} style={{backgroundColor: '#76D33D', padding: 6, borderRadius: 4, marginRight: 10}}>
                                <Text style={{color: 'white'}}> ADD TO CART</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    product: {
        flex: 1,
        backgroundColor: 'white',
        height: 230,
        marginBottom: 20,
        borderRadius: 7,
        elevation: 5,
        borderRadius: 10,
    },
    product_image: {
        height: 170,
        resizeMode: 'cover',
        width: undefined,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,

        

    }
})