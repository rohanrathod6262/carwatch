import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Linking, TouchableOpacity } from 'react-native';
import Footer from './footer';
import { FAB, Card, Title, Button, Paragraph } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My vehicles</Text>
            <View style={styles.carcontainer}>
                <Card style={styles.card}>
                    <Card.Content>
                        <View style={styles.titleContainer}>
                            <Title style={styles.titleText}>Add your first vehicle</Title>
                        </View>
                        <Paragraph>
                            Two/Four Wheeler.
                        </Paragraph>
                    </Card.Content>
                    <Card.Actions>
                        <Button onPress={() => console.log('Button pressed')}>Get Started</Button>
                    </Card.Actions>
                </Card>
            </View>
            <Image
                source={require("../assets/house.png")}
                style={styles.image}
            />
            <FAB
                style={styles.fab}
                icon="plus"
                color="white"
                onPress={() => {
                    navigation.navigate("AddNewCar");
                }}
            />
            <Footer/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'

    },
    title: {
        marginLeft: 30,
        marginTop: 40,
        fontSize: 20,
    },
    carcontainer: {
        height: '80%',
        width: 300,
    },
    image: {
        width: 400,
        height: 300,
        position: 'absolute',
        top: '60%',
    },
    fab: {
        position: 'absolute',
        top: '80%',
        right: 16,
        borderRadius: 30,
        backgroundColor: '#613EEA',

    },
    card: {
        margin: 16,
        width: '100%',
        height: 200,
        elevation: 5,
        backgroundColor: 'white',
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#CCCCCC',
        paddingBottom: 8,
    },
});



export default Home;