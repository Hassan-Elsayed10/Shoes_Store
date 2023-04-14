import { KeyboardAvoidingView, ActivityIndicator, Platform, ScrollView, Text, TextInput, View, Pressable, SafeAreaView } from 'react-native';
import { useState } from "react";
import { addUser } from "../../Store/userSlice";
import styles from "./styles";
import { useDispatch} from "react-redux";
import { clearToken } from '../../Store/authSlice';

export function Checkout() {
    const [address, setAddress] = useState('');
    const [phone, setphone] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [loadingadd, setLoadingadd] = useState(false);

    const LOgout = ()=>{
        setLoading(true);
        setTimeout(() => {
        dispatch(clearToken())
        setLoading(false);
          }, 1000);
    }
    const add = () => {

        const data = {
            address,
            phone,
            firstname,
            lastname,
        }
        setAddress('')
        setphone('')
        setfirstname('')
        setlastname('')
        setLoadingadd(true);
        setTimeout(() => {
        dispatch(addUser(data))
        setLoadingadd(false);
          }, 1000);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
            <ScrollView>
                <View style={styles.root}>
                    <View style={styles.container}>


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
                        </View>
                    </View>
                    
                    {loadingadd ?( <ActivityIndicator visible={loadingadd} size={20}/>):(
                    <Pressable style={styles.button} onPress={add}>
                        <Text style={styles.buttonText}>Done</Text>
                    </Pressable>)
                    }
                    {loading ?( <ActivityIndicator visible={loading} size={20}/>):(
                    <Pressable style={styles.button} onPress={LOgout}>
                        <Text style={styles.buttonText}>LogOut</Text>
                    </Pressable>
                    )}
                </View>
            </ScrollView>

        </KeyboardAvoidingView>

    );
};

export default Checkout;