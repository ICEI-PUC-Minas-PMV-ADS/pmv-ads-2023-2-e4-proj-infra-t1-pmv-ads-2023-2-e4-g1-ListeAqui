import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import theme from '../components/DefaultTheme';

function Meta({ title, description, onEditPress, onCompletePress}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon
          name="edit"
          type="font-awesome"
          color={theme.colors.tercyary}
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
    height: '100%',
    flex: 1,
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

export default Meta;
