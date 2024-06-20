// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

// const SignUpCompleteScreen = ({ navigation }) => {
//   const opacity = useSharedValue(0);

//   useEffect(() => {
//     opacity.value = withTiming(1, {
//       duration: 1000,
//       easing: Easing.inOut(Easing.ease),
//     });

//     setTimeout(() => {
//       navigation.replace('HomeScreen');
//     }, 3000);
//   }, [navigation, opacity]);

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       opacity: opacity.value,
//     };
//   });

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.content, animatedStyle]}>
//         <Image source={require('./path_to_your_icon.png')} style
