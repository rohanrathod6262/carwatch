import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Linking, TouchableOpacity ,Alert  } from 'react-native';

const SignUp = ({ navigation }) => {
    const [phone, setPhone] = useState('');

    const signup = () => {
        if (phone.length === 10) {
            navigation.navigate('OtpVerification');
          } else {
            Alert.alert('Error', 'Please enter a 10-digit phone number.');
          }
        
    };
    const login = () => {
        navigation.navigate('Login');
    };


    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/mazigadi.png")} // Replace with the actual path to your image
                style={styles.logo}
            />
            <Text style={styles.text}>Enter your phone number</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setPhone(newText)}
                value={phone}
                placeholder="Phone Number"
            />
            <TouchableOpacity
                style={styles.customButton}
                onPress={signup}
            >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
            <Text style={styles.signuplink} onPress={login}>
                OR Login
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        marginTop: 80,
        marginBottom: 40,
        fontSize: 24,
        textAlign: 'center',
    },
    logo: {
        width: 150,
        height: 80,
    },
    input: {
        marginTop: 20,
        width: 300,
        height: 50,
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    passwordlink: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 150,
        color: 'blue',
        textDecorationLine: 'underline',
    },
    signuplink: {
        marginTop: 10,
        color: 'blue',
        textDecorationLine: 'underline',
    },
    customButton: {
        marginTop:20,
        width: 300,
        height: 60,
        borderRadius: 6,
        backgroundColor: "#613EEA",
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});



export default SignUp;