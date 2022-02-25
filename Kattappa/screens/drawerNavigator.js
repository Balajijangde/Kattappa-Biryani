import React from 'react';
import {StyleSheet, Image, View, Text, ScrollView, ImageBackground, SafeAreaView} from 'react-native';
import {createDrawerNavigator, createStackNavigator, DrawerItems} from 'react-navigation';

import aboutUsScreen from './aboutUsScreen';
import cartScreen from './cartScreen';
import menuScreen from './menuScreen';
import offerScreen from './offerScreen';
import myOrdersScreen from './myOrdersScreen';
import tncScreen from './tncscreen';
import allCategoriesScreen from './allCategoriesScreen';

import { MaterialIcons } from '@expo/vector-icons';

const AllCategoriesNavigator = createStackNavigator({
    allCategories: allCategoriesScreen
})
const MenuNavigator = createStackNavigator({
    menu: menuScreen
})
const OfferNavigator = createStackNavigator({
    offer: offerScreen
})
const CartNavigator = createStackNavigator({
    cart: cartScreen
})
const MyOrdersNavigator = createStackNavigator({
    myOrders: myOrdersScreen
})
const TncNavigator = createStackNavigator({
    tnc: tncScreen
})
const AboutUsNavigator = createStackNavigator({
    aboutUs: aboutUsScreen
})

AllCategoriesNavigator.navigationOptions = {
    drawerLabel: 'All Categories',
    drawerIcon: (<MaterialIcons name="restaurant" size={20} color="black" />),
    
}
MenuNavigator.navigationOptions = {
    drawerIcon: (<MaterialIcons name="restaurant-menu" size={20} color="black" />),
    drawerLabel: 'Menu',
    drawerLockMode: 'locked-closed',
}
OfferNavigator.navigationOptions = {
    drawerIcon: (<MaterialIcons name="star" size={20} color="black" />),
    drawerLabel: 'Offers',
    drawerLockMode: 'locked-closed',
}
CartNavigator.navigationOptions = {
    drawerIcon: (<MaterialIcons name="shopping-cart" size={20} color="black" />),
    drawerLabel: 'Cart',
    drawerLockMode: 'locked-closed',
}
MyOrdersNavigator.navigationOptions = {
    drawerLabel: 'My Orders',     
    drawerIcon: (<MaterialIcons name="bookmark" size={20} color="black" />),
    drawerLockMode: 'locked-closed',
}
TncNavigator.navigationOptions = {
    drawerIcon: (<MaterialIcons name="book" size={20} color="black" />),
    drawerLabel: 'Terms & Conditions',
    drawerLockMode: 'locked-closed',
}
AboutUsNavigator.navigationOptions = {
    drawerIcon: (<MaterialIcons name="store-mall-directory" size={20} color="black" />),
    drawerLabel: 'About Us',
    drawerLockMode: 'locked-closed',
}


export default createDrawerNavigator({
    allCategories: AllCategoriesNavigator,
    menu: MenuNavigator,
    offer: OfferNavigator,
    cart: CartNavigator,
    myOrders: MyOrdersNavigator,
    tnc: TncNavigator,
    aboutUs: AboutUsNavigator,
    
},
{
    initialRouteName: 'allCategories',
})

const CustomDrawer = (props) => (
    <SafeAreaView style={styles.container}>
    <ScrollView>  
      <DrawerItems {...props} style={styles.container}/>
    </ScrollView>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    drawer_background: {
        flex: 1,
    },
    container: {
        flex: 1,
      },

})

