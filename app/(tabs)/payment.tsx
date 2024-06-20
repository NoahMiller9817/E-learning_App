import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const paymentMethods = [
    { id: 1, name: 'PayPal', icon: require('../../assets/icons/paypal.png') },
    { id: 2, name: 'Google Pay', icon: require('../../assets/icons/google.png') },
    { id: 3, name: 'Apple Pay', icon: require('../../assets/icons/apple.png') },
    { id: 4, name: 'MasterCard', icon: require('../../assets/icons/mastercard.png'), cardNumber: '.... .... .... 4679' },
];

const EnrollCourseScreen = () => {
    const [selectedMethod, setSelectedMethod] = useState(null);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Enroll Course</Text>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-horizontal" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={styles.subHeaderText}>Select the payment method you want to use</Text>
            {paymentMethods.map((method) => (
                <TouchableOpacity
                    key={method.id}
                    style={[
                        styles.paymentMethod,
                        selectedMethod === method.id && styles.selectedPaymentMethod,
                    ]}
                    onPress={() => setSelectedMethod(method.id)}
                >
                    <Image source={method.icon} style={styles.paymentIcon} />
                    <Text style={styles.paymentText}>{method.name}</Text>
                    {method.cardNumber && <Text style={styles.cardNumber}>{method.cardNumber}</Text>}
                    <View style={styles.radioCircle}>
                        {selectedMethod === method.id && <View style={styles.selectedRb} />}
                    </View>
                </TouchableOpacity>
            ))}
            <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "35%" }}>
                <TouchableOpacity style={styles.addCardButton}>
                    <Text style={styles.addCardButtonText}>Add New Card</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.enrollButton}>
                    <Text style={styles.enrollButtonText}>Enroll Now</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subHeaderText: {
        fontSize: 16,
        marginVertical: 20,
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        height: 80
    },
    selectedPaymentMethod: {
        backgroundColor: '#f0f0f0',
    },
    paymentIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    paymentText: {
        fontSize: 16,
        flex: 1,
    },
    cardNumber: {
        fontSize: 16,
        marginRight: 10,
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#444',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#444',
    },
    addCardButton: {
        backgroundColor: '#E0E7FF',
        padding: 15,
        borderRadius: 30,
        alignItems: 'center',
        marginBottom: 30,
    },
    addCardButtonText: {
        color: '#3366FF',
        fontSize: 16,
        borderRadius: 30,
    },
    enrollButton: {
        backgroundColor: '#3366FF',
        padding: 20,
        borderRadius: 30,
        alignItems: 'center',
    },
    enrollButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EnrollCourseScreen;
