import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DownloadScreen from './assign_down';
import UploadScreen from './assign_up';
import { View, Text, Image, StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

const AssignmentScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.image} />
        <View style={styles.headerText}>
          <Text style={styles.title}>Computer Science HTML</Text>
          <Text>Submission Date: 12/06/2024</Text>
        </View>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarIndicatorStyle: { backgroundColor: 'blue' },
        }}
      >
        <Tab.Screen name="Download" component={DownloadScreen} />
        <Tab.Screen name="Upload" component={UploadScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  headerText: {
    marginLeft: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AssignmentScreen;
