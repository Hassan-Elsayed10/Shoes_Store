import { View, Text, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { cartSclice } from "../Store/cartSlice";
import { useDispatch } from "react-redux";

const CartListItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(cartSclice.actions.changeQuantity({productId: cartItem.product.id, amount:1}))
   };

  const decreaseQuantity = () => {
    dispatch(cartSclice.actions.changeQuantity({productId: cartItem.product.id, amount:-1}))

   };

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.product.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>
        <View style={styles.footer}>
          <Icon
            name="plus-circle-outline"
            size={30}
            color="#abc4ff"
            onPress={increaseQuantity}
          />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>

          <Icon
            name="minus-circle-outline"
            size={30}
            color="#abc4ff"
            onPress={decreaseQuantity}
          />
          <Text style={styles.itemTotal}>${cartItem.product.price * cartItem.quantity}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: '40%',
    aspectRatio: 1,
  },
  name: {
    fontWeight: '500',
    fontSize: 18,
    color:'black'

  },
  size: {
    fontSize: 16,
    color: 'gray',
    color:'black'

  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: 'auto',
    fontWeight: '500',
    color:'black'

  },
});

export default CartListItem;