import React, { useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Animated,
    Easing,
    Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const ConnectingScreen: React.FC = () => {
    // Initialize an array of Animated.Value objects for each circle
    const rotateValues = useRef(Array.from({ length: 8 }, () => new Animated.Value(0))).current;

    useEffect(() => {
        // Start the animation loop for each Animated.Value in the array
        rotateValues.forEach((rotateValue) => {
            Animated.loop(
                Animated.timing(rotateValue, {
                    toValue: 1,
                    duration: 4000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                })
            ).start();
        });
    }, [rotateValues]);

    // Calculate positions for circles in the orbit
    const circlePositions = Array.from({ length: 8 }).map((_, index) => {
        const angle = (index / 8) * 2 * Math.PI;
        return {
            top: 100 * Math.sin(angle),
            left: 100 * Math.cos(angle),
        };
    });

    return (
        <View style={styles.container}>
            <View style={styles.orbitContainer}>
                {rotateValues.map((rotateValue, index) => {
                    // Interpolate the rotation value
                    const rotateInterpolation = rotateValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '360deg'],
                    });

                    return (
                        <Animated.View
                            key={index}
                            style={[
                                styles.orbit,
                                {
                                    transform: [
                                        { rotate: rotateInterpolation },
                                        { translateX: circlePositions[index].left },
                                        { translateY: circlePositions[index].top },
                                    ],
                                },
                            ]}
                        >
                            <View style={styles.circle} />
                        </Animated.View>
                    );
                })}
                <Image
                    source={require('../../assets/images/users/user8.jpeg')} // Replace with actual image source
                    style={styles.avatar}
                />
            </View>
            <View style={styles.bottomContainer}>
                <Image
                    source={require('../../assets/icons/send-outline.png')} // Replace with actual image source
                    style={styles.bottomIcon}
                />
                <Text style={styles.connectingText}>Connecting to tutor</Text>
                <Text style={styles.subText}>Do not press back button</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4B84F1',
    },
    orbitContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    orbit: {
        position: 'absolute',
        width: 20,
        height: 20,
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        position: 'absolute',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    bottomContainer: {
        alignItems: 'center',
        position:"absolute",
        bottom:15
    },
    bottomIcon: {
        width: 50,
        height: 50,
        tintColor: 'white',
        marginBottom: 10,
    },
    connectingText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },
    subText: {
        fontSize: 14,
        color: '#fff',
    },
});

export default ConnectingScreen;
