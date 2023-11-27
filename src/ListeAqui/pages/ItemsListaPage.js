import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import TopBar from '../components/TopBar';
import MenuGlobal from '../components/MenuGlobal';
import Item from '../components/Item';
import theme from '../components/DefaultTheme';
import { useFocusEffect } from '@react-navigation/native';

const ItemsLista = ({ navigation, route }) => {
  const [itemsLista, setItemsLista] = useState([]);
  const toastRef = useRef();
  const { listId } = route.params;

  const showToast = (message) => {
    toastRef.current.show({ type: 'error', text1: message });
  };

  const fetchItemsLista = async () => {
    try {
      const response = await axios.get(`http://listeaqui-001-site1.btempurl.com/api/Itens/ItensDaLista/${listId}`);
      setItemsLista(response.data);
      if (!response.data.length) {
        showToast('Carregando Items da Lista...');
      }
    } catch (error) {
      console.error('Erro ao buscar items da lista:', error);
      showToast('Erro ao carregar items da lista...');
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchItemsLista();
    }, [listId])
  );

  const renderItem = ({ item }) => (
    <Item
      itemId={item.id}
      descricao={item.descricao}
      data={item.data}
      valor={item.valor}
      quantidade={item.quantidade}
      listaId={item.listId}
      navigation={navigation}
    />
  );

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <View style={styles.containerContent}>
        <Text style={styles.subtitle}>Items da Listas${listId}</Text>
        {itemsLista.length > 0 && (
          <FlatList
            style={styles.tasklist}
            data={itemsLista}
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

export default ItemsLista;