import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './authentication/login';
import SignUp from './authentication/signup';
import OtpVerification from './authentication/otp_verification';
import PasswordSetup from './authentication/password_setup';
import Splash from './authentication/splash';
export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{
            headerShown: false,
          }} name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ headerShown: false }} />
        <Stack.Screen name="PasswordSetup" component={PasswordSetup} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}