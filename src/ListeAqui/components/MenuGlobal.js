import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Platform, Modal, Text } from 'react-native';
import { auth } from '../DB/firebase';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MenuGlobal = ({ navigation }) => {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.navigate('Login');
    } catch (error) {
      console.log('Error occurred while logging out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftIcon}>
        <Icon name="tasks" size={25} color="white" onPress={() => navigation.navigate('Home')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.leftIcon}>
        <Icon name="shopping-bag" size={25} color="white" onPress={() => navigation.navigate('CadastreObjetivo')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.rightIcon} onPress={() => setLogoutModalVisible(true)}>
        <Icon name="sign-in-alt" size={25} color="white" />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Deseja fazer logout?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={handleLogout}>
                <Text style={styles.buttonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={() => setLogoutModalVisible(false)}>
                <Text style={styles.buttonText}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 75,
    width: '100%',
    backgroundColor: '#6CA19E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
  },
  leftIcon: {
    marginRight: 20,
  },
  rightIcon: {
    marginLeft: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#6CA19E'
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  modalButton: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 13,
    backgroundColor: '#6CA19E',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
  },
});

export default MenuGlobal;
