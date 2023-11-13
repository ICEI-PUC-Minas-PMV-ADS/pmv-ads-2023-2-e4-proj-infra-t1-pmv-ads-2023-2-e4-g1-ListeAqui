import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserProvider } from './components/UserContext';
import NavigationContainer from './components/NavigationContainer';
import Navigation from './components/Navigation';
import theme from './components/DefaultTheme';

export default function App() {

  return (
    <UserProvider>
      <NavigationContainer>
        <SafeAreaProvider>
            <PaperProvider theme={theme}>
              <Navigation></Navigation>
            </PaperProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </UserProvider>
  );
}
