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
        <Text style={styles.menuText}>Carteirinha Física</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('Carteirinha')}
      >
        <Text style={styles.menuText}>Cadastro</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('Carteirinha')}
      >
        <Text style={styles.menuText}>Minha Foto</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.navigate('Carteirinha')}
      >
        <Text style={styles.menuText}>Notificações</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    menuButton: {
        width: '45%',
        height: 50,
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        marginHorizontal: 1,
        backgroundColor: '#6200ee',
    },
    menuText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
