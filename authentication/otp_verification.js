import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Linking, TouchableOpacity } from 'react-native';

const OtpVerification = () => {
    const [otp, setOtp] = useState('');

    const otpbutton = () => {
        const url = 'https://www.google.com';
        Linking.openURL(url);
    };


    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/mazigadi.png")} // Replace with the actual path to your image
                style={styles.logo}
            />
            <Text style={styles.text}>Enter verification code</Text>
            <View style={styles.otpContainer}>
                {Array(4)
                    .fill(0)
                    .map((_, index) => (
                        <TextInput
                            key={index}
                            style={styles.otpInput}
                            value={otp[index] || ''}
                            onChangeText={(text) => handleOtpChange(otp.substring(0, index) + text + otp.substring(index + 1))}
                            keyboardType="numeric"
                            maxLength={1}
                        />
                    ))}
            </View>
            <Text style={styles.link} onPress={otpbutton}>
                Didn't receive code? Resend
            </Text>
            <TouchableOpacity
                style={styles.customButton}
                onPress={otpbutton}
            >
                <Text style={styles.buttonText}>Next</Text>
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
    link: {
        marginTop: 30,
        color: 'blue',
        textDecorationLine: 'underline',
    },
    customButton: {
        marginTop: 20,
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
    otpContainer: {
        flexDirection: 'row',
    },
    otpInput: {
        width: 50,
        height: 50,
        borderBottomWidth: 1,
        textAlign: 'center',
        fontSize: 24,
        margin: 10,
    },
});



export default OtpVerification;