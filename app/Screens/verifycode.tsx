import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TextInput, Pressable, StyleSheet, Dimensions, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import { router, useRouter } from 'expo-router';
import axios from '../axiosConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';



const { width } = Dimensions.get('window');


const VerifyCode = () => {
    const [phone, setPhone] = useState('');
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [input4, setInput4] = useState('');
    const [userdata, setUserdata] = useState([]);

    const handleSendCode = async () => {
        const phone = await AsyncStorage.getItem('mobileNumber');
        const combinedString = `${input1}` + `${input2}` + `${input3}` + `${input4}`;
        const formData = {
            phone: phone,
            otp: combinedString,
        }
        // console.log('Sending to backend:', formData);


        // const saveUserDate = async () => {
        //     try {
        //         await AsyncStorage.setItem('userdata', response.data.userdata);
        //         setUserdata(response.data.userdata);
        //     } catch (error) {
        //         console.error('Error saving phone number:', error);
        //     }
        // };
        try {
            const response = await axios.post('/verify_otp_login_user', formData);
            if (response.data.success) {
                alert('You verified successfully!');
                // Optionally, navigate to a new screen or show a success message
                router.navigate('../(tabs)/');
                setUserdata(response.data.userdata);
                try {
                    await AsyncStorage.setItem('userdata', JSON.stringify(response.data.userdata));
                    console.log(userdata);

                } catch (error) {
                    console.error('Error saving userdata to As:', error);
                }
            }
        } catch (error) {
            console.error('Error verifying user:', error);
            // Handle error, show error message to user, etc.
        }
    };



    return (
        <View style={styles.container}>


            <View style={styles.container_main}>
                <Text style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: 18, fontWeight: 'bold', paddingBottom: 10 }}>
                    OTP has been sent your Phone
                </Text>
                <View style={styles.Edit_input}>

                    <TextInput
                        style={styles.input}
                        placeholder="7"
                        maxLength={1}
                        value={input1}
                        onChangeText={setInput1}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="4"
                        maxLength={1}
                        value={input2}
                        onChangeText={setInput2}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="5"
                        maxLength={1}
                        value={input3}
                        onChangeText={setInput3}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="8"
                        maxLength={1}
                        value={input4}
                        onChangeText={setInput4}
                    />

                </View>
                <Text style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: 16 }}>
                    Resend code in <Text style={{ color: "blue" }}>53</Text> s
                </Text>
                <Pressable style={styles.verifybutton} onPress={handleSendCode} >
                    <Text style={styles.verifybuttonText}>Verify</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        backgroundColor: '#fff',
        marginTop: 10
    },
    container_main: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        height: "100%",
        // paddingTop:10,
        gap: 0,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 20
    },
    Edit_input: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
        paddingBottom: 18
    },
    input: {
        width: width * 0.15,
        height: 50,
        borderColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#eaf3ee',
    },

    verifybutton: {
        width: width * 0.8,
        height: 50,
        backgroundColor: '#335ef7',
        borderRadius: 25, // Medium level border radius
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        position: "absolute",
        bottom: 20
    },
    verifybuttonText: {
        color: '#fff',
        fontSize: 18,
    },
    verifyText: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
    },
    concatenatedText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },


});

export default VerifyCode;