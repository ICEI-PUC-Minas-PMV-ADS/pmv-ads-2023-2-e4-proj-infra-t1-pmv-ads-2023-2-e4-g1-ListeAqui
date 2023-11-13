import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../components/DefaultTheme';

function Lista({ listId, nomeDaLista, mercado, dataDaLista, clienteId }) {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={toggleDetails}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{nomeDaLista}</Text>
          {showDetails && (
            <View style={styles.detailsContainer}>
              <Text style={styles.description}>ListaId: {listId}</Text>
              <Text style={styles.description}>Mercado: {mercado}</Text>
              <Text style={styles.description}>Data: {dataDaLista}</Text>
              <Text style={styles.description}>ClienteId: {clienteId}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 4,
    backgroundColor: '#A8A8F4',
    borderRadius: 30,
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
  },
  description: {
    fontSize: 14,
    color: '#fff',
  },
});

export default Lista;
