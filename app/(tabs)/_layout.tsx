import { Tabs } from 'expo-router';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AssignmentScreen from '../../components/screens/assignment';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  // const TabBarIcon = ({ name, color})=> {
  //   return(
  //     <View>
  //       <Text>{name}</Text>
  //     </View>
  //   );
  // };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="login"
        options={{
          title: 'home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: 'register',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        options={{
          title: 'profile',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'body' : 'body-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'dashboard',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'menu' : 'menu-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="waiting"
        options={{
          title: 'waiting',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'time' : 'time-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Editpro"
        options={{
          title: 'Editpro',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'stop' : 'stop-outline'} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="verifycode"
        options={{
          title: 'Verifycode',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'stop' : 'stop-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
