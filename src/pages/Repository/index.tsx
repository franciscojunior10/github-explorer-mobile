import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Repository;

  useEffect(() => {
    api.get(`repos/${routeParams.full_name}`).then((response) => {
      setRepository(response.data);
    });
    api.get(`repos/${routeParams.full_name}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, [routeParams.full_name]);

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleIssue(html_url: string) {
    navigation.navigate('WebViewIssue', {
      html_url,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={handleNavigateBack}
        style={styles.buttonReturn}>
        <Icon name="chevron-left" size={20} color="#A8A8B3" />
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
      <Image
        style={styles.imageLogo}
        source={{
          uri: `${repository?.owner.avatar_url}`,
        }}
      />
      <Text style={styles.repositoryTitle}>{repository?.full_name}</Text>
      <Text style={styles.repositorySubTitle}>{repository?.description}</Text>

      <View style={styles.cardInfo}>
        <View style={styles.cardInfoText}>
          <Text style={styles.cardTitle}>{repository?.stargazers_count}</Text>
          <Text style={styles.cardSubTitle}>Stars</Text>
        </View>
        <View style={styles.cardInfoText}>
          <Text style={styles.cardTitle}>{repository?.forks_count}</Text>
          <Text style={styles.cardSubTitle}>Forks</Text>
        </View>
        <View style={styles.cardInfoText}>
          <Text style={styles.cardTitle}>{repository?.open_issues_count}</Text>
          <Text style={styles.cardSubTitle}>Issues abertas</Text>
        </View>
      </View>
      <FlatList
        data={issues}
        keyExtractor={(issue) => issue.title}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.1}
        renderItem={({item: issue}) => (
          <TouchableOpacity
            style={styles.cardRepository}
            onPress={() => handleIssue(issue.html_url)}>
            <View style={styles.cardTexts}>
              <Text style={styles.cardTitleRepository}>{issue.title}</Text>
              <Text style={styles.cardSubTitleRepository}>
                {issue.user.login}
              </Text>
            </View>
            <Icon
              style={styles.cardIcon}
              name="chevron-right"
              size={20}
              color="#A8A8B3"
            />
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
  buttonReturn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -330,
  },
  buttonText: {
    color: '#A8A8B3',
  },
  imageLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 30,
  },
  repositoryTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#3A3A3A',
  },
  repositorySubTitle: {
    fontSize: 15,
    color: '#A8A8B3',
  },
  cardInfo: {
    flexDirection: 'row',
  },
  cardInfoText: {
    padding: 20,
    alignContent: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#3A3A3A',
  },
  cardSubTitle: {
    fontSize: 15,
    color: '#A8A8B3',
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
  cardTexts: {
    paddingLeft: 10,
  },
  cardTitleRepository: {
    fontWeight: 'bold',
    color: '#3A3A3A',
  },
  cardSubTitleRepository: {
    color: '#A8A8B3',
  },
  cardIcon: {
    marginLeft: 230,
  },
});

export default Repository;
