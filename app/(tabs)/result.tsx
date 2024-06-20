import React from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

const mockData = [
  {
    id: '1',
    testName: 'Mock Test 1',
    date: '03/06/2024',
    score: 80,
  },
  {
    id: '2',
    testName: 'Mock Test 2',
    date: '03/06/2024',
    score: 60,
  },
  {
    id: '3',
    testName: 'Mock Test 1',
    date: '03/06/2024',
    score: 80,
  },
];

const PieChart = ({ percentage }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <Svg width="120" height="180" viewBox="0 0 120 120">
      <Circle
        cx="60"
        cy="60"
        r={radius}
        stroke="#d3d3d3"
        strokeWidth="20"
        fill="none"
      />
      <Circle
        cx="60"
        cy="60"
        r={radius}
        stroke="yellow"
        strokeWidth="20"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        fill="none"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image style={styles.image} source={require('../../assets/images/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg')} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.testName}</Text>
        <Text style={styles.cardDate}>conducted on : {item.date}</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>{item.score}%</Text>
          <View style={[styles.progressBar, { width: `${item.score}%` }]} />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "90%", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
          Results
        </Text>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 7 }}>
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
      <View style={styles.overallPerformance}>

        <PieChart percentage={80} />
        <Text style={styles.performanceText}>Overall Performance</Text>
        <Text style={styles.performancePercentage}>80%</Text>
      </View>
      <FlatList
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  overallPerformance: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#007bff',
    borderRadius: 20,
    height: 240
  },
  performanceText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    position: "absolute",
    bottom: 30,
    color: "white"
  },
  performancePercentage: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    position: "absolute",
    top: 70
  },
  card: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardDate: {
    fontSize: 14,
    color: 'black',
    marginVertical: 4,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: '#ffcc00',
    borderRadius: 5,
  },
});

export default App;