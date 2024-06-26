import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRouter } from 'expo-router';
import { FlatList } from 'react-native-gesture-handler';
import axios from '../../axiosConfig'
import { RootStackParamList } from '@/app/types';

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

interface Mentor {
    id: number,
    name: string,
    address: string,
    languages: string,
    searchTags: string,
    studentcount: number,
    doubtsSolved: number,
    averageRating: number,
    dateOfBirth: Date,
    createdOn: Date,
    modefiedOn: Date,
    phone: string
}

type Props = {
    navigation: StackNavigationProp<RootStackParamList, "HomeScreen">; // Adjust the type as per your navigator config
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {

    const router = useRouter();
    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    const [userData, setUserData] = useState([]);
    const [courseData, setCourseData] = useState<Course[]>([]);
    const [mentordata, setMentordata] = useState<Mentor[]>([]);

    const retrieveUserData = async () => {
        try {
            const data = await AsyncStorage.getItem('userdata');
            if (data !== null) {
                const parseuserData = JSON.parse(data);
                console.log(parseuserData);
                setUserData(parseuserData);
                console.log('User data retrieved successfully:', parseuserData);
                // Now userData is an object that you can use in your component state or elsewhere
            } else {
                console.log('No userdata found in database');
            }
        } catch (error) {
            console.error('Error loading userdata:', error);
            // Handle error, show error message to user, etc.
        }
    };

    const fetchCourseData = async () => {
        try {
            const response = await axios.post('/get_course');
            if (response.data.success) {
                const fetchedCourses: Course[] = response.data.coursedata; // Assuming response structure
                setCourseData(fetchedCourses);
                // console.log(fetchedCourses);
            } else {
                console.log('Failed to fetch course data');
                // Handle case where backend indicates failure
            }
        } catch (error) {
            console.error('Error fetching course data:', error);
            // Handle error, show error message to user, etc.
        }
    };

    const fetchMentorData = async () => {
        try {
            const response = await axios.post('/get_mentor');
            if (response.data.success) {
                //console.log(response);

                const fetchedMentors: Mentor[] = response.data.mentordata; // Assuming response structure
                setMentordata(fetchedMentors);
                //console.log(fetchedMentors);

            } else {
                console.log('Failed to fetch mentor data');
                // Handle case where backend indicates failure
            }
        } catch (error) {
            console.error('Error fetching mentor data:', error);
            // Handle error, show error message to user, etc.
        }
    };


    useEffect(() => {

        retrieveUserData();

        fetchCourseData();

        fetchMentorData();

    }, []); // Empty dependency array ensures this effect runs only once on component mount



    return (

        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', marginRight: 15, }}>
                    <Ionicons name="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} size={30} ></Ionicons>
                </View>
                {userData && (
                    <>
                        <Image source={require('../../../assets/images/users/user10.jpeg')} style={styles.profilePic} />
                        <View style={styles.welcomeContainer}>
                            <Text style={styles.welcomeText}>Welcome Back!</Text>
                            <Text style={styles.userName}>{userData.name}</Text>
                        </View>
                    </>
                )}
                <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())} style={{ width: 42, height: 42, backgroundColor: "#c5d2f6", borderRadius: 15, display: "flex", alignItems: "center", justifyContent: "center" }}>

                    <Ionicons name="notifications" size={24} color="#4f75fc" />
                </TouchableOpacity>
            </View>

            <ImageBackground style={styles.banner} source={require('../../../assets/images/banners/banner2.png')} borderRadius={31}>
                <View style={styles.bannerSearch}>
                    <TextInput style={styles.searchInput} placeholder="Search here..." />
                </View>
            </ImageBackground>

            <View style={styles.classesContainer}>
                <Text style={styles.sectionTitle}>Courses</Text>
                {/* <TouchableOpacity onPress={() => RouterOtherPages("AllCourses")}> */}
                <TouchableOpacity onPress={() => navigation.navigate( "AllCourse" )}>
                    <Text style={styles.seeAllText}>See all</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.classesScroll}>
                <FlatList
                    data={courseData}
                    horizontal showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate("courseDetails", { courseId: item.id.toString() })} style={styles.classBox}>
                            {/* <TouchableOpacity onPress={navigateToCourseDetails} style={styles.classBox}> */}

                            {/* <TouchableOpacity onPress=() = navigateToCourseDetails(item.id)} style={styles.classBox}> */}
                            <Image source={require('../../../assets/images/courses/course3.jpeg')} style={styles.classimage} />
                            <View style={styles.courseTitleContainer}>
                                <Text style={styles.courseTitleText}>
                                    {item.comment}
                                </Text>
                            </View>
                            <View style={styles.courseDetailsRow}>
                                <View style={styles.courseAuthor}>
                                    {/* <Text style={styles.courseAuthorText}>
                                        Rahul Singh
                                    </Text> */}
                                </View>
                                <View style={styles.feedbackRow}>
                                    <Ionicons name="star" size={15} color="orange" style={styles.courseFeedbackRating} />
                                    <Text style={styles.courseRatingValue}>{item.rating}</Text>
                                    <Text style={styles.courseEnrolledValue}>(2,569)</Text>
                                </View>

                            </View>
                            <View style={styles.courseBottom}>
                                <View style={styles.CoursePrice}>
                                    <Text style={styles.CoursePriceText}>{item.currentPrice}</Text>
                                    <Text style={styles.CourseMRP}>{item.price}</Text>
                                </View>
                                <View style={styles.CourseEnrollButton}>
                                    {/* <TouchableOpacity onPress={() => RouterOtherPages("courseDetails")} style={styles.classBox} /> */}
                                    <Pressable style={styles.enrollButton} onPress={() => router.navigate('/Screens/courseDetails')}>
                                        <Text style={styles.enrollText}>Enroll Now</Text>
                                    </Pressable>
                                </View>
                            </View>

                        </TouchableOpacity>
                    )}
                    contentContainerStyle={styles.flatListContainer}
                />
            </ScrollView>

            <View style={styles.tutorSection}>
                <Text style={styles.sectionTitle}>Our tutor</Text>
                <FlatList
                    data={mentordata}
                    // horizontal showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.tutorCard}>
                            <View style={styles.tutorImageContainer}>
                                <Image source={require('../../../assets/images/onboarding1.png')} style={styles.tutorImage} />
                            </View>
                            <View style={styles.tutorInfo}>

                                <Text style={styles.tutorCourseTitle}>{item.name}</Text>
                                <View style={styles.tutorDurationRow}>
                                    <View style={styles.subjectContainer}>
                                        <Text style={styles.tutorSubjectText}>{item.searchTags}</Text>
                                    </View>
                                    <View style={styles.durationContainer}>
                                        <Text style={styles.tutorDurationText}>{item.languages}</Text>
                                    </View>
                                </View>

                                <View style={styles.coursePriceRow}>
                                    <View style={styles.priceSection}>
                                        <Ionicons name="star" size={15} color="orange" />
                                        <Ionicons name="star" size={15} color="orange" />
                                        <Ionicons name="star" size={15} color="orange" />
                                        <Ionicons name="star" size={15} color="orange" />
                                        <Text>(4.5)</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {

        backgroundColor: '#f8f8f8',
        paddingTop: 30,
    },
    flatListContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    header: {
        paddingTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    welcomeContainer: {
        flex: 1,
        marginLeft: 10,
    },
    welcomeText: {
        fontSize: 16,
        color: '#888',
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    notificationIcon: {
        marginLeft: 'auto',
        paddingTop: 65,
    },
    banner: {
        position: 'relative',


        height: hp('18 %'),
        borderRadius: 31,
        margin: 16,
        padding: wp('5%'),
        alignItems: 'center',
        elevation: 2,

        shadowColor: '#eee',
        shadowRadius: 31,
        shadowOpacity: 0.2


    },

    bannerText: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 10,
    },
    searchInput: {
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 20,
        paddingVertical: 8,
        minHeight: 40,
        maxHeight: 60,
        elevation: 5,

        shadowColor: '#000',
        shadowRadius: 15,
        shadowOpacity: 0.3
    },
    classesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    seeAllText: {
        color: '#4B84F1',
    },
    classesScroll: {
        marginTop: 10,
        paddingHorizontal: 16,
        display: "flex",
        flexGrow: 1,
        justifyContent: "space-between"
    },
    classBox: {
        margin: wp('3%'),
        paddingBottom: wp('4.5%'),
        width: wp('65%'),
        height: wp('55%'),
        backgroundColor: '#fff',
        borderRadius: 12,
        // paddingLeft: 8,
        elevation: 8,
        flexDirection: "column",

        alignItems: "flex-start",
        textAlign: "left",

        shadowOffset: {
            width: 1,
            height: 1,
        },

        shadowColor: '#808080 ',
        shadowRadius: 5,
        shadowOpacity: 0.7

        // alignItems: 'center',
        // marginRight: 10,
    },
    classText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#345ae7",
        zIndex: 100,

        top: 8,
        left: 10
    },
    classtext: {
        fontSize: 14,
        fontWeight: 'bold',
        zIndex: 100,
        color: "#345ae7",

        top: 18,
        left: 23
    },
    classimage: {
        width: "100%",
        height: "60%",

        top: 0,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    tutorSection: {
        paddingHorizontal: 16,
        marginTop: 20,
    },
    tutorCard: {
        display: "flex",
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 25,

        height: wp('40%'),
        marginTop: 45,
        alignItems: 'center',
        marginBottom: 20,
        elevation: 8,
        shadowOffset: {
            width: 1,
            height: 1,
        },

        shadowColor: '#808080 ',
        shadowRadius: 25,
        shadowOpacity: 0.2

    },
    tutorImage: {
        width: wp('35%'),
        height: wp('50%'),
        paddingRight: 20,
        borderRadius: 10,
        position: 'absolute',
        bottom: -wp('20%')
    },
    tutorInfo: {

        flex: 1,
        flexDirection: 'column'

    },
    tutorSubject: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    tutorName: {
        fontSize: 16,
        color: "white"
    },
    tutorDetails: {
        color: 'white',
    },
    tutorClasses: {
        marginTop: 4,
        color: "#021f8d",
        fontSize: 22,
        fontWeight: "700"
    },
    bannerSearch: {
        position: 'absolute',
        bottom: -hp('15%') / 6,
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: wp('10%'),
        width: wp('80%')
    },
    courseTitleContainer: {
        marginTop: wp('2%'),
        marginLeft: wp('3%'),
        marginRight: wp('3%')
    },
    courseTitleText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    courseDetailsRow: {
        flexDirection: 'row',

    },
    courseAuthor: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: wp('3%'),
        marginTop: wp('1.5%'),
    },
    courseAuthorText: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#555555'
    },
    feedbackRow: {
        marginTop: wp('1.5%'),
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    courseFeedbackRating: {

    },
    courseRatingValue: {
        marginLeft: 2,
        fontWeight: 'semibold',
        color: '#555555'
    },
    courseEnrolledValue: {
        color: '#555555',
        fontWeight: 'semibold'
    },
    CoursePrice: {
        marginTop: wp('1.5%'),
        marginLeft: wp('3%'),
        flexDirection: 'row',
        flex: 1,
    },
    CoursePriceText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#5477fb'
    },
    CourseMRP: {
        fontSize: 14,
        margin: 3,
        color: '#555555',
        fontWeight: 'semibold',
        textDecorationLine: 'line-through'
    },
    courseBottom: {
        flexDirection: 'row'
    },
    CourseEnrollButton: {
        flex: 1,
        flexDirection: 'row',
        marginTop: wp('1.5%'),
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    enrollText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
        padding: wp('1.2%'),

    },
    enrollButton: {
        justifyContent: 'flex-end',
        backgroundColor: '#5477fb',
        marginRight: wp('2.5%'),
        borderRadius: wp('15%'),
    },
    tutorCourseTitle: {
        fontWeight: 'bold',
        fontSize: wp('5%')
    },
    tutorImageContainer: {
        flexDirection: 'row',
        flex: 1,
    },
    tutorDurationRow: {
        flexDirection: 'row',
    },
    subjectContainer: {
        marginTop: wp('1.5%'),
        backgroundColor: '#5477fb',

        padding: 4,
        borderRadius: 5
    },
    tutorSubjectText: {


        color: '#fff',


    },
    durationContainer: {
        marginTop: wp('1.5%'),
        backgroundColor: '#5477fb',
        marginLeft: 3,
        padding: 4,
        borderRadius: 5
    },
    tutorDurationText: {
        color: '#fff',
    },
    coursePriceRow: {
        flexDirection: 'row'
    },
    priceSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: wp('3.5%'),
    },
    coursePriceValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#5477fb'
    },
    courseMRP: {
        marginTop: wp('1%'),
        marginLeft: 3,
        textDecorationLine: 'line-through'
    }
});

export default HomeScreen;
