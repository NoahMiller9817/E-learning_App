
// screens/Assignment.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const DownloadAssignment = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.introduction}>Introduction</Text>
      <Text style={{ fontSize: 17, color: "grey" }}>
        Kindly make sure that you have read all the
        question carefully.Download the assignment
        and upload the it will the ansers.
      </Text>
      <View style={{ paddingTop: 290 }}>
        <TouchableOpacity style={styles.downloadbutton}>
          <Text style={styles.downloadtext}>Download</Text>
        </TouchableOpacity>
      </View>


    </ScrollView>
  );
};

const UploadAssignment = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 18, color: "grey", position: "absolute", top: 20, left: 20, zIndex: 1 }}>
        Description
      </Text>
      <TextInput style={styles.descriptionInput}>

      </TextInput>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "96%" }}>
        <Text style={{ fontSize: 16, color: "gray" }}>
          Attach Files
        </Text>
        <TouchableOpacity style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>upload</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.fileList}>
        <View style={styles.fileItem}>
          <Text style={styles.fileName}>1. Assignment.pdf</Text>
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

const Assignment = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{ paddingBottom: 75 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: 'black', position: 'absolute', left: 20, top: 20 }}>
          Assignment
        </Text>
      </View> */}


      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "90%", justifyContent: "space-between", paddingTop: 10, paddingBottom: 75 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: 'black', position: 'absolute', left: 20, top: 20 }}>Assignment</Text>
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
      <View style={styles.header}>
        <Image style={styles.image} source={require('../../assets/images/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg')} />
        <View>
          <Text style={styles.title}>Computer Science HTML</Text>
          <Text style={styles.submissionDate}>Submission Date: </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>12/06/2024</Text>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Download" component={DownloadAssignment} />
        <Tab.Screen name="upload" component={UploadAssignment} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  descriptionInput: {
    height: 200,
    borderColor: '#dadeeb',
    borderWidth: 1,
    display: "flex",
    borderRadius: 30,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#eff3ff"
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
    backgroundColor: '#eff3ff',
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

export default Assignment;
