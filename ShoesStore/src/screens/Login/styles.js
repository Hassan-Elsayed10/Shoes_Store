import {ScaledSheet} from 'react-native-size-matters';
const styles = ScaledSheet.create({
    container: {
        backgroundColor: "#fff",
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100%',
    },

    inputView: {
        backgroundColor: "#edf2fb",
        borderRadius: '30@vs',
        width: "70%",
        height: '45@vs',
        marginBottom: '20@vs',
        flexDirection: 'row',
        paddingEnd:'20@vs',
        alignItems:'center'
    },
    TextInput: {
        height: '50@vs',
        flex: 1,
        padding: '10@vs',
        marginLeft: '10@vs',  
        color:'black'      
    },
    forgot_button: {
        height: '30@vs',
        marginBottom: '30@vs',
        color:'#abc4ff'

    },
    loginBtn: {
        width: "80%",
        borderRadius: '25@vs',
        height: '50@vs',
        alignItems: "center",
        justifyContent: "center",
        marginTop: '40@vs',
        backgroundColor: "#001427",
    },
    loginText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#abc4ff'
    }
});
export default styles;