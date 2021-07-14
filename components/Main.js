import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import splash_img from '../assets/splash_image.png';

export default function Main({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{padding: 10}}> Skip </Text>

            <Image source={splash_img} style={styles.splash_image}/>

            <Text style={styles.title}>
                Find The Food You Want
            </Text>

            <Text style={{fontSize: 30, justifyContent: 'center', marginBottom: 150}}>
                Our app helps you dinf the right food for every mood, any time & any day
            </Text>

            <View styles={styles.button_space}>
              <Button
                style={styles.button}
                title="..."
              />
              <Button
                onPress={() => navigation.navigate('Delivery')}
                style={styles.button}
                title="->"
              />
            </View>

            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#2180EF',
      fontSize: 50,
      alignItems: 'center',
    },
    splash_image: {
      width: 330,
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