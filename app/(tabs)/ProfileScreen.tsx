import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = React.useState(false);

  const handleLogout = () => {
    // Implement logout functionality here

    console.log('Logged out');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          style={styles.profileImage}
          source={require('../../assets/images/users/user8.jpeg')} // Replace with actual image source
        />
        <Text style={styles.profileName}>Prashant Singh</Text>
        <Text style={styles.profileEmail}>pranksngh@gmail.com</Text>
      </View>
      <View style={styles.optionsSection}>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('EditProfile')}>
          <Ionicons name="person-outline" size={20} color="black" style={styles.profileIcon} />
          <View style={styles.profile}>
            <Text style={styles.optionText}>Edit Profile</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Notification')}>
          <Ionicons name="notifications-outline" size={20} color="black" style={styles.profileIcon} />
          <View style={styles.profile}>
            <Text style={styles.optionText}>Notification</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Payment')}>
          <Ionicons name="card-outline" size={20} color="black" style={styles.profileIcon} />
          <View style={styles.profile}>
            <Text style={styles.optionText}>Payment</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Security')}>
          <Ionicons name="shield-checkmark-outline" size={20} color="black" style={styles.profileIcon} />
          <View style={styles.profile}>
            <Text style={styles.optionText}>Security</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Language')}>
          <Ionicons name="albums-outline" size={20} color="black" style={styles.profileIcon} />
          <View style={styles.profile}>
            <View>
              <View style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", width: "92%" }}>
                <Text style={styles.optionText}>Language</Text>
                <View>
                  <Text style={styles.optionText}>English (US)</Text>
                </View>
              </View>
            </View>
            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
          </View>
        </TouchableOpacity>
        <View style={styles.option}>
          <Ionicons name="eye-outline" size={20} color="black" style={styles.profileIcon} />
          <View style={{ display: "flex", flexDirection: 'row',alignItems:"center", justifyContent: 'space-between', width: "92%", }}>
            <Text style={styles.optionText}>Dark Mode</Text>
            <Switch
              value={darkMode}
              onValueChange={(value) => setDarkMode(value)}
            />
          </View>

        </View>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('PrivacyPolicy')}>
          <Ionicons name="bag-outline" size={20} color="black" style={styles.profileIcon} />
          <View style={styles.profile}>
            <Text style={styles.optionText}>Privacy Policy</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('HelpCenter')}>
          <Ionicons name="help-circle-outline" size={20} color="black" style={styles.profileIcon} />
          <View style={styles.profile}>
            <Text style={styles.optionText}>Help Center</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Language')}>
          <Ionicons name="log-out-outline" size={20} color="black" style={styles.profileIcon} />
          <View style={styles.profile}>
            <Text style={styles.optionText}>Logout</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="black" style={styles.profileIcon} />
          </View>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    display:'flex',
    justifyContent:"space-between",
    fontWeight: 'bold',

  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 80,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 16,
    color: 'gray',
  },
  profile: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
    width: '94%'
  },
  optionsSection: {
    marginBottom: 20,
  },
  option1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ffff',
    height: 55
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ffff',
    height: 55,
    gap: 8
  },
  profileIcon: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingRight: 5,
    zIndex: 10
  },

  optionText: {
    fontSize: 16,
    fontFamily: 'sans-serif'
  },
  logoutButton: {
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f44336',
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProfileScreen;
