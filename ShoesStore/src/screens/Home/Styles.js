import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    itemContainer: {
        width: '50%',
        borderWidth:1,
        borderRadius:10,
        marginBottom:10,
        borderColor:'#caf0f8'
    },
    image: {
        width: '100%',
        aspectRatio:1.5,
    },

    price: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1.5,
        color:'black',
        marginLeft:70

    },
});
export default styles;