import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { db, auth } from '../DB/firebase';
import { collection, getDocs } from 'firebase/firestore';
import TopBar from '../components/TopBar';
import MenuGlobal from '../components/MenuGlobal';
import Objetivo from '../components/Objetivo';
import theme from '../components/DefaultTheme';

const fetchTasks = async (setObjetivo) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'objetivo'));
    const tasksArray = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    const filteredTasksArray = tasksArray.filter(objetivo => objetivo.title && objetivo.description && objetivo.userId === auth.currentUser.uid);
    setObjetivo(filteredTasksArray);
  } catch (error) {
    console.log('Error fetching tasks:', error);
  }
};

const HomePage = ({ navigation }) => {
  const [objetivo, setObjetivo] = useState([]);
  const [editingObjetivo, setEditingObjetivo] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');


  useEffect(() => {
    fetchTasks(setObjetivo);
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchTasks(setObjetivo);
    });

    return unsubscribe;
  }, [navigation]);


  const renderItem = ({ item }) => (
    <Objetivo 
      objetivoId={item.id}
      userId={item.userId}
      title={item.title} 
      description={item.description} 
      percentage={item.percentage} 
      completed={item.completed} 
      onEditPress={() => {
        setEditingObjetivo(item);
        navigation.navigate('CadastreObjetivo', {editingObjetivo : item});
      }} 
      onCompletePress={() => console.log('Concluir objetivo')}
    />
  );

  return (
    <View style={styles.container}>
      <TopBar navigation={navigation} />
      <View style={styles.containerContent}>
        <Text style={styles.subtitle}>Objetivos</Text>
        {objetivo.length > 0 && (
        <FlatList
          style={styles.tasklist}
          data={objetivo.filter(item => item.userId === auth.currentUser.uid)}
          renderItem={renderItem}
          keyExtractor={item => (item.id ? item.id.toString() : '')} 
        />
        )}
      </View>
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

export default HomePage;
