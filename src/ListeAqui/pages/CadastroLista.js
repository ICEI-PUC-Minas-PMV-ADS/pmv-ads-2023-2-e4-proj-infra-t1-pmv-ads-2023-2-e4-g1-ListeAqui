import React, { useState, useRef } from 'react';
import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import theme from '../components/DefaultTheme';
import TopBar from '../components/TopBar';
import Toast, { DURATION } from 'react-native-easy-toast';
import { useUser } from '../components/UserContext';

const CadastroLista = ({ navigation }) => {
  const toastRef = useRef();
  const [nomeDaLista, setNomeDaLista] = useState('');
  const [mercado, setMercado] = useState('');
  const [dataDaLista, setDataDaLista] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { user } = useUser();

  const showToast = (message) => {
    toastRef.current.show(message, DURATION.LENGTH_LONG);
  };

  const cadastrarLista = async () => {
    if (!nomeDaLista || !mercado) {
      showToast('Preencha todos os campos');
      return;
    }

    try {
      const endpoint = 'http://listeaqui-001-site1.btempurl.com/api/Listas';

      const response = await axios.post(endpoint, {
        nomeDaLista,
        mercado,
        dataDaLista: dataDaLista.toISOString(),
        itens: [],
        clienteId: user.userId,
      });

      if (response.status === 200 || response.status === 201) {
        showToast('Lista cadastrada com sucesso!');
        setTimeout(() => {
          navigation.navigate('Home');
        }, 1800);
      }
    } catch (error) {
      showToast('Erro ao cadastrar lista. Tente novamente.');
      console.error(error);
    }
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dataDaLista;
    setShowDatePicker(Platform.OS === 'ios');
    setDataDaLista(currentDate);
  };

    const Voltar = async () => {
        setTimeout(() => {
        navigation.navigate('HomePage');
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
          <Headline style={styles.title}> Cadastre uma Lista </Headline>

          <TextInput
            mode="outlined"
            label="Nome da Lista"
            value={nomeDaLista}
            onChangeText={(text) => setNomeDaLista(text)}
            theme={theme}
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="Mercado"
            value={mercado}
            onChangeText={(text) => setMercado(text)}
            theme={theme}
            style={styles.input}
          />

          <Button onPress={() => setShowDatePicker(true)} theme={theme}>
            Selecionar Data e Hora
          </Button>
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dataDaLista}
              mode="datetime"
              is24Hour={true}
              display="default"
              onChange={onChangeDate}
            />
          )}

          <View style={styles.btnCadastrarOrientacao}>
            <Button
              mode="contained"
              onPress={cadastrarLista}
              contentStyle={styles.button}
              labelStyle={styles.buttonLabel}
              theme={theme}
            >
              Cadastrar Lista
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

export default CadastroLista;
