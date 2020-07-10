import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Repository: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
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
          uri:
            'https://avatars2.githubusercontent.com/u/33940202?s=460&u=5af5f22d17416b6dd503e9e38163263984e55903&v=4',
        }}
      />
      <Text style={styles.repositoryTitle}>
        franciscojunior10/github-explorer
      </Text>
      <Text style={styles.repositorySubTitle}>Descrição do repo</Text>

      <View style={styles.cardInfo}>
        <View style={styles.cardInfoText}>
          <Text style={styles.cardTitle}>1213</Text>
          <Text style={styles.cardSubTitle}>Stars</Text>
        </View>
        <View style={styles.cardInfoText}>
          <Text style={styles.cardTitle}>34</Text>
          <Text style={styles.cardSubTitle}>Forks</Text>
        </View>
        <View style={styles.cardInfoText}>
          <Text style={styles.cardTitle}>13</Text>
          <Text style={styles.cardSubTitle}>Issues abertas</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.cardRepository}>
        <View style={styles.cardTexts}>
          <Text style={styles.cardTitleRepository}>dfdfsdfs</Text>
          <Text style={styles.cardSubTitleRepository}>fdsfsdfsd</Text>
        </View>
        <Icon
          style={styles.cardIcon}
          name="chevron-right"
          size={20}
          color="#A8A8B3"
        />
      </TouchableOpacity>
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
