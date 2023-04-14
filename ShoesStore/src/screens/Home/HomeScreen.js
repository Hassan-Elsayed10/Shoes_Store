import {
  Image,
  FlatList,
  Pressable,
  SafeAreaView,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, productsSlice } from '../../Store/productsSlice';
import { useEffect } from 'react';
import styles from './Styles';
export function HomeScreen(props) {
  const navigation = useNavigation();
  const products = useSelector(State => State.products.products)

  //console.log("WElcom to products", products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(products.id))
  }, [])

  const Handler = (item) => {

    navigation.navigate('ProductDetails', dispatch(productsSlice.actions.setSelectedProduct(item.id)))

  }


  return (
    <SafeAreaView>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable style={styles.itemContainer} onPress={() => Handler(item)} >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.price}>${item.price}</Text>
          </Pressable>
        )}

        numColumns={2}
      />
    </SafeAreaView>

  );
};



