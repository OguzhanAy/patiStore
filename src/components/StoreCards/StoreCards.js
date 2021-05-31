import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './StoreCards.style';

const StoreCards = ({store}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: store.imgURL}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{store.title}</Text>
        <Text style={styles.price}>{store.price}</Text>
        <Text style={styles.stock}>{store.inStock ? '' : 'STOKTA YOK'}</Text>
      </View>
    </View>
  );
};

export default StoreCards;
