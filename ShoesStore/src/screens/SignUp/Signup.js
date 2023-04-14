import {KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View, Pressable} from 'react-native';
import { useState } from "react";
import { addUser, getUser } from "../../Store/userSlice";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/core';
export function SignUp() {
    const navigation = useNavigation();
    const [username, setuser] = useState('');
    const [password, setpassword] = useState('');
    const [address, setAddress] = useState('');
    const [age, setage] = useState('');
    const [gender, setgender] = useState('');
    const [phone, setphone] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const users = useSelector(state => state.users.user)
    const dispatch = useDispatch();

    const add = () => {
        const data = {
            username,
            password,
            address,
            age,
            gender,
            phone,
            firstname,
            lastname
        }
        setuser('')
        setpassword('')
        setAddress('')
        setage('')
        setgender('')
        setphone('')
        setfirstname('')
        setlastname('')
        dispatch(addUser(data))
        navigation.navigate('SignIn')
    }

    const getalluser = () => {
        dispatch(getUser())
        console.log(users)
        navigation.navigate('Account')
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
            <ScrollView>
                <View style={styles.root}>
                    <View style={styles.container}>
                        <View style={styles.row}>
                            <Text style={styles.label}>Username</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="user_name"
                                value={username}
                                onChangeText={setuser}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Phone number</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Phone_number"
                                value={phone}
                                onChangeText={setphone}
                                keyboardType={'phone-pad'}
                            />
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Address</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Address"
                                value={address}
                                onChangeText={setAddress}
                            />

                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Age</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="age"
                                value={age}
                                onChangeText={setage}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Firstname</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Firstname"
                                value={firstname}
                                onChangeText={setfirstname}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Lastname</Text>
                            <TextInput
                                placeholder="Lastname"
                                style={styles.input}
                                value={lastname}
                                onChangeText={setlastname}
                            />
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput
                                placeholder="Password"
                                style={styles.input}
                                value={password}
                                onChangeText={setpassword}
                            />
                        </View>
                        <View style={styles.lastrow}>
                            <Text style={styles.label}>Gender</Text>
                            <TextInput
                                placeholder="gender"
                                style={styles.input}
                                value={gender}
                                onChangeText={setgender}
                            />
                        </View>
                    </View>
                    <Pressable style={styles.button} onPress={add}>
                        <Text style={styles.buttonText}>SignUp</Text>
                    </Pressable>
                </View>
            </ScrollView>

        </KeyboardAvoidingView>

    );
};

export default SignUp;