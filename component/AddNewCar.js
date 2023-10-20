import { StyleSheet, TextInput, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from "react";
import Footer from './footer'
import { useNavigation } from '@react-navigation/native';


const AddNewCar = () => {

    const navigation = useNavigation();

//    useEffect(() => {
//         navigation.setOptions({
           
//             headerRight: () => (
//                 <Image
//                     source={require("../assets/human.png")}
//                     style={{
//                         width: 40,
//                         height: 40,
//                         marginRight: 15,
//                     }}
//                 />
//             ),
//         });
//     }, [navigation]); 

    

  return (
<>
    <View style={styles.container}>

   
 <Text style={styles.heading}>Add New Vehicle</Text>

           
        <View style={styles.alignment}>
        <Text style={styles.text}>Brand</Text>

         <TextInput
            style={styles.input}
            placeholder="Enter Vehicle Brand"
        />

        <Text style={styles.text}>Model Name</Text>

        <TextInput
           style={styles.input}
             placeholder="Enter Vehicle Model"
        />

        <Text style={styles.text}>Number</Text>

         <TextInput
            style={styles.input}
            placeholder="Enter Vehicle Number"
        />
        </View>

        <Text style={styles.text}>Vehicle Type</Text>

         <TextInput
            style={styles.input}
            placeholder="Enter Vehicle Type"
        />

<TouchableOpacity
                style={styles.customButton}
                // onPress={login}
            >
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>    
  </View>
<Footer/>
  </>
  )
}

export default AddNewCar

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin:'6%',
        
    },
    heading:{
        textAlign:'center',
        fontSize:18,
        marginTop:50,
        marginBottom:5,

    },

    alignment:{
      marginTop:30,
    },
    text:{
        paddingHorizontal: 3,

    },
    input:{
        width: '100%',
        height: 50,
        
        borderBottomWidth: 1,
        paddingHorizontal: 3,
        marginBottom: 40,
    },
    customButton: {
        width: '100%',
        
        height: 50,
        borderRadius: 6,
        backgroundColor: "#613EEA",
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
})