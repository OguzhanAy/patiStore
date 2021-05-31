import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#eceff1',
  },

  image: {
    margin: 15,
    width: Dimensions.get('window').width / 2.5,
    height: Dimensions.get('window').height / 5,
  },
  inner_container: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 15,
    marginTop: 3,
    color: 'gray',
    fontWeight: 'bold',
  },
  stock: {fontWeight: 'bold', color: 'red'},
});
