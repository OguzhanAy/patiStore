import React from 'react';
import {Text, View, TextInput, StyleSheet, FlatList} from 'react-native';
import store_data from './store_data.json';
import StoreCards from './components/StoreCards';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>PATIKASTORE</Text>
      <TextInput style={styles.search} placeholder="Ara..." />
      <FlatList
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={item => item.id.toString()}
        data={store_data}
        renderItem={({item}) => <StoreCards store={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    justifyContent: 'space-around',
  },
  header_text: {
    margin: 10,
    fontSize: 40,
    color: '#800080',
    fontWeight: 'bold',
  },
  search: {
    borderRadius: 10,
    margin: 10,
    backgroundColor: '#eceff1',
  },
});

export default App;
