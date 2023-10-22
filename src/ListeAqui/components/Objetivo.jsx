import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// import { Icon } from 'react-native-elements';
import ContPorcentagem from './ContPorcentagem';
import Meta from '../components/Meta';
// import { db, auth } from '../DB/firebase'; // Assuming you have imported the Firestore instance as 'db'
import theme from '../components/DefaultTheme';

const fetchMetasByObjetivoId = async (objetivoId, setMetaList) => {
  try {
    const q = query(collection(db, 'meta'),
    where('objetivoId', '==', objetivoId),
    where('userId', '==', auth.currentUser.uid) 
    );
    const querySnapshot = await getDocs(q);
    const metasArray = querySnapshot.docs
      .map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      .sort((a, b) => a.id.localeCompare(b.id));

    setMetaList(metasArray);
  } catch (error) {
    console.log('Error fetching metas:', error);
  }
};

function Objetivo({objetivoId, title, description, percentage, onEditPress, onCompletePress, progressSize = 50, navigation }) {
  const [showGoals, setShowGoals] = useState(false);
  const [metaList, setMetaList] = useState([]);
  const [flatListKey, setFlatListKey] = useState('');

  useEffect(() => {
    setShowGoals(true); 
    if (objetivoId) {
      fetchMetasByObjetivoId(objetivoId, setMetaList);
      setShowGoals(false); 
    } else {
      setMetaList([]); 
    }
    setFlatListKey(`${objetivoId}-${Date.now().toString()}`);
  }, [objetivoId]);

  const handlePress = (objetivoId) => {
    setShowGoals(prevState => !prevState); 
    if (!showGoals) {
      if (objetivoId && objetivoId.id) {
        fetchMetasByObjetivoId(objetivoId.id, setMetaList);
      } else {
        console.log('Objetivo ID inválido');
      }
    } else {
      setMetaList([]); 
    }
    setFlatListKey(`${objetivoId.id}-${Date.now().toString()}`);
  };

  const renderItem = ({ item }) => (
    <Meta
      userId={item.userId}
      title={item.title} 
      description={item.description} 
      completed={item.completed} 
      onEditPress={() => console.log('Editar objetivo')} 
      onCompletePress={() => console.log('Concluir objetivo')}
    />
  );

  return (
    <View>
       <TouchableOpacity style={styles.container} onPress={() => handlePress({ id: objetivoId })}>
       <View style={styles.contentContainer}>
        <View style={{ width: progressSize, height: progressSize }}>
          <ContPorcentagem percentage={percentage || 0} size={progressSize} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name="edit"
            type="font-awesome"
            color="#fff"
            onPress={onEditPress}
            containerStyle={{ marginRight: 10 }}
          />
          <Icon
            name="check"
            type="font-awesome"
            color="#fff"
            onPress={onCompletePress}
          />
        </View>
      </View>
      </TouchableOpacity>

      {showGoals && metaList.length > 0 && (
        <View style={styles.metaListContainer}>
        <FlatList
          style={styles.tasklist}
          data={metaList}
          theme={theme}
          renderItem={renderItem}
          keyExtractor={item => (item.id ? item.id.toString() : '')}
        />
        </View>
      )}
    </View>  
  );
}

const styles = StyleSheet.create({
  metaListContainer: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#A8A8F4',
    padding: 10,
    borderRadius: 30,
    marginVertical: 4,
  },
  contentContainer: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  tasklist: {
    flex: 1,
    marginTop: 10,
    width: '80%',
  },
});

export default Objetivo;
