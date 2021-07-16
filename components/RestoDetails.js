import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RestoDetails({ item }) {

    const getResto = (resto) => {
      alert('Resto : ' + resto.id + ' Name : ' + resto.name);
    };

    return (
      <View style={styles.resto} onPress={() => getResto(item)}>

        <TouchableOpacity onPress={() => getResto(item)}>

          <Image
            style={styles.tinyLogo}
            source={{
                uri: item.image
            }}
          />

        </TouchableOpacity>

        <Text style={styles.restoStyle} onPress={() => getResto(item)}>
          {item.name.toUpperCase()} |
          {item.location}
        </Text>

      </View>
    );
};

const styles = StyleSheet.create({
  resto: {
    flexDirection: 'row',
    padding: 5
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  restoStyle: {
    padding: 10,
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 7,
    textAlign: 'center'
  }
});