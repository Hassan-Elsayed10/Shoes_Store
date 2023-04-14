import {
    View,
    Image,
    FlatList,
    useWindowDimensions,
    Text,
    ScrollView,
    Pressable,
    SafeAreaView,
    ActivityIndicator
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { cartSclice } from '../../Store/cartSlice';
import { useState } from 'react';
import styles from './Styles';
const ProductDetailsScreen = ()=> {
    const [loading, setLoading] = useState(false);

    const product = useSelector(state => state.products.selectedProduct)
    // console.log(product)
    const dispatch = useDispatch();
    const { width } = useWindowDimensions();

    const addToCart = () => {
        setLoading(true);
        setTimeout(() => {
        dispatch(cartSclice.actions.addCartItems({product}))
        setLoading(false);
          }, 1000);
    };

    return (
        <SafeAreaView>
            <ScrollView>
                {/* Image Carousel */}
                <FlatList
                    data={product.images}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                />
                <View style={{ padding: 20 }}>
                    {/* Title */}
                    <Text style={styles.title}>{product.title}</Text>

                    {/* Price */}
                    <Text style={styles.price}>${product.price}</Text>

                    {/* Description */}
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            {/* Add to cart button */}
            {loading ?( <ActivityIndicator visible={loading} size={20}/>):(
            <Pressable onPress={addToCart} style={styles.button}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </Pressable>
            )}
            {/* Navigation icon */}
        </SafeAreaView>
    );
};


export default ProductDetailsScreen;
