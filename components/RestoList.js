import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function RestoList({ navigation }) {
    const [search, setSearch] = useState('');
    const [filteredResto, setFilteredResto] = useState([]);
    const [restos, setRestos] = useState([]);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();

      fetch("https://my-json-server.typicode.com/blacky-yg/frontend-dev-hiring-test/restos")
        .then((response) => response.json())
        .then((responseJson) => {
          setFilteredResto(responseJson);
          setRestos(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    let text = 'Waiting..';

    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }

    const searchFilterFunction = (text) => {
      if (text) {
        const newData = restos.filter(function (item) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        setFilteredResto(newData);
        setSearch(text);
      } else {
        setFilteredResto(restos);
        setSearch(text);
      }
    };

    const RestoView = ({ item }) => {
      return (
        <Text style={styles.restoStyle} onPress={() => getResto(item)}>
        {item.id}
        {'.'}
        {item.name.toUpperCase()}
        </Text>
      );
    };

    const RestoSeparatorView = () => {
      return (
        <View
          style={{
            height: 0.5,
            width: '100%',
            backgroundColor: '#C8C8C8',
          }}
        />
      );
    };

    const getResto = (resto) => {
        alert('Resto : ' + resto.id + ' Name : ' + resto.name);
    };

    return (
      <View style={styles.container}>
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Search Resto here..."
          value={search}
        />
        <MapView style={styles.map}
          initialRegion={{
            latitude: 6.3609772,
            longitude: 2.4344471,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
        <FlatList
          data={filteredResto}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={RestoSeparatorView}
          renderItem={RestoView}
        />
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  restoStyle: {
    padding: 10,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 400,
  },
});