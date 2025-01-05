import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import Menu from './Menu';

const CarteirinhaScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Swiper showsButtons loop={false}>
        <View style={styles.card}>
          <Image
            source={require('../assets/Bruna_1.png')}
            
            style={[styles.image, { width: 450, height: 350, transform: [{ rotate: '-90deg' }] }]}
          />
        </View>
        <View style={styles.card}>
          <Image
            source={require('../assets/Bruna_2.png')}
            style={[styles.image, { width: 500, height: 400}]}
          />
        </View>
      </Swiper>
    </View>
  );
};

export default CarteirinhaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
});
