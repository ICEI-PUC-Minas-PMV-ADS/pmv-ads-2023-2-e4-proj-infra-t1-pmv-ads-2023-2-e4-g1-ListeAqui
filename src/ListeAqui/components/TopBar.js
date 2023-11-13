import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useUser } from '../components/UserContext';

const TopBar = ({ navigation }) => {
  const { user } = useUser();

  return (
    <View style={styles.containerTopBar}>
      <View style={styles.positionFoto}>
        <Avatar.Image
          style={styles.icon}
          size={40}
          source={require('../assets/avatar.png')}
        />
      </View>
      <View style={styles.positionUserName}>
        <Text style={styles.username}>Olá: {user ? user.nome : 'Visitante'}</Text>
      </View>
      <View style={styles.positionIcon}>
        <TouchableOpacity style={styles.leftIcon}>
          <Icon
            name="user-check"
            size={25}
            color="white"
            onPress={() => navigation.navigate('Profile')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTopBar: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 1,
    height: 800,
    maxHeight: '14%',
    width: '100%',
    backgroundColor: '#AF9AC9',
    zIndex: 1,
  },
  positionFoto: {
    marginTop: 35,
    marginLeft: 30,
  },
  positionUserName: {
    marginTop: 40,
    marginLeft: 20,
  },
  positionIcon: {
    position: 'absolute',
    right: 40,
    top: 35,
    marginTop: 31,
    marginLeft: 30,
  },
  username: {
    fontFamily: 'roboto',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffff',
    fontFamily: 'Roboto',
  },
});

export default TopBar;
