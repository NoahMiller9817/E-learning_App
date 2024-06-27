import Ionicons from '@expo/vector-icons/Ionicons';
// import { View, Text, TextInput, Pressable, StyleSheet, Dimensions, Platform, ScrollView } from 'react-native';
// import React, { useState } from 'react';
// import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import RNPickerSelect from 'react-native-picker-select';
// import { useRouter } from 'expo-router';
// import axios from '../axiosConfig';



import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, Animated, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RNPickerSelect from 'react-native-picker-select';
import { useRouter } from 'expo-router';
import axios from '../axiosConfig';
import Notification from './notification';
import Snackbar from 'react-native-snackbar';



interface FormData {
  type: String,
  name: string;
  email: string;
  mobileNumber: string;
  selectedClass: string | null;
  selectedBoard: string | null;
}



export default function TabTwoScreen() {
  const [isStudent, setIsStudent] = useState(true);
  const [loading, setLoading] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');



  const [formData, setFormData] = useState<FormData>({
    type: isStudent ? "Student" : "Parent",
    name: '',
    email: '',
    mobileNumber: '',
    selectedClass: null,
    selectedBoard: null,
  });

  // State for tracking error fields
  const [errorFields, setErrorFields] = useState<string[]>([]);

  // Animation state for shaking effect
  const [shakeAnimation] = useState(new Animated.Value(0));

  const handleSignUp = async () => {
    if (!formData.type || !formData.name || !formData.email || !formData.mobileNumber) {
      // alert("please input correct info");
      // return;
      // Set error fields


      // if (!formData.email) {
      //   console.error('Please enter your email!');
      // }
      // if (!formData.mobileNumber) {
      //   console.error('Please enter your phone number!');
      // }

      const errors: string[] = [];
      if (!formData.name) errors.push('name');
      if (!formData.email) errors.push('email');
      if (!formData.mobileNumber) errors.push('mobileNumber');
      setErrorFields(errors);

      // Shake animation
      Animated.sequence([
        Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
        Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
      ]).start();

      // Snackbar.show({
      //   text: 'Please fill in all required fields!',
      //   duration: Snackbar.LENGTH_LONG,
      //   backgroundColor: '#f44336',
      // });
      // Alert.alert("myTitle", "my message");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('/user', formData);
      if (response.data.state == 'You registered successfully!') {
        router.back();
      }
    } catch (error) {
      console.error('Error registering user:', error);
    } finally {
      setLoading(false);
    }
  };


  const router = useRouter();

  return (

    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.selectionContainer}>
          <Pressable
            style={[styles.selectionButton, isStudent && styles.selectedButton]}
            onPress={() => setIsStudent(true)}
          >
            <View style={styles.selectedCheck}>
              {isStudent && <Ionicons name="checkmark-circle-outline" size={30} color="yellowgreen" style={styles.checkmarkIcon} />}
            </View>
            <Text style={[styles.selectionText, isStudent && styles.selectedText]}>I am a</Text>
            <Text style={[styles.selectionText, styles.leftBold, isStudent && styles.selectedText]}>STUDENT</Text>
          </Pressable>
          <Pressable
            style={[styles.selectionButton, !isStudent && styles.selectedButton]}
            onPress={() => setIsStudent(false)}
          >
            <View style={styles.selectedCheck}>
              {!isStudent && <Ionicons name="checkmark-circle-outline" size={30} color="yellowgreen" style={styles.checkmarkIcon} />}
            </View>
            <View>
              <Text style={[styles.selectionText, !isStudent && styles.selectedText]}>I am a</Text>
              <Text style={[styles.selectionText, styles.leftBold, !isStudent && styles.selectedText]}>PARENT</Text>
            </View>
          </Pressable>
        </View>
        <View style={styles.containerMain}>
          <View style={styles.registerInput}>
            <TextInput
              style={[
                styles.input,
                errorFields.includes('name') && styles.inputError,
              ]}
              placeholder="name"
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />

          </View>
          <View style={styles.registerInput}>
            <TextInput
              style={[
                styles.input,
                errorFields.includes('email') && styles.inputError
              ]}
              placeholder="Email"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.registerInput}>
            <TextInput
              style={[
                styles.input,
                errorFields.includes('mobileNumber') && styles.inputError,
              ]}
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChangeText={(text) => setFormData({ ...formData, mobileNumber: text })}
              keyboardType="phone-pad"
            />
          </View>
          <RNPickerSelect
            onValueChange={(value) => setFormData({ ...formData, selectedClass: value })}
            placeholder={{
              label: 'Select Class',
              value: null,
              color: '#9EA0A4',
            }}
            items={[
              { label: 'Class 1', value: 'class1' },
              { label: 'Class 2', value: 'class2' },
              { label: 'Class 3', value: 'class3' },
              { label: 'Class 4', value: 'class4' },
              { label: 'Class 5', value: 'class5' },
              { label: 'Class 6', value: 'class6' },
              { label: 'Class 7', value: 'class7' },
              { label: 'Class 8', value: 'class8' },
              { label: 'Class 9', value: 'class9' },
              { label: 'Class 10', value: 'class10' }
              // Add more class options as needed
            ]}
            style={pickerSelectStyles}
            value={formData.selectedClass}
          />
          <RNPickerSelect
            onValueChange={(value) => setFormData({ ...formData, selectedBoard: value })}
            placeholder={{
              label: 'Select Board',
              value: null,
              color: '#9EA0A4',
            }}
            items={[
              { label: 'CBSE', value: 'cbse' },
              { label: 'ICSE', value: 'icse' },
            ]}
            style={pickerSelectStyles}
            value={formData.selectedBoard}
          />
          <Pressable style={styles.signupButton} onPress={handleSignUp}>
            <Text style={styles.signupButtonText}>Sign Up</Text>
          </Pressable>
          {errorFields.length > 0 && (
            <Notification
              message="Please fill in all required fields !"
              onPress={() => setErrorFields([])}
            />
          )}
          <View style={styles.signupText}>
            <Text>Already a User?{' '}</Text>
            <Pressable onPress={() => router.back()}>
              <Text style={styles.signupLink}>Login</Text>
            </Pressable>
          </View>
          <View style={styles.signupText}>
            <Text style={styles.containerMainText}>or continue with</Text>
          </View>
        </View>
        <View style={styles.socialContainer}>
          <Pressable style={styles.socialButton}>
            <Ionicons name="logo-facebook" size={24} color="#3b5998" />
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Ionicons name="logo-google" size={24} color="#db4437" />
          </Pressable>
          <Pressable style={styles.socialButton}>
            <Ionicons name="logo-apple" size={24} color="#000" />
          </Pressable>

        </View>
      </View>

    </ScrollView>

  );
}

const styles = StyleSheet.create({
  safeAreaView: {

  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: wp('7%'),
    paddingTop: 50,
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginBottom: hp('5%'),
  },
  selectionContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    height: wp('30%'),
    width: wp('90%'),
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#eee',
    shadowRadius: 5,
    shadowOpacity: 0.8
  },
  selectionButton: {
    flex: 1,
    display: 'flex',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: 10
  },
  selectedCheck: {
    marginRight: wp('2%'),
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 30,
  },
  selectedButton: {
    backgroundColor: '#333450',
  },
  selectionText: {
    fontSize: wp('4%'),
    color: '#000',
  },
  selectedText: {
    color: '#fff',
  },
  leftBold: {
    fontWeight: '900',
    color: '#000',
  },
  checkmarkIcon: {
    marginLeft: 5,
  },
  containerMain: {
    width: '100%',
    gap: hp('1%'),
    paddingBottom: hp('3%'),
  },
  registerInput: {
    marginBottom: hp('2%'),
  },
  label: {
    fontSize: wp('4%'),
    paddingLeft: 8,
  },
  input: {
    width: '100%',
    height: hp('6%'),
    borderColor: '#eaf3ee',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#eaf3ee',
  },
  inputError: {
    borderColor: 'red',
    color: 'red',
    borderWidth: 2,
  },
  picker: {
    marginTop: wp('5%'),
    width: '100%',
    backgroundColor: '#eaf3ee',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  signupButton: {
    width: '100%',
    height: hp('7%'),
    backgroundColor: '#43c6a6',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('2%'),
  },
  signupButtonText: {
    color: '#fff',
    fontSize: wp('5%'),
  },
  signupText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: hp('2%'),
  },
  signupLink: {
    color: '#333',
    fontWeight: '900',
  },
  containerMainText: {
    fontSize: wp('3%'),
    marginBottom: -hp('2%'),
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '65%',
    paddingTop: hp('1%'),
    marginBottom: hp('3%'),
  },
  socialButton: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shakeContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: 'transparent',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#eaf3ee',
    marginBottom: hp('2%'),
  },

});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: wp('4%'),
    marginTop: 10,
    borderRadius: 5,
    color: '#000',
    paddingRight: wp('5%'), // to ensure the text is never behind the icon

    width: wp('86%'),
    height: hp('6%'),
    borderColor: '#eaf3ee',
    paddingHorizontal: 10,
    backgroundColor: '#eaf3ee',
  },
  inputAndroid: {
    fontSize: wp('4%'),
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('2%'),
    borderWidth: 1,
    borderColor: '#eaf3ee',
    borderRadius: 5,
    color: '#000',
    paddingRight: wp('5%'), // to ensure the text is never behind the icon
    backgroundColor: '#eaf3ee',
    marginTop: hp('2%'),
  },
});


