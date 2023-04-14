import { Text, FlatList, View, Pressable, ActivityIndicator } from 'react-native';
import CartListItem from '../../components/CartListItem';

import { useSelector } from 'react-redux';
import { selectdelevery, selectTotlat,selectsubtol } from '../../Store/cartSlice';
import { useNavigation } from '@react-navigation/core';
import { useState } from 'react';
import styles from './Styles';
const ShoppingCartTotals = () => {
    const subtotal = useSelector(selectsubtol);
    const deliveryfee = useSelector(selectdelevery); 
    const total = useSelector(selectTotlat);
    return (
      <View style={styles.totalsContainer}>
        <View style={styles.row}>
          <Text style={styles.text}>Subtotal</Text>
          <Text style={styles.text}>{subtotal} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Delivery</Text>
          <Text style={styles.text}> {deliveryfee} US$</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.textBold}>Total</Text>
          <Text style={styles.textBold}> {total}US$</Text>
        </View>
      </View>
    );
  };
const ShoppingCarts = () => {
    const cartItems = useSelector(state => state.cart.items);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const handler= ()=>{
      setLoading(true);
      setTimeout(() => {
        navigation.navigate('Check')
         setLoading(false);
       }, 1000);

    }

    return (
        <View>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={ShoppingCartTotals}

            />

            {loading ?( <ActivityIndicator visible={loading} size={20}/>):
            (<Pressable style={styles.button} onPress={handler}>
              <Text style={styles.buttonText}>Checkout</Text>
             </Pressable>
            )}

        </View>
    );
};


export default ShoppingCarts;