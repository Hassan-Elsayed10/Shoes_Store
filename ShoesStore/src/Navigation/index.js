import { NavigationContainer } from "@react-navigation/native";
import HomeTabs from "./HomeTabs";
import SignIn from "../screens/Login/Login";
import { useSelector } from "react-redux";
import Loginstack from "./Loginstack";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Router = () => {
  const token = useSelector(state=> state.auths.token)
  return (
    
    <NavigationContainer>

      {token? <HomeTabs/> : <SignIn/> && <Loginstack/>}
     

    </NavigationContainer>
    
    
  );
}
export default Router;