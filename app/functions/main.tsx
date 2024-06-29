import axios from "../axiosConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';



export const savePhoneNumber = async (formData:any) => {
    try {
      await AsyncStorage.setItem('mobileNumber', formData.phone);
      //setMobileNumber(formData.phone);
    } catch (error) {
      console.error('Error saving phone number:', error);
    }
};

export const handleLogin = async (formData:any) => {
    const navigation = useNavigation();

    try {
        const response = await axios.post('/login_user', formData);
        if (response.data.success == true) {
            await AsyncStorage.setItem('showNoticator', "false");
            alert(`Your VerifyCode is ${response.data.otp}`);
            savePhoneNumber(formData);
            navigation.navigate('VerifyCode');
        }
        // Optionally, navigate to a new screen or show a success message
    } catch (error) {
        if (error == 500) {
        console.error('Error logining user:', error);
        }
        else {
        alert("Can't find phone number!");
        }
        // Handle error, show error message to user, etc.
    }
};

export const logOut = async () => {
    AsyncStorage.removeItem("");
}