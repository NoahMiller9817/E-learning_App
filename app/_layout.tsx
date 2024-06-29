//Define Routes

import React from 'react';
import { createStackNavigator ,StackNavigationOptions } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AllCourses from './Screens/AllCourses';
import Assignments from './Screens/assignments';
import CourseDetailsScreen from './Screens/courseDetails';
import LessonsScreen from './Screens/lessons';
// import logout from './Screens/logout';
import HomeScreen from './(drawer)/(tabs)';
import MyClasses from './Screens/myclasses';
import MyDoubtsScreen from './Screens/MyDoubts';
import Notifications from './Screens/notification';
import UserRegister from './Screens/register';
import Reports from './Screens/Reports';
import VerifyCode from './Screens/verifycode';
import Sidebar from './(drawer)/_layout';
import Login from './index';
// export default function Layout() {
//   return (
//     <Stack initialRouteName="login">
//       <Stack.Screen name="index" options={{ headerShown: false }} />
//       <Stack.Screen name="register" options={{ headerShown: false }} component={Register} />
//       <Stack.Screen name="Screens/courseDetails" options={{ headerShown: false }} />
//       <Stack.Screen name="Screens/lessons" options={{ headerShown: false }} />
//       <Stack.Screen name="Screens/assignments" options={{ headerShown: false }} />
//       <Stack.Screen name="Screens/myclasses" options={{ headerShown: false }} />
//       <Stack.Screen name="Screens/MyDoubts" options={{ headerShown: false }} />
//       <Stack.Screen name="Screens/chats" options={{ headerShown: false }} />
//       <Stack.Screen name="Screens/chatDetails" options={{ headerShown: false }} />
//       <Stack.Screen name="Screens/Reports" options={{ headerShown: false }} />
//       <Stack.Screen name="Screens/verifycode" options={{ headerShown: false }} />
//       <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
//     </Stack>);
// }

const Stack = createStackNavigator();

const AppNavigator = () => {

  const screenOptions: StackNavigationOptions = {
    headerShown: false, // Hide header for all screens
  };
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
        <Stack.Screen name="_layout" component={Sidebar} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Register" component={UserRegister} />
        <Stack.Screen name="AllCourse" component={AllCourses} />
        <Stack.Screen name="Notification" component={Notifications} />
        <Stack.Screen name="courseDetails" component={CourseDetailsScreen} />
        <Stack.Screen name="lessons" component={LessonsScreen} />
        <Stack.Screen name="assignments" component={Assignments} />
        <Stack.Screen name="myclasses" component={MyClasses} />
        <Stack.Screen name="MyDoubts" component={MyDoubtsScreen} />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        {/* <Stack.Screen name="logout" component={logout} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
