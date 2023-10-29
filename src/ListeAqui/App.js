import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import NavigationContainer from './components/NavigationContainer';
import Navigation from './components/Navigation';
import theme from './components/DefaultTheme';

export default function App() {

  return (
    <NavigationContainer>
    <SafeAreaProvider>
     <PaperProvider theme={theme}>
      <Navigation></Navigation>
      </PaperProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});