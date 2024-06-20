
// screens/Assignment.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TextInputAffix from 'react-native-paper/lib/typescript/components/TextInput/Adornment/TextInputAffix';

const Tab = createMaterialTopTabNavigator();

const Upcoming = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{ display: "flex", gap: 20, flexDirection: "column" }}>
                <View style={{ display: "flex", flexDirection: "row", backgroundColor: "#ebebeb", borderRadius: 18, alignItems: "center", padding: 16 }}>

                    <Image source={require('../../assets/images/christopher-gower-m_HRfLhgABo-unsplash.jpg')}
                        resizeMode='stretch'
                        style={{ width: 70, height: 70, borderRadius: 15, padding: 10 }}
                    />
                    <View style={{ display: "flex", flexDirection: "column" }}>
                        <Text style={styles.classtitle}> Why use HTML?</Text>
                        <Text style={styles.date}> 08/06/2024</Text>
                        <Text style={styles.name}> By Rahul Jain</Text>
                    </View>
                    <View style={{ display: "flex", justifyContent: "center", backgroundColor: "white", borderRadius: 10, width: 75, alignItems: "center", position: "absolute", right: 15, bottom: 15 }}>
                        <Text>8:00PM</Text>
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", backgroundColor: "#ebebeb", borderRadius: 18, alignItems: "center", padding: 16 }}>

                    <Image source={require('../../assets/images/christopher-gower-m_HRfLhgABo-unsplash.jpg')}
                        resizeMode='stretch'
                        style={{ width: 70, height: 70, borderRadius: 15, padding: 10 }}
                    />
                    <View style={{ display: "flex", flexDirection: "column" }}>
                        <Text style={styles.classtitle}> Use of Circle</Text>
                        <Text style={styles.date}> 08/06/2024</Text>
                        <Text style={styles.name}> By Rahul Jain</Text>
                    </View>
                    <View style={{ display: "flex", justifyContent: "center", backgroundColor: "white", borderRadius: 10, width: 75, alignItems: "center", position: "absolute", right: 15, bottom: 15 }}>
                        <Text>5:00PM</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const Completed = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={{ fontSize: 18, color: "grey", position: "absolute", top: 12, left: 20, zIndex: 1 }}>
                Title
            </Text>
            <TextInput style={styles.titleInput}>
            </TextInput>
            <Text style={{ fontSize: 18, color: "grey", position: "absolute", top: 82, left: 20, zIndex: 1 }}>
                Subject
            </Text>
            <TextInput style={styles.subjectInput}>
            </TextInput>
            <Text style={{ fontSize: 18, color: "grey", position: "absolute", top: 162, left: 20, zIndex: 1 }}>
                Describe your issue in brief
            </Text>
            <TextInput style={styles.descriptionInput}>
            </TextInput>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "96%" }}>
                <Text style={{ fontSize: 16, color: "blue", paddingBottom: 10 }}>
                    Attach Files or Photos
                </Text>

            </View>

            <View style={styles.fileList}>
                <View style={styles.fileItem}>
                    <Text style={styles.fileName}>doc1356754.jpg</Text>
                    <TouchableOpacity>
                        <Text style={styles.deleteButton}>🗑️</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitButtonText}>SUBMIT</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const Classes = () => {
    return (
        <View style={{ flex: 1 }}>
            {/* <View style={{ paddingBottom: 75 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: 'black', position: 'absolute', left: 20, top: 20 }}>
          Assignment
        </Text>
      </View> */}


            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "90%", justifyContent: "space-between", paddingTop: 10, paddingBottom: 75 }}>
                <Text style={{ fontSize: 28, fontWeight: "bold", color: 'black', position: 'absolute', left: 20, top: 20 }}>Doubts</Text>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 7, position: "absolute", top: 28, right: -18 }}>
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

            <Tab.Navigator>
                <Tab.Screen name="Upcoming" component={Upcoming} />
                <Tab.Screen name="Completed" component={Completed} />
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white"
    },
    classtitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 15
    },
    date: {
        fontSize: 16,
        color: "blue",
        paddingLeft: 15
    },
    name: {
        fontSize: 16,
        color: "blue",
        paddingLeft: 15
    },
    status: {
        fontSize: 16,
        color: "yellowgreen",
        paddingBottom: 20
    },
    introduction: {
        fontSize: 20,
        color: "#335ff6",
        paddingBottom: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 25,
        marginRight: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    submissionDate: {
        fontSize: 14,
        color: '#888',
    },
    titleInput: {
        height: 50,
        borderColor: '#dadeeb',
        borderWidth: 1,
        display: "flex",
        borderRadius: 15,
        padding: 10,
        marginBottom: 20,
        backgroundColor: "#f2eeed"
    },
    subjectInput: {
        height: 50,
        borderColor: '#dadeeb',
        borderWidth: 1,
        display: "flex",
        borderRadius: 15,
        padding: 10,
        marginBottom: 20,
        backgroundColor: "#f2eeed"
    },
    descriptionInput: {
        height: 240,
        borderColor: '#dadeeb',
        borderWidth: 1,
        display: "flex",
        borderRadius: 20,
        padding: 10,
        marginBottom: 40,
        backgroundColor: "#f2eeed"
    },
    uploadButton: {
        zIndex: 1,
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 20,
        width: 120,
    },
    uploadButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold"
    },
    fileList: {
        marginBottom: 20,
    },
    fileItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f2eeed',
        borderRadius: 10,
        marginBottom: 30,
    },
    fileName: {
        fontSize: 16,
    },
    deleteButton: {
        color: '#888',
    },
    submitButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold"
    },
    downloadbutton: {
        backgroundColor: "#3352f8",
        borderRadius: 25,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 55,
    },
    downloadtext: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
});

export default Classes;
