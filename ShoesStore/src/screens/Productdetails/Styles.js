import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10,
        color:'black'
    },
    price: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1.5,
        color:'black'

    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '300',
        marginBottom:'50%',
        color:'black'

    },

    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 10,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: '#abc4ff',
        fontWeight: '500',
        fontSize: 16,
    },
});

export default styles;