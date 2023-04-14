import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/Login/Login';
import SignUp from '../screens/SignUp/Signup';
const Stack = createStackNavigator();

function Loginstack () {
  return (
      <Stack.Navigator >
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
  );
}
export default Loginstack;