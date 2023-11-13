import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import theme from './DefaultTheme';

function Item({ descricao, data, valor, quantidade, onEditPress, onCompletePress }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{descricao}</Text>
        <Text style={styles.description}>Data: {data}</Text>
        <Text style={styles.description}>Valor: R$ {valor.toFixed(2)}</Text>
        <Text style={styles.description}>Quantidade: {quantidade}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name="edit"
          type="font-awesome"
          color={theme.colors.tertiary}
          onPress={onEditPress}
          containerStyle={{ marginRight: 10 }}
        />
        <Icon
          name="check"
          type="font-awesome"
          color={theme.colors.primary}
          onPress={onCompletePress}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#9B72F5',
    padding: 10,
    borderRadius: 30,
    marginVertical: 4,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Item;
