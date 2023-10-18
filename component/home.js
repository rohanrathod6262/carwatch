import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Linking, TouchableOpacity } from 'react-native';
import Footer from './footer';
import { FAB, Card, Title, Button, Paragraph } from 'react-native-paper';

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
                style={styles.house}
            />
            <FAB
                style={styles.fab}
                icon="plus"
                color="white"
                onPress={() => {

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
        height: 600,
        width: 300,
    },
    house: {
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
        width: 360,
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