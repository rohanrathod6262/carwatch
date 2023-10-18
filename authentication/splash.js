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
            <Text style={styles.text}>Qucik contact app for car owners</Text>
            <Image
                source={require("../assets/house.png")} // Replace with the actual path to your image
                style={styles.house}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop:250,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        width: 150,
        height: 80,
    },
    house:{
        marginTop:150,
        width: 400,
        height: 300,
    },
    text:{
        alignItems:'center'
    }
});



export default Splash;