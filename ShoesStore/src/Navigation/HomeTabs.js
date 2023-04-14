import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from "./HomeStack";
import CartStack from "./CartStack";

const Tab = createBottomTabNavigator();
const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{ tabBarShowLabel: false, tabBarActiveTintColor: "#abc4ff", tabBarInactiveTintColor: "#0d47a1" }}>
            <Tab.Screen
                component={HomeStack}
                name='Home'
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" color={color} size={25} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen
                component={CartStack}
                name='Carts'
                options={{
                    tabBarIcon: ({ color }) => (
                        
                        <Entypo name="shopping-cart" color={color} size={25} />
                    ),
                    headerShown: false

                }}

            />

        </Tab.Navigator>
    );
}

export default HomeTabs;