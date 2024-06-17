import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TextInput, Pressable, StyleSheet, Dimensions, Image } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const { width } = Dimensions.get('window');

export default function TabTwoScreen() {
    const [isStudent, setIsStudent] = useState(true);
    const [mobileNumber, setMobileNumber] = useState('');
    const [selectedBoard, setSelectedBoard] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Edit Profile
            </Text>

            <View style={styles.container_main}>
                <View style={styles.Edit_input}>

                    <TextInput
                        style={styles.input}
                        placeholder="Prasant"
                        // keyboardType="phone-pad"
                        value={mobileNumber}
                        onChangeText={setMobileNumber}
                    />
                </View>

                <View style={styles.Edit_input}>

                    <TextInput
                        style={styles.input}
                        placeholder="Singh"
                    />
                </View>
                <View style={styles.Edit_input}>

                    <TextInput
                        // keyboardType='date',
                        style={styles.input}
                        placeholder="12/27/1995"
                    />
                    <Image source={require('../../assets/icons/calendar.png')}
                        resizeMode='stretch'
                        style={{ width: 22, height: 22, position: "absolute", left: 290, top: 18 }} />
                </View>
                <View style={styles.Edit_input}>

                    <TextInput
                        style={styles.input}
                        placeholder="+91    Mobile Number"
                        keyboardType="phone-pad"
                        value={mobileNumber}
                        onChangeText={setMobileNumber}
                    />
                </View>

                <View style={styles.Edit_input}>

                    <TextInput
                        style={styles.input}
                        placeholder="pranksngh@gmail.com"
                    />
                    <Image source={require('../../assets/icons/down-square2.png')}
                        resizeMode='stretch'
                        style={{ width: 20, height: 20, position: "absolute", left: 290, top:20 }} />
                </View>
                <View style={styles.student_Edit_input}>
                    <TextInput
                        style={styles.input}
                        placeholder="student"
                    />
                </View>
                <View style={{ display: 'flex', width: width * 0.8, flexDirection: 'column', gap: 27 }}>
                    <Picker
                        selectedValue={selectedBoard}
                        onValueChange={(itemValue, itemIndex) => setSelectedBoard(itemValue)}
                        style={styles.regsiter_select && styles.pick}
                    >
                        <Picker.Item label="India" value="India" />
                        <Picker.Item label="United States" value="United States" />
                        <Picker.Item label="Russian" value="Russian" />
                    </Picker>
                    <Picker
                        selectedValue={selectedBoard}
                        onValueChange={(itemValue, itemIndex) => setSelectedBoard(itemValue)}
                        style={styles.regsiter_select}
                    >
                        <Picker.Item label="Male" value="Male" />
                        <Picker.Item label="Female" value="Female" />
                    </Picker>
                </View>

                <Pressable style={styles.signupbutton}>
                    <Text style={styles.signupbuttonText}>Update</Text>
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
    container_close_button: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 20
    },
    container_header: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        justifyContent: 'center',
        alignContent: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    selectionContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        width: "100%"
    },
    selectionButton: {
        flex: 1,
        display: 'flex',
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        borderWidth: 1,
        borderBottomColor: 'black',
        borderColor: '#eaf3ee',
        backgroundColor: '#eaf3ee',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        paddingLeft: 10,
    },
    selectedCheck: {
        width: 120,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 20,
    },
    selectedButton: {
        backgroundColor: '#333450',
    },
    selectionText: {
        height: 20,
        fontSize: 16,
        color: '#000',
    },
    selectedText: {
        color: '#fff',
        borderColor: '#000',
    },
    bold: {
        fontWeight: 900,
        color: '#fff'
    },
    leftbold: {
        fontWeight: 900,
        color: '#000'
    },
    checkmarkIcon: {
        display: 'flex',
        marginLeft: 5,
        // borderWidth:1,
        // borderColor:'black',
        // borderRadius:10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 5,
        zIndex: 10
    },
    checkmarkIconTrue: {
        display: 'flex',
        marginLeft: 5,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 5,
        zIndex: 10
    },
    container_main: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        // paddingTop:10,
        gap: 0,
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
    student_Edit_input: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%'
    },

    label: {
        fontSize: 15,
        paddingLeft: 8
    },
    input: {
        width: width * 0.8,
        height: 50,
        borderColor: '#eaf3ee',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#eaf3ee',
    },
    regsiter_select: {
        backgroundColor: "#eaf3ee",
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        overflow: 'hidden',
        paddingBottom: 10,
        justifyContent: "space-between",
        alignContent: "center"
    },
    pick: {
        marginTop: 23,
        backgroundColor: "#eaf3ee",
    },
    signupbutton: {
        width: width * 0.8,
        height: 50,
        backgroundColor: '#335e f7',
        borderRadius: 25, // Medium level border radius
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    signupbuttonText: {
        color: '#fff',
        fontSize: 18,
    },
    signupText: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
    },
    signupLink: {
        color: '#333',
        fontWeight: "900"
    },
    socialContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '65%',
        paddingTop: 5,
        marginBottom: 30
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    socialButtonText: {
        fontSize: 24,
        color: '#333',
    },
    login_signup: {
        width: '80%',
        height: 'auto',
        fontSize: 20,
        marginBottom: 30
    },
    container_main_text: {
        fontSize: 12,
        marginBottom: -20
    }
});
