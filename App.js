import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './authentication/login';
import SignUp from './authentication/signup';
import OtpVerification from './authentication/otp_verification';
import PasswordSetup from './authentication/password_setup';
import Splash from './authentication/splash';
import Home from './component/home';
import OnboardingScreen from './authentication/OnboardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Footer from './component/footer';

export default function App() {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);
  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }

    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);


  const Stack = createStackNavigator();

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Splash">
    //     <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
    //     <Stack.Screen
    //       options={{
    //         headerShown: false,
    //       }} name="Splash" component={Splash} />
    //     <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
    //     <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
    //     <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ headerShown: false }} />
    //     <Stack.Screen name="PasswordSetup" component={PasswordSetup} options={{ headerShown: false }} />
    //   </Stack.Navigator>
    // </NavigationContainer>


    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Home">
    //     <Stack.Screen name="Home" component={Home} options={{
    //       headerTitleAlign: 'center', headerRight: () => (
    //         <Image
    //           source={require("./assets/human.png")}
    //           style={{
    //             width: 35,
    //             height: 35,
    //             marginRight: 20,
    //             borderRadius: 15,
    //           }}
    //         />
    //       ),
    //     }} />
    //   </Stack.Navigator>
    // </NavigationContainer>



    isAppFirstLaunched != null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
          
            <Stack.Screen
              name="OnboardingScreen"
              component={OnboardingScreen}
            />
          
          <Stack.Screen
            options={{
              headerShown: false,
            }} name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={Home} options={{
            headerShown: true,
            headerTitleAlign: 'center', headerRight: () => (
              <Image
                source={require("./assets/human.png")}
                style={{
                  width: 35,
                  height: 35,
                  marginRight: 20,
                  borderRadius: 15,
                }}
              />
            ),
          }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="OtpVerification" component={OtpVerification} options={{ headerShown: false }} />
          <Stack.Screen name="PasswordSetup" component={PasswordSetup} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}