import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Wellcome from "./components/Wellcome/Wellcome";
import LogIn from "./components/logIn/logIn";
import SignUp from "./components/signIn/SignIn";


const screens = {
  Wellcome: { component: Wellcome },
  Login: { component: LogIn },
  SignUp: { component: SignUp },
};



const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Wellcome" component={Wellcome} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;