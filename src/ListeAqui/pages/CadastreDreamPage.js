import React, { useState, useEffect, useRef } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, StyleSheet, FlatList } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput, Button, Headline } from 'react-native-paper';
import Icon from "react-native-vector-icons/FontAwesome5";
import theme from '../components/DefaultTheme';
import TopBar from '../components/TopBar';
import MenuGlobal from '../components/MenuGlobal';
import Meta from '../components/Meta';
import Toast, { DURATION } from 'react-native-easy-toast';

const CadastreObjetivo = ({ navigation}) => {
  const [Dojetivo, setDobjetivo] = useState('');
 

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
      <TopBar navigation={navigation} />
        <View style={styles.containerContent}>
          <Toast
          ref={toastRef}
          style={styles.toastContainer}
          textStyle={styles.toastText}
          opacity={0.7}
            />
          <View style={styles.form}>
            <Headline style={styles.title2}> Cadastro de Objetivos </Headline>

            <TextInput
              mode="outlined"
              label="Título Objetivo"
              value={Dojetivo}
              onChangeText={(text) => setDobjetivo(text)}
              theme={theme}
              style={styles.input}/>

            <TextInput
              mode="outlined"
              label="Descrição Objetivo"
              value={Ddescricao}
              onChangeText={(text) => setDdescricao(text)}
              theme={theme}
              style={styles.input}/>

            {!showObjetivoList ? (
              <View style={styles.btnCadastrarObjOrientacao}>
                <Button
                  mode="contained"
                  onPress={handleObjetivoPress}
                  contentStyle={botaoStyle}
                  labelStyle={styles.buttonLabel}
                  theme={theme}
                  disabled={isLoading}
                >
                  {botaoTexto}
                </Button>
              </View>
            ) : (
              <View style={styles.btnCadastrarObjOrientacao}>
                <Button
                  mode="contained"
                  onPress={() => navigation.navigate('Home')}
                  contentStyle={styles.button}
                  labelStyle={styles.buttonLabel}
                  theme={theme}
                  disabled={isLoading}
                >
                  Ver lista de objetivos
                </Button>
              </View>
            )}

            <View style={styles.container2}>
              <Headline style={styles.titleMeta}> Cadastrar Meta </Headline>
              <View style={styles.metaIconContainer}>
                <Icon
                  name="plus-circle"
                  onPress={toggleMetaCampos}
                  size={25}
                  color={theme.colors.secondary}/>
              </View>
            </View>

              <View style={styles.containerFlat}>
                <View style={styles.frame}>
                {showMetaCampos && (
                  <React.Fragment>
                    <TextInput
                      mode="outlined"
                      label="Título da Meta"
                      value={metaTitulo}
                      onChangeText={(text) => setMetaTitulo(text)}
                      theme={theme}
                      style={styles.input}/>

                    <TextInput
                      mode="outlined"
                      label="Descrição Meta"
                      value={metaDescricao}
                      onChangeText={(text) => setMetaDescricao(text)}
                      theme={theme}
                      style={styles.input}/>

                    {showAddButtonMeta && (
                    <View style={styles.btnAdicionarMeta}>
                    <Button
                      mode="contained"
                      onPress={() => adicionarMeta(objetivoIdRef.current)}
                      
                      contentStyle={styles.button}
                      labelStyle={styles.buttonLabel}
                      theme={theme}
                      disabled={isLoading}>
                      Adicionar Meta
                    </Button>
                    </View>
                    )}

                    {isEditingMeta && (
                    <View style={styles.btnAdicionarMeta}>
                    <Button
                      mode="contained"
                      onPress={() => metaEditado(objetivoIdRef.current)}
                      contentStyle={botaoStyle}
                      labelStyle={styles.buttonLabel}
                      theme={theme}
                      disabled={isLoading}>
                        Editar meta
                    </Button>
                    </View>
                    )}
                  </React.Fragment>
                )}
                  {metaList.filter(meta => meta.objetivoId === objetivoIdRef.current && meta.userId === auth.currentUser.uid).length > 0 && (
                    <FlatList
                      style={styles.tasklist}
                      data={metaList.filter(meta => meta.objetivoId === objetivoIdRef.current && meta.userId === auth.currentUser.uid)}
                      renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  )}
                </View>
              </View>
      </View>
        </View>
        <View style={styles.containerMenuGlobal}>
        <MenuGlobal navigation={navigation}/>
        </View>
     </KeyboardAwareScrollView>
    );
  };

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    paddingTop: 120,
    paddingBottom: 433,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    },
  containerContent: {
    flex: 1,
    width: '100%',
    paddingTop: 110,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    },
  container2: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 80,
    },
  title2: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    color: theme.colors.primary,
    paddingTop: 10,
    },
  button2: {
    backgroundColor: theme.colors.secondary,
    },
  buttonEdicao: {
    backgroundColor: theme.colors.tercyary,
    },
  buttonLabel2: {
    color: theme.colors.buttonText,
    },
  form: {
    width: '100%',
    },
  label: {
    fontSize: 16,
    marginBottom: 4,
    },
  input: {
    marginTop: 4,
    borderRadius: 30,
    },
  btnCadastrarObjOrientacao: {
    marginTop: 10,
    marginBottom: 10,
    },
  btnAdicionarMeta: {
    marginTop: 10,
    },
  metaIconContainer: {
    marginLeft: 1,
    paddingTop: 10,
    },
  titleMeta: {
    fontWeight: 'bold',
    fontSize: 20,
    color: theme.colors.secondary,
    marginRight: 1,
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
  containerFlat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    },
  frame: {
    width: 300,
    height: 400,
    borderWidth: 0,
    overflow: 'hidden',
    },
  containerMenuGlobal: {
    width: '100%',
    height: 53,
    },
  toastContainer: {
    position: 'absolute',
    bottom: -85,
    left: 20,
    right: 20,
    backgroundColor: theme.colors.secondary,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    },
  toastText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    },
    });
  
export default CadastreObjetivo;
