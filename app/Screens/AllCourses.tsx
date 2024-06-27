import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../axiosConfig';

interface Course {
  id: number;
  rating: number,
  comment: string,
  price: number,
  currentPrice: number
  searchTags: string[],
  createdOn: Date,
  modefiedOn: Date,
  mentorId: number
  // Add more fields as per your course data structure
}


const courses = [
  {
    id: 1,
    title: 'Mathematics Class 8th',
    instructor: 'Rahul Singh',
    rating: 4.5,
    reviews: 2569,
    price: 2499,
    originalPrice: 5999,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Science Class 8th',
    instructor: 'Anjali Sharma',
    rating: 4.7,
    reviews: 1980,
    price: 2599,
    originalPrice: 6099,
    image: '../../assets/images/course/course2/jpeg',
  },
  // Add more courses as needed
];




const CourseCard = ({ course }) => (
  <View style={styles.courseCard}>
    <Image source={require('../../assets/images/courses/course3.jpeg')} style={styles.courseImage} />
    <View style={styles.courseInfo}>
      <Text style={styles.courseTitle}>{course.name}</Text>
      <Text style={styles.courseInstructor}>by {course.mentor.name}</Text>
      <View style={styles.courseRating}>
        <Ionicons name="star" size={16} color="#FFD700" />
        <Text style={styles.courseRatingText}>{course.rating} 
          (
            {/* {course.reviews} */}
            {/* no reviews parameter */}
            40)</Text>
      </View>
      <View style={styles.coursePrice}>
        <Text style={styles.courseCurrentPrice}>₹{course.price}</Text>
        <Text style={styles.courseOriginalPrice}>₹{course.originalPrice}</Text>
      </View>
      <TouchableOpacity style={styles.enrollButton}>
        <Text style={styles.enrollButtonText}>Enroll Now</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default function AllCourses() {
  const [allcourses, setAllCourses] = useState([]);
  const Get_Courses = async () => {
    try {
      const response = await axios.post('/get_course');
      if (response.data.success){
        setAllCourses(response.data.coursedata);
      }
      else {

      }
      console.log(response.data.coursedata);
    } catch (error) {
        console.error('Error retrieving userdata:', error);
        // Handle error, show error message to user, etc.
    }
};
  useEffect(()=> {
    Get_Courses();
  }, []);
    
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>All Courses</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {allcourses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 15,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  courseCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  courseImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  courseInstructor: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  courseRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  courseRatingText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#777',
  },
  coursePrice: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  courseCurrentPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginRight: 10,
  },
  courseOriginalPrice: {
    fontSize: 14,
    color: '#777',
    textDecorationLine: 'line-through',
  },
  enrollButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  enrollButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
