import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import delivery_img from '../assets/delivery_image.png';

export default function Delivery({ navigation }) {
    return (
        <View style={styles.restos}>
            <View style={styles.button_space}>
                <Text> Back </Text>
                <Text> Skip </Text>
            </View>

            <Image source={delivery_img} style={styles.delivery_image}/>

            <Text style={styles.title}> We'll have it delivered </Text>

            <Text style={{fontSize: 30, justifyContent: 'center', marginBottom: 150}}>
                Our hassle free delivery service is world class and
                will have your order delivered to any address of
                your specification.
            </Text>

            <View styles={styles.button_space}>
              <Button
                style={styles.button}
                title="..."
              />
              <Button
                onPress={() => navigation.navigate('RestoList')}
                style={styles.button}
                title="->"
              />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    restos: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#2180EF',
        fontSize: 50,
        alignItems: 'center',
    },
    delivery_image: {
        width: 450,
        height: 380,
    },
    button: {
        backgroundColor: '#2180EF',
        borderRadius: 5,
    },
    button_space: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});