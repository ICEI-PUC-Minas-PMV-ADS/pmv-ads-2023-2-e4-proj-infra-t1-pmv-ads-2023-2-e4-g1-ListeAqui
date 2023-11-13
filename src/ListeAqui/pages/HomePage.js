import React, { useState, useRef, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import TopBar from '../components/TopBar';
import MenuGlobal from '../components/MenuGlobal';
import Lista from '../components/Lista';
import theme from '../components/DefaultTheme';
import { useUser } from '../components/UserContext';
import { useFocusEffect } from '@react-navigation/native';

const HomePage = ({ navigation }) => {
  const [listas, setListas] = useState([]);
  const { user } = useUser();
  const toastRef = useRef();
  
  const showToast = (message) => {
    toastRef.current.show({ type: 'error', text1: message });
  };

  const fetchListas = async () => {
    if (user && user.userId) {
      try {
        const response = await axios.get(`http://listeaqui-001-site1.btempurl.com/api/Listas/ListasCliente/${user.userId}`);
        setListas(response.data);
        if (!response.data.length) {
          showToast('Carregando Listas...');
        }
      } catch (error) {
        console.error('Erro ao buscar listas:', error);
        showToast('Erro ao carregar Listas...');
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchListas();
    }, [user])
  );

  const renderItem = ({ item }) => (
    <Lista
      listId={item.id}
      nomeDaLista={item.nomeDaLista}
      mercado={item.mercado}
      dataDaLista={item.dataDaLista}
      itens={item.itens}
      clienteId={user.id}
    />
  );

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <View style={styles.containerContent}>
        <Text style={styles.subtitle}>Listas de Compras</Text>
        {listas.length > 0 && (
          <FlatList
            style={styles.tasklist}
            data={listas}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            theme={theme}
          />
        )}
      </View>
      <Toast ref={toastRef} />
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
subtitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 5,
  color: '#5F5FC2',
  paddingTop: 10,
},
tasklist: {
  flex: 1,
  marginTop: 10,
  width: '100%',
},
task: {
  flex: 1,
  flexDirection: 'row',
  width: '100%',
  marginTop: 10,
  justifyContent: 'center',
  fontSize: 18,
  fontWeight: '500',
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
backButton: {
  alignSelf: "flex-start"
},
dream: {
  marginBottom: 10
}
});

export default HomePage;