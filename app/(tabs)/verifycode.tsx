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

const Verifcode = () => {
    const [isStudent, setIsStudent] = useState(true);
    const [mobileNumber, setMobileNumber] = useState('');
    const [selectedBoard, setSelectedBoard] = useState('');
    return (
        <View style={styles.container}>


            <View style={styles.container_main}>
                <Text style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: 18, fontWeight: 'bold', paddingBottom: 10 }}>
                    OTP has been sent to +91 9711706966
                </Text>
                <View style={styles.Edit_input}>

                    <TextInput
                        style={styles.input}
                        placeholder="7"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="4"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="5"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="8"
                    />

                </View>
                <Text style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: 16 }}>
                    Resend code in <Text style={{ color: "blue" }}>53</Text> s
                </Text>
                <Pressable style={styles.verifybutton}>
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


  

});

export default Verifcode;