import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Menu from './Menu';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo a Faculdade</Text>
      <Image
            source={require('../assets/logo-impacta.jpeg')}
            style={[styles.image, { width: 300, height: 200}]}
          />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Carteirinha')}
      >
        <Text style={styles.buttonText}>Carteirinha Digital</Text>
      </TouchableOpacity>
      <Menu navigation={navigation} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3f4f6',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'red',
        padding: 25,
        width: '90%',
        borderRadius: 8,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'contain',
    }
});
