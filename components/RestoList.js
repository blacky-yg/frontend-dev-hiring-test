import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

export default function RestoList({ navigation }) {
    const [search, setSearch] = useState('');
    const [filteredResto, setFilteredResto] = useState([]);
    const [restos, setRestos] = useState([]);

    useEffect(() => {
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
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <SearchBar
            round
            searchIcon={{ size: 24 }}
            onChangeText={(text) => searchFilterFunction(text)}
            onClear={(text) => searchFilterFunction('')}
            placeholder="Search Resto here..."
            value={search}
          />
          <FlatList
            data={filteredResto}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={RestoSeparatorView}
            renderItem={RestoView}
          />
        </View>
      </SafeAreaView>
    );
  };

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  restoStyle: {
    padding: 10,
  },
});