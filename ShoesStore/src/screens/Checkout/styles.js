import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 10,
    margin:5
  },
  row: {
    marginVertical: 5,
    marginBottom:"5%"
  },
  label: {
    fontWeight: 'bold',
    color:'black'

  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 5,
    height: 40,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 2,
    color:'black'

  },
  errorLabel: {
    color: 'red',
  },
  button: {
    backgroundColor: 'black',
    width: '90%',
    alignSelf: 'center',
    padding: 20,
    borderRadius: 100,
    alignItems: 'center',   
    marginBottom:20
},
buttonText: {
    color: '#abc4ff',
    fontWeight: '500',
    fontSize: 16,
},
container:{
    marginBottom:10
},
text:{
  color:'#abc4ff'
},
lastrow: {
  marginBottom:20
},



});

export default styles;