import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TextInput, Pressable, StyleSheet, Dimensions,Image } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const { width } = Dimensions.get('window');

export default function TabTwoScreen() {
  const [isStudent, setIsStudent] = useState(true);
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedBoard, setSelectedBoard] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Register
      </Text>
      <View style={styles.selectionContainer}>
        <Pressable
          style={[styles.selectionButton , isStudent && styles.selectedButton]}
          onPress={() => setIsStudent(true)}
          >
          <View style={styles.selectedCheck}>
          {isStudent && <Ionicons name="checkmark-circle-outline" size={20} color="yellowgreen" style={styles.checkmarkIcon} />}
          </View>
          <Text style={[styles.selectionText, isStudent && styles.selectedText]}>
            I am a 
          </Text>

          <Text style={[styles.selectionText && styles.leftbold, isStudent && styles.selectedText && styles.bold]}>
          STUDENT
          </Text>

        </Pressable>
        <Pressable
          style={[styles.selectionButton, !isStudent && styles.selectedButton]}
          onPress={() => setIsStudent(false)}
        >
          <View style={styles.selectedCheck}>
            {!isStudent && <Ionicons name="checkmark-circle-outline" size={20} color="yellowgreen" style={styles.checkmarkIcon} />}
          </View>
          <View>
            <Text style={[styles.selectionText, !isStudent && styles.selectedText]}>
              I am a 
            </Text>
            <Text style={[styles.selectionText && styles.leftbold, !isStudent && styles.selectedText && styles.bold]}>
              PARENT
            </Text>
          </View>
        </Pressable>
      </View>
      <View style={styles.container_main}>
      <View style={styles.register_input}>
      <Text style={styles.label}>
        name
      </Text>
      <TextInput
        style={styles.input}
        placeholder="name"
        // keyboardType="phone-pad"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      </View>

      <View style={styles.register_input}>
      <Text style={styles.label}>
        email
      </Text>
      <TextInput
        style={styles.input}
        placeholder="example@gmail.com"
      />
      </View>
      <View style={styles.register_input}>
      <Text style={styles.label}>
        phone number
      </Text>
      <TextInput
        style={styles.input}
        placeholder="+91    Mobile Number"
        // keyboardType="phone-pad"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      </View>
      <View style={{display:'flex',width:width * 0.8, flexDirection:'column',gap:27}}>
            <Picker
            selectedValue={selectedBoard}
            onValueChange={(itemValue, itemIndex) => setSelectedBoard(itemValue)}
            style={styles.regsiter_select && styles.pick}
            >
            <Picker.Item label="CLASS1" value="class1" />
            <Picker.Item label="CLASS2" value="class2" />
            <Picker.Item label="CLASS3" value="class3" />
            <Picker.Item label="CLASS4" value="class4" />
            <Picker.Item label="CLASS5" value="class5" />
            <Picker.Item label="CLASS6" value="class6" />
            <Picker.Item label="CLASS7" value="class7" />
            <Picker.Item label="CLASS8" value="class8" />
            <Picker.Item label="CLASS9" value="class9" />
            <Picker.Item label="CLASS10" value="class10" />
            <Picker.Item label="CLASS11" value="class11" />
            <Picker.Item label="CLASS12" value="class12" />
          </Picker>
        <Picker
          selectedValue={selectedBoard}
          onValueChange={(itemValue, itemIndex) => setSelectedBoard(itemValue)}
          style={styles.regsiter_select}
        >
          <Picker.Item label="CBSE" value="cbse" />
          <Picker.Item label="ICSE" value="icse" />
        </Picker>
      </View>
  
      <Pressable style={styles.signupbutton}>
        <Text style={styles.signupbuttonText}>Sign Up</Text>
      </Pressable>

      <View style={styles.signupText}>
        <Text>Already a User ?{' '}</Text>
        <Pressable>
          <Text style={styles.signupLink}>Login</Text>
        </Pressable>
      </View>

      <View style={styles.signupText}>
      <Text style={styles.container_main_text}>
        or continue with
      </Text>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // paddingTop: 10,
    backgroundColor: '#fff',
    marginTop:10
  },
  container_close_button:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    paddingLeft:20
  },
  container_header:{
    display:'flex',
    flexDirection:'column',
    width:'80%',
    justifyContent:'center',
    alignContent:'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  selectionContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft:50,
    paddingRight:50,
    width:"100%"
  },
  selectionButton: {
    flex: 1,
    display:'flex',
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderBottomColor:'black',
    borderColor: '#eaf3ee',
    backgroundColor:'#eaf3ee',
    justifyContent: 'center',
    flexDirection: 'column',
    width:'100%',
    paddingLeft:10,
  },
  selectedCheck:{
    width:120,
    display:"flex",
    flexDirection:'row',
    justifyContent:'flex-end',
    height:20,
  },
  selectedButton: {
    backgroundColor: '#333450',
  },
  selectionText: {
    height:20,
    fontSize: 16,
    color: '#000',
  },
  selectedText: {
    color: '#fff',
    borderColor:'#000',
  },
  bold:{
    fontWeight:900,
    color:'#fff'
  },
  leftbold:{
    fontWeight:900,
    color:'#000'
  },
  checkmarkIcon: {
    display:'flex',
    marginLeft: 5,
    // borderWidth:1,
    // borderColor:'black',
    // borderRadius:10,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingRight:5,
    zIndex:10
  },
   checkmarkIconTrue: {
    display:'flex',
    marginLeft: 5,
    borderWidth:1,
    borderColor:'black',
    borderRadius:10,
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingRight:5,
    zIndex:10
  },
  container_main:{
    display:'flex',
    flexDirection:'column',
    width:'80%',
    // paddingTop:10,
    gap:0,
    paddingBottom:20
  },
  register_input:{
    display:'flex',
    flexDirection:'column',
    width:'100%'
  },
  label:{
    fontSize:15,
    paddingLeft:8
  },
  input: {
    width: width * 0.8,
    height: 50,
    borderColor: '#eaf3ee',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop:5,
    marginBottom: 5,
    backgroundColor:'#eaf3ee',
  },
  regsiter_select:{
    backgroundColor:"#eaf3ee",
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    paddingBottom:10,
    justifyContent:"space-between",
    alignContent:"center"
  },
  pick:{
    marginTop:23,
    backgroundColor:"#eaf3ee",
  },
  signupbutton: {
    width: width * 0.8,
    height: 50,
    backgroundColor: '#43c6a6',
    borderRadius: 25, // Medium level border radius
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  signupbuttonText: {
    color: '#fff',
    fontSize: 18,
  },
  signupText: {
    display:'flex',
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    paddingTop:15,
  },
  signupLink: {
    color: '#333',
    fontWeight:"900"
  },
  socialContainer: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'65%',
    paddingTop:5,
    marginBottom: 30
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  socialButtonText: {
    fontSize: 24,
    color: '#333',
  },
  login_signup:{
    width:'80%',
    height:'auto',
    fontSize:20,
    marginBottom:30
  },
  container_main_text:{
    fontSize:12,
    marginBottom:-20
  }
});
