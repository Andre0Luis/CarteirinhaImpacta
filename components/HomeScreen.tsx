import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Menu from './Menu';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao App da Faculdade</Text>
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
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
