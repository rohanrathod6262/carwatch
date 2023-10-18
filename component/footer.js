import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Linking, TouchableOpacity } from 'react-native';

const Footer = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer}>
                <Image source={require("../assets/home.png")} style={styles.icon} />
                <Text style={styles.title}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <Image source={require("../assets/chat.png")} style={styles.icon} />
                <Text style={styles.title}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <Image source={require("../assets/settings.png")} style={styles.icon} />
                <Text style={styles.title}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 80,
        backgroundColor: '#fff',
      
       
      },
      iconContainer: {
        flex: 1,
        alignItems: 'center',
      },
      icon: {
        width: 20,
        height: 20,
      },
      title: {
        fontSize: 12,
        color: '#7879F1',
        marginTop: 5, 
      },
});



export default Footer;