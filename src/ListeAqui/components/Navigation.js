import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from '../pages/Splash';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import CadastrePage from '../pages/CadastrePage';
import TopBar from '../components/TopBar';
import MenuGlobal from '../components/MenuGlobal';
import ProfilePage from '../pages/ProfilePage';
import CadastroLista from '../pages/CadastroLista';
import CadastroItem from '../pages/CadastroItem';
import ItemsListaPage from '../pages/ItemsListaPage';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Cadastre" component={CadastrePage} />
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="TopBar" component={TopBar} />
      <Stack.Screen name="MenuGlobal" component={MenuGlobal} />
      <Stack.Screen name="CadastroLista" component={CadastroLista} />
      <Stack.Screen name="CadastroItem" component={CadastroItem} />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="ItemsLista" component={ItemsListaPage}/>
      
    </Stack.Navigator>
  );
}

export default Navigation;