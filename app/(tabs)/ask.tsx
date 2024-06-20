import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AskQuestion: React.FC = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "90%", justifyContent: "space-between", paddingTop: 10 }}>
                <Text style={styles.title}>Ask Question</Text>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 7, position: "absolute", top: 16, right: -18 }}>
                    <Image
                        resizeMode='stretch'
                        style={{ width: 20, height: 20 }}
                        source={require('../../assets/icons/search.png')}
                    />
                    <Image
                        resizeMode='stretch'
                        style={{ width: 32, height: 32 }}
                        source={require('../../assets/icons/more-information.png')}
                    />
                </View>
            </View>

            <View style={styles.uploadContainer}>
                <View style={styles.uploadBox}>
                    <Image
                        source={require('../../assets/icons/file-upload-outline.png')} // Replace with your upload icon path
                        style={styles.uploadIcon}
                    />
                    {/* <Ionicons name="camera-outline" size={20} color="black" style={styles.uploadIcon} /> */}

                    <Text style={styles.uploadText}>Upload File Here</Text>
                    <Text style={styles.orText}>--OR--</Text>
                    <TouchableOpacity style={styles.takePictureButton}>
                        {/* <Image
                            source={require('../../assets/images/icons/')} // Replace with your camera icon path
                            style={styles.cameraIcon}
                        /> */}
                        <Ionicons name="camera-outline" size={20} color="white" style={styles.cameraIcon} />

                        <Text style={styles.takePictureText}>Take Picture</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity style={styles.dropdown}>
                <Text style={styles.dropdownText}>Select Class</Text>
                <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dropdown}>
                <Text style={styles.dropdownText}>Select Subject</Text>
                <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dropdown}>
                <Text style={styles.dropdownText}>Select Issue</Text>
                <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.dropdown}>
                <Text style={styles.dropdownText}>Select Topic</Text>
                <Text style={styles.dropdownIcon}>▼</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.askButton}>
                <Text style={styles.askButtonText}>ASK QUESTION</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    uploadContainer: {
        marginBottom: 16,
    },
    uploadBox: {
        height:300,
        borderWidth: 1,
        borderStyle: 'dotted',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        justifyContent:"center"
    },
    uploadIcon: {
        width: 40,
        height: 40,
        marginBottom: 8,
    },
    uploadText: {
        fontSize: 16,
        marginBottom: 8,
    },
    orText: {
        fontSize: 16,
        marginBottom: 8,
    },
    takePictureButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 8,
        borderRadius: 8,
    },
    cameraIcon: {
        width: 20,
        height: 20,
        tintColor: '#fff',
        marginRight: 8,
    },
    takePictureText: {
        fontSize: 16,
        color: '#fff',
    },
    dropdown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
    },
    dropdownText: {
        fontSize: 16,
    },
    dropdownIcon: {
        fontSize: 16,
    },
    askButton: {
        backgroundColor: '#007bff',
        padding: 16,
        alignItems: 'center',
        borderRadius: 8,
    },
    askButtonText: {
        fontSize: 16,
        color: '#fff',
    },
});

export default AskQuestion;
