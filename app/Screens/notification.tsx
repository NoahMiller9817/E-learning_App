import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface NotificationProps {
    message: string;
    onPress: () => void;
}

const Notification: FC<NotificationProps> = ({ message, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.message}>{message}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 10,
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 7,
        borderWidth:2,
        borderColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        color: '#f44336',
        fontSize: 16,
        fontWeight:"700"
    },
});

export default Notification;








