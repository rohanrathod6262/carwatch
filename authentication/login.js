import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Linking, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const forgetpassword = () => {
        navigation.navigate('PasswordSetup');
    };
    const login = () => {
        const url = 'https://www.google.com';
        Linking.openURL(url);
    };
    const signup = () => {
        navigation.navigate('SignUp');
    };



    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/mazigadi.png")} // Replace with the actual path to your image
                style={styles.logo}
            />
            <Text style={styles.text}>Login</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setPhone(newText)}
                value={phone}
                placeholder="Phone Number"
            />
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setPassword(newText)}
                value={password}
                placeholder="Password"
            />
            <Text style={styles.passwordlink} onPress={forgetpassword}>
                Forgot Password?
            </Text>
            <TouchableOpacity
                style={styles.customButton}
                onPress={login}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.signuplink} onPress={signup}>
                OR SignUp
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



export default Login;