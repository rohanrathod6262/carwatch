import React, { useState ,useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Linking, TouchableOpacity ,Alert  } from 'react-native';
import SplashScreen from 'react-native-splash-screen';


const Splash = ({ navigation }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login');
          }, 3000);
      
          return () => clearTimeout(timer);
      }, [navigation]);


    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/mazigadi.png")}
                style={styles.logo}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        width: 150,
        height: 80,
    },
});



export default Splash;