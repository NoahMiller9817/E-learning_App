import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming, } from 'react-native-reanimated';

const SplashScreen = ({ navigation }) => {
    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withTiming(1, {
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
        });

        setTimeout(() => {
            navigation.replace('SignUpCompleteScreen');
        }, 3000);
    }, [navigation, scale]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scale.value }],
        };
    });

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.logoContainer, animatedStyle]}>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                <Text style={styles.text}>Sisi Classes</Text>
            </Animated.View>
            <Animated.View style={[styles.loader, animatedStyle]}>
                <Image source={require('../../assets/icons/setting-outline.png')} style={styles.loaderImage} />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        tintColor:"#4a70f9"
    },
    text: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    loader: {
        position: 'absolute',
        bottom: 50,
    },
    loaderImage: {
        width: 50,
        height: 50,
    },
});

export default SplashScreen;









