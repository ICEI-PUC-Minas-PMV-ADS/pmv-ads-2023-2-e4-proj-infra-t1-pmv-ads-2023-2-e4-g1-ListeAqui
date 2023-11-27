import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Lista({ listId, nomeDaLista, mercado, dataDaLista, clienteId, navigation }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const VerItemsLista = () => {
    setTimeout(() => {
      navigation.navigate('ItemsLista', { listId: listId });
    }, 800);
  };

  const CadastroItem = () => {
    setTimeout(() => {
      // Passando listId como parâmetro para a tela CadastroLista
       navigation.navigate('CadastroItem', { listId: listId });
      // navigation.navigate('CadastroLista');
    }, 800);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={toggleDetails}>
        <View style={styles.contentContainer}>
          <View style={styles.leftContainer}>
           <View style={styles.titleContainer}>
            <Text style={styles.title}>{nomeDaLista}</Text>
              <TouchableOpacity style={styles.iconButton}>
                  <Icon
                    name="plus"
                    size={25}
                    color="white"
                    onPress={CadastroItem}
                  />
              </TouchableOpacity>
            </View>
            {showDetails && (
              <View style={styles.detailsContainer}>
                <Text style={styles.description}>ListaId: {listId}</Text>
                <Text style={styles.description}>Mercado: {mercado}</Text>
                <Text style={styles.description}>Data: {dataDaLista}</Text>
                <Text style={styles.description}>ClienteId: {clienteId}</Text>
              </View>
            )}
          </View>
          <TouchableOpacity style={styles.iconButton}>
              <Icon
                name="tasks"
                size={25}
                color="white"
                onPress={VerItemsLista}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              name="edit"
              type="font-awesome"
              size={25}
              color="white"
              onPress={VerItemsLista}/>
            </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 4,
    backgroundColor: '#A8A8F4',
    borderRadius: 30,
  },
  positionIcon: {
    position: 'absolute',
    right: 40,
    top: 35,
    marginTop: 31,
    marginLeft: 30,
  },
  touchable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5F5FC2',
  },
  description: {
    fontSize: 14,
    color: '#fff',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  leftContainer: {
    flex: 1,
    paddingRight: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    paddingRigth: 13,
    paddingLeft: 13,
  },
});

export default Lista;
