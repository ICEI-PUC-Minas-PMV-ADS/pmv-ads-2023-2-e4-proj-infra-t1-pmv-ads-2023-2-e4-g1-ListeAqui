import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#AF9AC9',
    secondary: '#6CA19E',
    tercyary: '#FF1970',
    placeholder: '#AF9AC9',
    text: '#AF9AC9',
    background: '#fff',
    button: '#AF9AC9',
    color: '#AF9AC9',
    buttonText: '#fff',
    borderColor: '#AF9AC9',
  },
  roundness: 10,
  fonts: {
    regular: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Roboto',
      fontWeight: 'bold',
    },
    light: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Roboto',
      fontWeight: 'normal',
    },
  },
  input: {
    outlined: {
      backgroundColor: '#fff',
      borderColor: '#AF9AC9',
      placeholder: '#AF9AC9',
      borderRadius: 30,
      borderWidth: 2,
      color: '#AF9AC9',
      fontSize: 16,
      fontWeight: 'normal',
      padding: 12,
    },
  },
  button: {
    contained: {
      backgroundColor: '#AF9AC9',
      borderRadius: 30,
      color: '#AF9AC9',
    },
    outlined: {
      backgroundColor: '#fff',
      borderColor: '#AF9AC9',
      borderRadius: 30,
      borderWidth: 2,
      color: '#AF9AC9',
    },
    labelStyle: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontFamily: 'Roboto',
    },
  },
};

export default theme;
