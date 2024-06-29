import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, TextInput, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import TabButtons, { TabButtonType } from '@/components/tabButtons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import axios from '../../axiosConfig'
import AsyncStorage from '@react-native-async-storage/async-storage';

export enum CustomTab {
  Tab1,
  Tab2
}

interface assignment {
  id: number,
  subject: string,
  name: string,
  createdon: Date,
  modeiedon: Date,
  deadline: Date,
  mentorId: number,
  coursesId: number

}


const PendingAssignments = () => {


  const [userData, setUserData] = useState(null);
  const [assignmentData, setAssignmentData] = useState<assignment[]>([]);

  const retrieveUserData = async () => {
    try {
      const data = await AsyncStorage.getItem('userdata');
      if (data !== null) {
        const parseuserData = JSON.parse(data);
        setUserData(parseuserData);
        console.log('User data retrieved successfully:', parseuserData);
        const userId = parseuserData.id
        console.log(userId)
        // Now userData is an object that you can use in your component state or elsewhere
      } else {
        console.log('No userdata found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error retrieving userdata:', error);
      // Handle error, show error message to user, etc.
    }
  };
  const fetchAssignmentData = async () => {
    try {
      const response = await axios.post('/get_user_assignments', userId);
      if (response.data.success) {
        const fetchedassignment: assignment[] = response.data.assigments; // Assuming response structure
        setAssignmentData(fetchedassignment);
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
  useEffect(() => {

    retrieveUserData();

    fetchAssignmentData();

  }, []);

  const router = useRouter();
  return (
    <ScrollView horizontal={false} style={styles.ScrollContainer}>
      <View >

        <TouchableOpacity onPress={() => router.navigate('../../Screens/assignments')} style={styles.classCard}>
          <View style={styles.classRow}>
            <View style={styles.classImageContainer}>
              <Image source={require('../../../assets/images/courses/course3.jpeg')} style={{ width: wp('25'), height: wp('30%'), borderRadius: 12 }} />
            </View>
            <View style={styles.ClassColumn}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                <View style={{ backgroundColor: 'orange', padding: 4, borderRadius: 7, margin: 3 }}>
                  <Text style={{ color: '#fff' }}>English</Text>
                </View>
                <View style={{ backgroundColor: 'orange', padding: 4, borderRadius: 7, margin: 3 }}>
                  <Text style={{ color: '#fff' }}>Hindi</Text>
                </View>
              </View>
              <Text style={{ marginLeft: wp('1.5%'), fontSize: 18, fontWeight: 'bold', marginTop: wp('2.5%') }}>
                Concept Booster Class 5x
              </Text>
              <View style={{ flexDirection: 'row', marginTop: wp('1.5%'), alignItems: 'center', justifyContent: 'flex-start' }}>
                <FontAwesome name="calendar" size={21}></FontAwesome>
                <Text style={{ marginLeft: 5 }}>24-June-2024</Text>
              </View>
            </View>
          </View>
          <View style={styles.classCardBottomBar}>
            <View style={{ flexDirection: 'row', flex: 1, }}>
              <Image source={require('../../../assets/images/users/user1.jpeg')} style={{ width: 40, height: 40, borderRadius: 50 }}></Image>
              <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>Rohini Sharma</Text>
                <Text style={{ marginLeft: 3, fontSize: 8, fontWeight: 'bold' }}>Instructor</Text>
              </View>

            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={() => router.navigate('../Screens/assignments')}
                style={{ backgroundColor: '#5477fb', padding: 6, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}
              ><Text style={{ color: '#fff' }}>Submit</Text></TouchableOpacity>
            </View>

          </View>



        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.navigate('../../Screens/assignments')} style={styles.classCard}>
          <View style={styles.classRow}>
            <View style={styles.classImageContainer}>
              <Image source={require('../../../assets/images/courses/course3.jpeg')} style={{ width: wp('25'), height: wp('30%'), borderRadius: 12 }} />
            </View>
            <View style={styles.ClassColumn}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                <View style={{ backgroundColor: 'orange', padding: 4, borderRadius: 7, margin: 3 }}>
                  <Text style={{ color: '#fff' }}>English</Text>
                </View>
                <View style={{ backgroundColor: 'orange', padding: 4, borderRadius: 7, margin: 3 }}>
                  <Text style={{ color: '#fff' }}>Hindi</Text>
                </View>
              </View>
              <Text style={{ marginLeft: wp('1.5%'), fontSize: 18, fontWeight: 'bold', marginTop: wp('2.5%') }}>

                Concept Booster Class 5x
              </Text>
              <View style={{ flexDirection: 'row', marginTop: wp('1.5%'), alignItems: 'center', justifyContent: 'flex-start' }}>

                <FontAwesome name="calendar" size={21}></FontAwesome>
                <Text style={{ marginLeft: 5 }}>24-June-2024</Text>

              </View>




            </View>

          </View>

          <View style={styles.classCardBottomBar}>
            <View style={{ flexDirection: 'row', flex: 1, }}>
              <Image source={require('../../../assets/images/users/user1.jpeg')} style={{ width: 40, height: 40, borderRadius: 50 }}></Image>
              <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>Rohini Sharma</Text>
                <Text style={{ marginLeft: 3, fontSize: 8, fontWeight: 'bold' }}>Instructor</Text>
              </View>

            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={() => router.navigate('../Screens/assignments')}
                style={{ backgroundColor: '#5477fb', padding: 6, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}
              ><Text style={{ color: '#fff' }}>Submit</Text></TouchableOpacity>
            </View>

          </View>



        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.navigate('../../Screens/assignments')} style={styles.classCard}>
          <View style={styles.classRow}>
            <View style={styles.classImageContainer}>
              <Image source={require('../../../assets/images/courses/course3.jpeg')} style={{ width: wp('25'), height: wp('30%'), borderRadius: 12 }} />
            </View>
            <View style={styles.ClassColumn}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                <View style={{ backgroundColor: 'orange', padding: 4, borderRadius: 7, margin: 3 }}>
                  <Text style={{ color: '#fff' }}>English</Text>
                </View>
                <View style={{ backgroundColor: 'orange', padding: 4, borderRadius: 7, margin: 3 }}>
                  <Text style={{ color: '#fff' }}>Hindi</Text>
                </View>
              </View>
              <Text style={{ marginLeft: wp('1.5%'), fontSize: 18, fontWeight: 'bold', marginTop: wp('2.5%') }}>

                Concept Booster Class 5x
              </Text>
              <View style={{ flexDirection: 'row', marginTop: wp('1.5%'), alignItems: 'center', justifyContent: 'flex-start' }}>

                <FontAwesome name="calendar" size={21}></FontAwesome>
                <Text style={{ marginLeft: 5 }}>24-June-2024</Text>

              </View>




            </View>

          </View>

          <View style={styles.classCardBottomBar}>
            <View style={{ flexDirection: 'row', flex: 1, }}>
              <Image source={require('../../../assets/images/users/user1.jpeg')} style={{ width: 40, height: 40, borderRadius: 50 }}></Image>
              <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>Rohini Sharma</Text>
                <Text style={{ marginLeft: 3, fontSize: 8, fontWeight: 'bold' }}>Instructor</Text>
              </View>

            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
              <TouchableOpacity onPress={() => router.navigate('../Screens/assignments')}
                style={{ backgroundColor: '#5477fb', padding: 6, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}
              ><Text style={{ color: '#fff' }}>Submit</Text></TouchableOpacity>
            </View>

          </View>



        </TouchableOpacity>



      </View>

    </ScrollView>
  );
};
const Completed = () => {
  const router = useRouter();
  return (
    <ScrollView horizontal={false} style={styles.ScrollContainer}>
      <View >

        <View style={styles.classCard}>
          <View style={styles.classRow}>
            <View style={styles.classImageContainer}>
              <Image source={require('../../../assets/images/courses/course3.jpeg')} style={{ width: wp('25'), height: wp('30%'), borderRadius: 12 }} />
            </View>
            <View style={styles.ClassColumn}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                <View style={{ backgroundColor: 'orange', padding: 4, borderRadius: 7, margin: 3 }}>
                  <Text style={{ color: '#fff' }}>English</Text>
                </View>
                <View style={{ backgroundColor: 'orange', padding: 4, borderRadius: 7, margin: 3 }}>
                  <Text style={{ color: '#fff' }}>Hindi</Text>
                </View>
              </View>
              <Text style={{ marginLeft: wp('1.5%'), fontSize: 18, fontWeight: 'bold', marginTop: wp('2.5%') }}>

                Concept Booster Class 5x
              </Text>
              <View style={{ flexDirection: 'row', marginTop: wp('1.5%'), alignItems: 'center', justifyContent: 'flex-start' }}>

                <FontAwesome name="calendar" size={21}></FontAwesome>
                <Text style={{ marginLeft: 5 }}>24-June-2024</Text>
              </View>
            </View>
          </View>
          <View style={styles.classCardBottomBar}>
            <View style={{ flexDirection: 'row', flex: 1, }}>
              <Image source={require('../../../assets/images/users/user1.jpeg')} style={{ width: 40, height: 40, borderRadius: 50 }}></Image>
              <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>Rohini Sharma</Text>
                <Text style={{ marginLeft: 3, fontSize: 8, fontWeight: 'bold' }}>Instructor</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
              <TouchableOpacity
                style={{ padding: 6, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}
              ><Text style={{ color: '#5477fb', fontWeight: 'bold' }}>COMPLETED</Text></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.classCard}>
          <View style={styles.classRow}>
            <View style={styles.classImageContainer}>
              <Image source={require('../../../assets/images/courses/course3.jpeg')} style={{ width: wp('25'), height: wp('30%'), borderRadius: 12 }} />
            </View>
            <View style={styles.ClassColumn}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                <View style={{ backgroundColor: 'orange', padding: 4, borderRadius: 7, margin: 3 }}>
                  <Text style={{ color: '#fff' }}>English</Text>
                </View>
                <View style={{ backgroundColor: 'orange', padding: 4, borderRadius: 7, margin: 3 }}>
                  <Text style={{ color: '#fff' }}>Hindi</Text>
                </View>
              </View>
              <Text style={{ marginLeft: wp('1.5%'), fontSize: 18, fontWeight: 'bold', marginTop: wp('2.5%') }}>

                Concept Booster Class 5x
              </Text>
              <View style={{ flexDirection: 'row', marginTop: wp('1.5%'), alignItems: 'center', justifyContent: 'flex-start' }}>

                <FontAwesome name="calendar" size={21}></FontAwesome>
                <Text style={{ marginLeft: 5 }}>24-June-2024</Text>
              </View>
            </View>
          </View>
          <View style={styles.classCardBottomBar}>
            <View style={{ flexDirection: 'row', flex: 1, }}>
              <Image source={require('../../../assets/images/users/user1.jpeg')} style={{ width: 40, height: 40, borderRadius: 50 }}></Image>
              <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>Rohini Sharma</Text>
                <Text style={{ marginLeft: 3, fontSize: 8, fontWeight: 'bold' }}>Instructor</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
              <TouchableOpacity
                style={{ padding: 6, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}
              ><Text style={{ color: '#5477fb', fontWeight: 'bold' }}>COMPLETED</Text></TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.classCard}>
          <View style={styles.classRow}>
            <View style={styles.classImageContainer}>
              <Image source={require('../../../assets/images/courses/course3.jpeg')} style={{ width: wp('25'), height: wp('30%'), borderRadius: 12 }} />
            </View>
            <View style={styles.ClassColumn}>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-start' }}>
                <View style={{ backgroundColor: 'orange', padding: 4, borderRadius: 7, margin: 3 }}>
                  <Text style={{ color: '#fff' }}>English</Text>
                </View>
                <View style={{ backgroundColor: 'orange', padding: 4, borderRadius: 7, margin: 3 }}>
                  <Text style={{ color: '#fff' }}>Hindi</Text>
                </View>
              </View>
              <Text style={{ marginLeft: wp('1.5%'), fontSize: 18, fontWeight: 'bold', marginTop: wp('2.5%') }}>

                Concept Booster Class 5x
              </Text>
              <View style={{ flexDirection: 'row', marginTop: wp('1.5%'), alignItems: 'center', justifyContent: 'flex-start' }}>

                <FontAwesome name="calendar" size={21}></FontAwesome>
                <Text style={{ marginLeft: 5 }}>24-June-2024</Text>

              </View>




            </View>

          </View>

          <View style={styles.classCardBottomBar}>
            <View style={{ flexDirection: 'row', flex: 1, }}>
              <Image source={require('../../../assets/images/users/user1.jpeg')} style={{ width: 40, height: 40, borderRadius: 50 }}></Image>
              <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ marginLeft: 3, fontWeight: 'bold' }}>Rohini Sharma</Text>
                <Text style={{ marginLeft: 3, fontSize: 8, fontWeight: 'bold' }}>Instructor</Text>
              </View>

            </View>
            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end' }}>
              <TouchableOpacity
                style={{ padding: 6, paddingLeft: 10, paddingRight: 10, borderRadius: 15 }}
              ><Text style={{ color: '#5477fb', fontWeight: 'bold' }}>COMPLETED</Text></TouchableOpacity>
            </View>

          </View>



        </View>



      </View>

    </ScrollView>
  );
};

const myClasses: React.FC = () => {

  const [selectedTab, setSelectedTab] = useState<CustomTab>(CustomTab.Tab1);
  const buttons: TabButtonType[] = [
    { title: 'Pending' }, { title: 'Completed' }
  ];
  const router = useRouter();
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Assignemnts</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TabButtons buttons={buttons} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {selectedTab === CustomTab.Tab1 ? PendingAssignments() : Completed()}
    </View>


  )
}
const styles = StyleSheet.create({
  ScrollContainer: {
    flexGrow: 1,

  },
  container: {
    margin: wp('2%'),
    flex: 1,
    paddingTop: 50,
    paddingBottom: 30,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: wp('3%'),
    marginRight: wp('3%'),
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  classCard: {
    flexDirection: 'column',
    marginBottom: wp('2%'),
    marginTop: wp('3%'),
    backgroundColor: '#fff',
    borderRadius: 12,
    marginLeft: 15,
    marginRight: 15,
    // paddingLeft: 8,
    elevation: 8,


    alignItems: "flex-start",
    textAlign: "left",

    shadowOffset: {
      width: 1,
      height: 1,
    },

    shadowColor: '#808080 ',
    shadowRadius: 1,
    shadowOpacity: 0.5
  },
  classImageContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  classRow: {
    flexDirection: 'row',

  },
  ClassColumn: {
    flexDirection: 'column',
    margin: 10,
    flex: 1,
    justifyContent: 'center'
  },
  ClassNameContainer: {
    marginTop: 10,

  },
  classCardBottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: wp('2%'),


  }


})

export default myClasses

