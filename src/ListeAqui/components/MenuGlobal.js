import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Modal, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MenuGlobal = ({ navigation }) => {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const handleLogout = async () => {
    try {
      navigation.navigate('Login');
    } catch (error) {
      console.log('Error occurred while logging out:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="shopping-bag" size={25} color="white" onPress={() => navigation.navigate('Home')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="shopping-cart" size={25} color="white" onPress={() => navigation.navigate('CadastroLista')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => setLogoutModalVisible(true)}>
          <Icon name="sign-in-alt" size={25} color="white" />
        </TouchableOpacity>
      </View>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 0,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginRight: 20,
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
