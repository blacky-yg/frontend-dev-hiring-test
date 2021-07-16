import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import splash_img from '../assets/splash_image.png';

export default function Main({ navigation }) {
    return (
        <View style={styles.container}>

          <TouchableOpacity
            style={styles.navigationRight}
            onPress={() => navigation.navigate('RestoList')}
          >
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>

          <Image source={splash_img} style={styles.splash_image}/>

          <Text style={styles.title}>
            Find The Food You Want
          </Text>

          <Text style={styles.description}>
            Our app helps you dinf the right food for every mood, any time & any day
          </Text>

          <TouchableOpacity
            style={styles.touchable}
          >

            <Text
              onPress={() => navigation.navigate('Delivery')}
              style={styles.button}
            >
              {'>'}
            </Text>

          </TouchableOpacity>

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
    navigationRight: {
      fontSize: 40,
      alignSelf: 'flex-end',
      color: '#fff'
    },
    title: {
      color: '#2180EF',
      fontSize: 50,
      textAlign: 'center',
      fontWeight: 'bold',
      marginHorizontal: 70
    },
    description: {
      fontSize: 20,
      justifyContent: 'center',
      marginBottom: 150,
      marginHorizontal: 40,
      textAlign: 'center'
    },
    splash_image: {
      width: 330,
      height: 380,
    },
    touchable: {
      borderWidth: 1,
      borderColor: '#2180EF',
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      backgroundColor: '#2180EF',
      borderRadius: 50
    },
    skip: {
      fontSize: 30,
      alignSelf: 'flex-end',
      marginRight: 20
    },
    button: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'white'
    }
});