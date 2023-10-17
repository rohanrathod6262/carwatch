import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Linking, TouchableOpacity ,Alert } from 'react-native';

const PasswordSetup = () => {
    const [password, setPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');

    const createaccount = () => {
        if (password.length >=5 && password===newpassword) {
            const url = 'https://www.google.com';
            Linking.openURL(url);
          }else if(password.length <5 && newpassword.length <5){
            Alert.alert('Error', 'Password should be minimum 5 charecters.');
          }else if(password!=newpassword){
            Alert.alert('Error', 'Password doesnt match.');
          }
    };


    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/mazigadi.png")} // Replace with the actual path to your image
                style={styles.logo}
            />
            <Text style={styles.text}>Create your password</Text>
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setPassword(newText)}
                value={password}
                placeholder="Password"
            />
            <TextInput
                style={styles.input}
                onChangeText={(newText) => setNewPassword(newText)}
                value={newpassword}
                placeholder="Confirm Password "
            />
            <TouchableOpacity
                style={styles.customButton}
                onPress={createaccount}
            >
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
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
    customButton: {
        width: 300,
        marginTop:20,
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



export default PasswordSetup;