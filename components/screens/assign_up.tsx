import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

const UploadScreen = () => {
  const [description, setDescription] = useState('');

  const handleUpload = () => {
    // Handle the upload action
    console.log('Upload clicked');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textArea}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
        <Text style={styles.uploadButtonText}>upload</Text>
      </TouchableOpacity>
      <View style={styles.fileContainer}>
        <Text>1. Assignment.pdf</Text>
        <Button title="Delete" onPress={() => {}} />
      </View>
      <Button title="SUBMIT" onPress={() => {}} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  textArea: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 4,
    backgroundColor: '#f0f4f7',
  },
  uploadButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 12,
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 16,
  },
  fileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#f0f4f7',
  },
});

export default UploadScreen;
