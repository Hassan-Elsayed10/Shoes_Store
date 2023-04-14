import React from "react";  
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from "../screens/Home/HomeScreen";
import ProductDetailsScreen from "../screens/Productdetails/ProductDScreen";
import { Pressable , Text, View } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch, useSelector } from "react-redux";
import { selectNumerOfItems } from "../Store/cartSlice";
import { clearToken } from "../Store/authSlice";
import Entypo from 'react-native-vector-icons/Entypo';


const Stack = createStackNavigator();

const HomeStack =()=>{
    const dispatch = useDispatch();
    const numofItems = useSelector(selectNumerOfItems);
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name='HomeScreen'
            component={HomeScreen}
            options={({navigation})=>(
                {
                    headerRight: ()=> (
                     <Pressable onPress={()=>navigation.navigate('Carts')} style={{flexDirection:'row'}}>
                             <View style={{marginTop:20}}>
                                <FontAwesome5 name='shopping-cart' size={23} color="#abc4ff" />
                             </View>
                         <Text style={{marginBottom:10,marginRight:5,fontWeight:"500",color:'#0d47a1',fontSize:23}}>{numofItems}</Text>
                     </Pressable>
                    ),
                    headerLeft: ()=> (
                        <Pressable onPress={()=>dispatch(clearToken())} style={{flexDirection:'row'}}>
                                <View style={{margin:5}}>
                                   <Entypo name='log-out' size={30} color="#abc4ff" />
                                </View>
                        </Pressable>
                       ),
                })}/>
            <Stack.Screen 
            name='ProductDetails' 
            component={ProductDetailsScreen}
            options={{presentation:'modal'},({navigation})=>(
                    {
                    headerRight: ()=> (
                        <Pressable onPress={()=>navigation.navigate('Carts')} style={{flexDirection:'row'}}>
                             <View style={{marginTop:20}}>
                                <FontAwesome5 name='shopping-cart' size={23} color="#abc4ff" />
                             </View>
                             <Text style={{marginBottom:10,marginRight:5,fontWeight:"500",color:'#0d47a1',fontSize:23}}>{numofItems}</Text>
                        </Pressable>
                    ),
                    headerLeft: ()=> (
                        <Pressable onPress={()=>dispatch(clearToken())} style={{flexDirection:'row'}}>
                                <View style={{margin:5}}>
                                   <Entypo name='log-out' size={30} color="#abc4ff" />
                                </View>
                        </Pressable>
                       ),
                })
                }/>
        </Stack.Navigator>
    );
}

export default HomeStack;