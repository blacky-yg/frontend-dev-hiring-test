import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function RestoDetails({ navigation }) {
    return (
        <View style={styles.restoDetails}>
            <Text> Resto Details </Text>
            <Button
                title="Go back to list"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    restoDetails: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    }
});