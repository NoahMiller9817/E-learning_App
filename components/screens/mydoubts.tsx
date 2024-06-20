import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const doubtsData = [
  {
    id: '1',
    title: 'what is qantum?',
    createdOn: '12/06/2024',
    attachments: 3,
    assignedTo: 'Mr Dilip, B.TECH',
    status: 'Open',
  },
  {
    id: '2',
    title: 'Stuck with Trigonometry',
    createdOn: '12/06/2024',
    attachments: 2,
    assignedTo: 'Mr Rahul, B.ED',
    status: 'Closed',
  },
];

const MyDoubtsScreen = () => {
  const renderItem = ({ item }: { item: typeof doubtsData[0] }) => (
    <View style={styles.doubtContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>Created On: {item.createdOn}</Text>
      <Text>Attachments: {item.attachments}</Text>
      <Text>Assigned to: {item.assignedTo}</Text>
      <Text>Status: <Text style={{ color: item.status === 'Open' ? 'green' : 'red' }}>{item.status}</Text></Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={doubtsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  doubtContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyDoubtsScreen;
