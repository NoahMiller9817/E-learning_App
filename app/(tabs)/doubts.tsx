
// screens/Assignment.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const MyDoubts = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={{ gap: 20 }}>
                <View style={{ display: "flex", flexDirection: "column", backgroundColor: "#f2eeed", borderRadius: 18 }}>
                    <Text style={{ fontSize: 27, fontWeight: "bold", color: "grey", paddingTop: 15, paddingBottom: 15, paddingLeft: 15 }}>what is quantum?</Text>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.detailtext}>Created On : </Text>
                        <Text style={styles.number}>  12/06/2024 </Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.detailtext}>Attachments : </Text>
                        <Text style={styles.number}>  3</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.detailtext}>Assigned to : </Text>
                        <Text style={styles.name}>  Mr Dilip, B.TECH</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.detailtext}>Status : </Text>
                        <Text style={styles.status}>  Open </Text>
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "column", backgroundColor: "#f2eeed", borderRadius: 18 }}>
                    <Text style={{ fontSize: 27, fontWeight: "bold", color: "grey", paddingTop: 15, paddingBottom: 15, paddingLeft: 15 }}>Stuck with Trignometry</Text>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.detailtext}>Created On : </Text>
                        <Text style={styles.number}>  12/06/2024 </Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.detailtext}>Attachments : </Text>
                        <Text style={styles.number}>  2</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.detailtext}>Assigned to : </Text>
                        <Text style={styles.name}>  Mr Rahul, B.ED</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={styles.detailtext}>Status : </Text>
                        <Text style={styles.status}>  Closed </Text>
                    </View>
                </View>


            </View>

        </ScrollView>
    );
};

const RaiseDoubt = () => {
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

const Doubts = () => {
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
                <Tab.Screen name="My Doubts" component={MyDoubts} />
                <Tab.Screen name="Raise Doubt" component={RaiseDoubt} />
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
    detailtext: {
        fontSize: 17,
        color: "grey",
        paddingLeft: 15
    },
    number: {
        fontSize: 16,
        color: "blue"
    },
    name: {
        fontSize: 16,
        color: "blue"
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

export default Doubts;
