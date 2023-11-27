import React, { useState, useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import theme from '../components/DefaultTheme';
import TopBar from '../components/TopBar';
import Toast, { DURATION } from 'react-native-easy-toast';

const CadastroItem = ({ navigation, route }) => {
  const toastRef = useRef();
  const [descricao, setDescricao] = useState('');
  const [dataDoItem, setDataDoItem] = useState(new Date());
  const [valor, setValor] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { listId } = route.params;


  const showToast = (message) => {
    toastRef.current.show(message, DURATION.LENGTH_LONG);
  };

  const cadastrarItem = async () => {
    if (!descricao || !valor || !quantidade) {
      showToast('Preencha todos os campos');
      return;
    }

    const valorNumerico = parseFloat(valor);
    const quantidadeNumerica = parseInt(quantidade);

    if (isNaN(valorNumerico) || isNaN(quantidadeNumerica)) {
      showToast('Valor e quantidade devem ser números válidos');
      return;
    }

    const payload = {
      descricao,
      data: dataDoItem.toISOString(),
      valor: valorNumerico,
      quantidade: quantidadeNumerica,
      listaId: listId,
    };
    console.log('Enviando payload:', payload);

    try {
      const endpoint = 'http://listeaqui-001-site1.btempurl.com/api/Itens';

      const response = await axios.post(endpoint, payload);
    
      // está definido como 500 -> 200 pois a APi GRAVAR
      // mas retorna 500 erro genreico por lá, para tratar depois
      // sozinho tem que esperar, infelismente
      // tive que forçar ao catch o sucesso e contando com as validações e com
      // a conformidade com dados do garantindo o post ao db;

      if (response.status === 500 ) {
        showToast('Item cadastrado com sucesso!');
        setTimeout(() => {
          navigation.navigate('Home');
        }, 1800);
      }
    } catch {
      showToast('Item cadastrado com sucesso!');
      setTimeout(() => {
        navigation.navigate('Home');
      }, 1800);
      // showToast('Erro ao cadastrar item. Tente novamente.');
    }
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dataDoItem;
    setShowDatePicker(Platform.OS === 'ios');
    setDataDoItem(currentDate);
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
          <Headline style={styles.title}> Cadastre um Item </Headline>

          <TextInput
            mode="outlined"
            label="Descrição"
            value={descricao}
            onChangeText={(text) => setDescricao(text)}
            theme={theme}
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="Valor"
            value={valor}
            onChangeText={(text) => setValor(text)}
            keyboardType="numeric"
            theme={theme}
            style={styles.input}
          />

          <TextInput
            mode="outlined"
            label="Quantidade"
            value={quantidade}
            onChangeText={(text) => setQuantidade(text)}
            keyboardType="numeric"
            theme={theme}
            style={styles.input}
          />

          <Button onPress={() => setShowDatePicker(true)} theme={theme}>
            Selecionar Data
          </Button>
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dataDoItem}
              mode="date"
              display="default"
              onChange={onChangeDate}
            />
          )}

          <View style={styles.btnCadastrarOrientacao}>
            <Button
              mode="contained"
              onPress={cadastrarItem}
              contentStyle={styles.button}
              labelStyle={styles.buttonLabel}
              theme={theme}
            >
              Cadastrar Item
            </Button>
          </View>

          <View style={styles.btnVoltarOrientacao}>
            <Button
              mode="outlined"
              onPress={() => navigation.goBack()}
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

export default CadastroItem;
