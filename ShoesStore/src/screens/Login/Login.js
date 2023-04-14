import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { login } from '../../Store/authSlice';

import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from "react-native";
import styles from './styles';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';


const  SignIn= ()=> {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);


    const onHandler = async ()=>{
        setLoading(true);
        const data ={
            username,password
        }
       setTimeout(() => {
           dispatch(login(data))

            setLoading(false);
          }, 1000);
    }

    return (
        
        <View style={styles.container}>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    value={username}
                    onChangeText={setusername}
                />
                <Icon
                    name='person'
                    color='#abc4ff'
                    size={20}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <Icon
                    name='lock'
                    color='#abc4ff'
                    size={20}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.forgot_button}>SignUp</Text>
            </TouchableOpacity>
            {loading ?( <ActivityIndicator visible={loading} size={20}/>):(<TouchableOpacity style={styles.loginBtn} onPress={()=>onHandler()}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>)}
        </View>
    );
}


export default SignIn;


