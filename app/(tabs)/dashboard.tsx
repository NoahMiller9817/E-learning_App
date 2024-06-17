import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
const HomeScreen: React.FC = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/images/users/user10.jpeg')} style={styles.profilePic} />
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>Welcome Back!</Text>
                    <Text style={styles.userName}>Dishant Nirmal</Text>
                </View>
                <View style={{ width: 32, height: 32, backgroundColor: "#c5d2f6", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <View style={{ width: 10, height: 10, backgroundColor: "blue", borderRadius: 50, position: "absolute", right: 3, top: 1.5 }}>
                    </View>
                    <Ionicons name="notifications" size={24} color="#4f75fc" />
                </View>
            </View>

            <View style={styles.banner}>
                {/* <Image source={require('../../assets/images/educate8.png')} 
        resizeMode='stretch'
         /> */}
                <Text style={styles.bannerText}>Do You Know where to start?</Text>
                <View style={{ display: "flex", flexDirection: "column", paddingTop: 60 }}>
                    <TextInput style={styles.searchInput} placeholder="Search here..." />
                </View>
            </View>

            <View style={styles.classesContainer}>
                <Text style={styles.sectionTitle}>Classes</Text>
                <TouchableOpacity>
                    <Text style={styles.seeAllText}>See all</Text>
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.classesScroll}>
                <View style={styles.classBox}>
                    <Text style={styles.classText}>1</Text>
                    <Text style={styles.classtext}>st</Text>
                    <Image source={require('../../assets/images/ashley-west-edwards-4XOuAqQSj-Y-unsplash.jpg')} style={styles.classimage} />
                </View>
                <View style={styles.classBox}>
                    <Text style={styles.classText}>2</Text>
                    <Text style={styles.classtext}>nd</Text>
                    <Image source={require('../../assets/images/kari-shea-apcUIqOPEIo-unsplash.jpg')} style={styles.classimage} />

                </View>
                <View style={styles.classBox}>
                    <Text style={styles.classText}>3</Text>
                    <Text style={styles.classtext}>rd</Text>
                    <Image source={require('../../assets/images/christopher-gower-m_HRfLhgABo-unsplash.jpg')} style={styles.classimage} />

                </View>
            </ScrollView>

            <View style={styles.tutorSection}>
                <Text style={styles.sectionTitle}>Our tutor</Text>
                <View style={styles.tutorCard}>
                    {/* <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.tutorImage} /> */}
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "95%" }}>
                        <View style={styles.tutorInfo}>
                            <Text style={styles.tutorSubject}>Business studies</Text>
                            <Text style={styles.tutorName}>Meena Kumari</Text>
                            <Text style={styles.tutorDetails}>B.com</Text>
                            <Text style={styles.tutorClasses}>11th & 12th</Text>
                        </View>
                        <Image source={require('../../assets/images/users/user11.jpeg')} style={styles.tutorImage} />
                        <View style={{ display: "flex", flexDirection: "row", paddingLeft: 5, paddingTop: 5, position: "absolute", right: 8, bottom: 2 }}>
                            <Ionicons name="star" size={21} color="yellow" style={styles.notificationIcon} />
                            <Ionicons name="star" size={21} color="yellow" style={styles.notificationIcon} />
                            <Ionicons name="star" size={21} color="yellow" style={styles.notificationIcon} />
                            <Ionicons name="star-half" size={21} color="yellow" style={styles.notificationIcon} />
                        </View>
                    </View>
                </View>
                <View style={styles.tutorCard}>
                    {/* <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.tutorImage} /> */}
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "95%" }}>
                        <View style={styles.tutorInfo}>
                            <Text style={styles.tutorSubject}>Business studies</Text>
                            <Text style={styles.tutorName}>Eric Miller</Text>
                            <Text style={styles.tutorDetails}>B.com</Text>
                            <Text style={styles.tutorClasses}>9th & 10th</Text>
                        </View>
                        <Image source={require('../../assets/images/users/user7.jpeg')} style={styles.tutorImage} />
                        <View style={{ display: "flex", flexDirection: "row", paddingLeft: 5, paddingTop: 5, position: "absolute", right: 8, bottom: 2 }}>
                            <Ionicons name="star" size={21} color="yellow" style={styles.notificationIcon} />
                            <Ionicons name="star" size={21} color="yellow" style={styles.notificationIcon} />
                            <Ionicons name="star" size={21} color="yellow" style={styles.notificationIcon} />
                            <Ionicons name="star" size={21} color="yellow" style={styles.notificationIcon} />
                        </View>


                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
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
        backgroundColor: '#4B84F1',
        padding: 20,
        height: 150,
        borderRadius: 31,
        margin: 16,
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
        width: 120,
        height: 120,
        backgroundColor: '#ebe8e8',
        borderRadius: 25,
        // paddingLeft: 8,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
        // alignItems: 'center',
        // marginRight: 10,
    },
    classText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#345ae7",
        zIndex: 100,
        position: "absolute",
        top: 8,
        left: 10
    },
    classtext: {
        fontSize: 14,
        fontWeight: 'bold',
        zIndex: 100,
        color: "#345ae7",
        position: "absolute",
        top: 18,
        left: 23
    },
    classimage: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        borderRadius: 25
    },
    tutorSection: {
        paddingHorizontal: 16,
        marginTop: 20,
    },
    tutorCard: {
        display: "flex",
        flexDirection: 'row',
        backgroundColor: '#5477fb',
        borderRadius: 25,
        padding: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    tutorImage: {
        width: 100,
        height: 100,
        paddingRight: 20,
        borderRadius: 10,
        position: "relative",
    },
    tutorInfo: {
        marginLeft: 20,
        flex: 1,
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
});

export default HomeScreen;
