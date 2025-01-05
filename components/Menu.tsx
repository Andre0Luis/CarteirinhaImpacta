import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type MenuProps = {
  navigation: any;
};

const Menu = ({ navigation }: MenuProps) => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('Início')}
      >
        <Text style={styles.menuText}>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('Carteirinha')}
      >
        <Text style={styles.menuText}>Carteirinha</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#6200ee',
  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
