import React, { useState, useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import axios from 'axios';
import theme from '../components/DefaultTheme';
import TopBar from '../components/TopBar';
import Toast, { DURATION } from 'react-native-easy-toast';

const Cadastre = ({ navigation }) => {
  const toastRef = useRef();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState(''); // Estado para sobrenome
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const showToast = (message) => {
    toastRef.current.show(message, DURATION.LENGTH_LONG);
  };

  const CadastrarUsuario = async () => {
    if (!nome || !sobrenome || !email || !senha) {
      showToast('Preencha todos os campos');
      return;
    }

    try {
      const nomeCompleto = `${nome} ${sobrenome}`; // Concatena o nome e sobrenome
      const endpoint = 'http://listeaqui-001-site1.btempurl.com/api/clientes';

      const response = await axios.post(endpoint, {
        id: 0, // Id é 0 para novos registros, assumindo que a API gera um novo ID
        nome: nomeCompleto, // Utiliza o nome completo
        password: senha,
        email: email,
      });

      if (response.status === 200 || response.status === 201) {
        showToast('Usuário cadastrado com sucesso!');
        setTimeout(() => {
          navigation.navigate('Login');
        }, 1800);
      }
    } catch (error) {
      showToast('Erro ao cadastrar usuário. Tente novamente.');
      console.error(error);
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
              onPress={CadastrarUsuario}
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
