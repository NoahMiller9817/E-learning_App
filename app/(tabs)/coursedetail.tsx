import React from 'react';
import { View, Text, Image, StyleSheet, Button, Pressable } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

const CourseDetailsScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/courses/course1.jpeg')}
                resizeMode='stretch' style={{ width: "100%", height: 250 }} />
            <Text style={styles.courseTitle}>Mathematics Chapter 3 (Class 8th)</Text>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20 }}>
                <Text style={styles.courseCategory}>maths</Text>
                <Ionicons name="star-half" size={21} color="yellowgreen" />
                <Text style={styles.courseRating}>4.8 (4,479 reviews)</Text>
            </View>

            <Text style={styles.coursePrice}>₹ 2,499</Text>
            <View style={styles.courseDetails}>
                <View style={styles.courseDetailItem}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Ionicons name="people" size={22} color="#4f75fc" />
                            <Text style={styles.courseDetailItem}>
                                9,389 Students</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Ionicons name="time" size={22} color="#4f75fc" />
                            <Text style={styles.courseDetailItem}>
                                Hours</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row" }}>
                            <Ionicons name="reader" size={22} color="#4f75fc" />
                            <Text style={styles.courseDetailItem}>
                                Certificate</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.aboutSection}>
                <Text style={styles.sectionHeader1}>About</Text>
                <Text style={styles.sectionHeader}>Lessons</Text>
                <Text style={styles.sectionHeader}>Reviews</Text>
            </View>
            <View style={styles.mentorSection}>
                <Text style={styles.mentorTitle}>Mentor</Text>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "60%" }}>
                    <Image
                        style={styles.mentorImage}
                        source={require('../../assets/images/users/user2.jpeg')}
                    />
                    <View>
                        <Text style={styles.mentorName}>Rahul Nath</Text>
                        <Text style={styles.mentorQualification}>B.ED in Mathematics</Text>
                    </View>
                </View>
                <Text style={styles.aboutCourse}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </View>
            <Pressable style={styles.Enrollbutton}>
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>ENROLL COURSE</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fff', gap: 10 },
    // courseImage: { width: '110%', height: 200, marginBottom: 20 },
    courseTitle: { fontSize: 22, fontWeight: 'bold' },
    courseCategory: { fontSize: 16, color: 'gray' },
    courseRating: { fontSize: 16, marginVertical: 10 },
    coursePrice: { fontSize: 20, fontWeight: 'bold', color: '#1E90FF' },
    courseDetails: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center' },
    courseDetailItem: { fontSize: 15, color: 'black' },
    aboutSection: { flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 },
    sectionHeader: { fontSize: 16, fontWeight: 'bold' },
    sectionHeader1: { fontSize: 16, fontWeight: 'bold', color: "#4f75fc" },
    mentorSection: { marginVertical: 20 },
    mentorTitle: { fontSize: 18, fontWeight: 'bold' },
    mentorName: { fontSize: 16 },
    mentorImage: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    mentorQualification: { fontSize: 14, color: 'gray' },
    aboutCourse: { fontSize: 14, color: 'gray', marginTop: 10 },
    Enrollbutton: {
        height: 50,
        backgroundColor: '#1E90FF',
        borderRadius: 25, // Medium level border radius
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default CourseDetailsScreen;