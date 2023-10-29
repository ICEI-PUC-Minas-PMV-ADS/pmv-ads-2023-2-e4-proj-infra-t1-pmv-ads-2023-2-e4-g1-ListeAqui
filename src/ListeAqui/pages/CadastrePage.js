import React, { useState, useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import theme from '../components/DefaultTheme';
import TopBar from '../components/TopBar';
import Toast, { DURATION } from 'react-native-easy-toast';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore';

const Cadastre = ({ navigation }) => {
  const toastRef = useRef();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const showToast = () => {
    toastRef.current.show('This is a toast message', DURATION.LENGTH_LONG);
  };

  const CadastrarUsuario = async () => {
    try {
      const auth = getAuth(); 
      const firestore = getFirestore(); 

      const { user } = await createUserWithEmailAndPassword(auth, email, senha);

      await updateProfile(user, {
        displayName: `${nome} ${sobrenome}`,
      });

      await setDoc(doc(firestore, 'usuarios', user.uid), {
        nome,
        sobrenome,
        email,
        userId: user.uid,
      });

      toastRef.current.show('Usuário cadastrado com sucesso!', DURATION.LENGTH_LONG);
      setTimeout(() => {
        navigation.navigate('Login');
      }, 1800);
    } catch (error) {
      toastRef.current.show('Preencha o formulário para cadastro', DURATION.LENGTH_LONG);
    }
  };

  const Voltar = async () => {
    setTimeout(() => {
    navigation.navigate('Login');
  }, 800);
};

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <TopBar navigation={navigation} />
      <View style={styles.container}>
      <Toast
        ref={toastRef}
        style={styles.toastContainer}
        textStyle={styles.toastText}
        opacity={0.7}
      />
        <View style={styles.form}>
          <Headline style={styles.title}> Cadastre-se </Headline>

          <TextInput
            mode="outlined"
            label="Nome"
            value={nome}
            onChangeText={(text) => setNome(text)}
            theme={theme}
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="Sobrenome"
            value={sobrenome}
            onChangeText={(text) => setSobrenome(text)}
            theme={theme}
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="E-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
            theme={theme}
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="Senha"
            secureTextEntry
            value={senha}
            onChangeText={(text) => setSenha(text)}
            right={<TextInput.Icon name="lock" />}
            theme={theme}
            style={styles.input}
          />

          <View style={styles.btnCadastrarOrientacao}>
            <Button
              mode="contained"
              onPress={Voltar}
              contentStyle={styles.button}
              labelStyle={styles.buttonLabel}
              theme={theme}
            >
              Cadastrar
            </Button>
          </View>

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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 192.5,
    paddingBottom:192.5,
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
  form: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    marginTop: 25,
    borderRadius: 30,
  },
  btnCadastrarOrientacao: {
    marginTop: 50,
  },
  btnVoltarOrientacao: {
    marginTop: 10,
  },
  toastContainer: {
    position: 'absolute',
    bottom: -85,
    left: 20,
    right: 20,
    backgroundColor: theme.colors.secondary,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  toastText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Cadastre;
