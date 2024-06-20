import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const DownloadScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.introduction}>Introduction</Text>
      <Text style={styles.description}>
        Kindly make sure that you have read all the questions carefully. Download the assignment and upload it with the answers.
      </Text>
      <Button title="Download" onPress={() => {}} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  introduction: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
  },
});

export default DownloadScreen;
