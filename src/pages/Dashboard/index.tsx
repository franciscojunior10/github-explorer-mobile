import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';

import api from '../../services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/logo.png';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const navigation = useNavigation();

  async function handleAddRepo() {
    const response = await api.get<Repository>(`repos/${inputText}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);

    setInputText('');
  }

  function handleNavigateToRepository() {
    navigation.navigate('Repository');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <TextInput
        value={inputText}
        style={styles.inputRepository}
        placeholder="Digite o nome do repositório"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setInputText}
      />
      <TouchableOpacity onPress={handleAddRepo} style={styles.buttonPesquisar}>
        <Text style={styles.buttonTitle}>Pesquisar</Text>
      </TouchableOpacity>

      <FlatList
        data={repositories}
        keyExtractor={(repository) => repository.full_name}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        renderItem={({item: repository}) => (
          <TouchableOpacity
            style={styles.cardRepository}
            onPress={handleNavigateToRepository}>
            <Image
              style={styles.imageRepository}
              source={{
                uri: `${repository.owner.avatar_url}`,
              }}
            />
            <View style={styles.cardTexts}>
              <Text style={styles.cardTitle}>{repository.full_name}</Text>
              <Text style={styles.cardSubTitle}>{repository.description}</Text>
            </View>
            <Icon name="chevron-right" size={20} color="#A8A8B3" />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 60,
  },
  inputRepository: {
    backgroundColor: '#FFFF',
    borderRadius: 5,
    width: 340,
    height: 67,
    paddingLeft: 10,
    marginTop: 130,
  },
  buttonPesquisar: {
    backgroundColor: '#04D361',
    borderRadius: 5,
    width: 340,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 23,
  },
  buttonTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFF',
  },
  cardRepository: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 340,
    height: 70,
    borderRadius: 5,
    backgroundColor: '#FFFF',
    paddingLeft: 5,
    marginTop: 20,
  },
  imageRepository: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  cardTexts: {
    paddingLeft: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#3A3A3A',
  },
  cardSubTitle: {
    color: '#A8A8B3',
  },
});

export default Dashboard;
