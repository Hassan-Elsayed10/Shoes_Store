import React from "react";  
import { createStackNavigator } from '@react-navigation/stack';
import ShoppingCarts from "../screens/Cart/Shoopingcart";
import Checkout from "../screens/Checkout/checkout";
import SignIn from "../screens/Login/Login";
const Stack = createStackNavigator();

const CartStack =()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='cartscreen' component={ShoppingCarts} options={{headerShown:false}}/>
            <Stack.Screen name='Check' component={Checkout} options={{headerShown:false}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>

        </Stack.Navigator>
    );
}

export default CartStack;