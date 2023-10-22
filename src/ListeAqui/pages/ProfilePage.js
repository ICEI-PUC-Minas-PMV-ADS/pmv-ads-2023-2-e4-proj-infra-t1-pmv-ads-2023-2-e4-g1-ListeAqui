import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import {Image} from 'react-native';
import theme from '../components/DefaultTheme';
import TopBar from '../components/TopBar';
import MenuGlobal from '../components/MenuGlobal';

const Profile = ({navigation}) => {

  const myImage = require('../assets/avatar.png');

  const Voltar = async () => {
      setTimeout(() => {
      navigation.navigate('Home');
    }, 800);
  };

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <View style={styles.containerContent}>
        <Image
          source={myImage}
          style={styles.profilePicture}
        />
        <Text style={styles.profileName}>Nome do Usuário</Text>

        <View style={styles.btnVoltarOrientacao}>
          <Button
            mode="outlined"
            onPress={Voltar}
            contentStyle={styles.button}
            labelStyle={styles.buttonLabel}
            theme={theme}
          >
            Voltar
          </Button>
        </View>
      </View>
      <MenuGlobal navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
  },
  containerContent: {
    flex: 1,
    width: '100%',
    paddingTop: 0,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: theme.colors.primary,
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  btnVoltarOrientacao: {
    marginTop: 10,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 20,
  },
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 120,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;