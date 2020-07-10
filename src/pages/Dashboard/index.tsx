import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/logo.png';

const Dashboard: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <TextInput
          style={styles.inputRepository}
          placeholder="Digite o nome do repositório"
        />
        <TouchableOpacity style={styles.buttonPesquisar}>
          <Text style={styles.buttonTitle}>Pesquisar</Text>
        </TouchableOpacity>
        <View style={styles.cardRepository}>
          <Image
            style={styles.imageRepository}
            source={{
              uri:
                'https://avatars2.githubusercontent.com/u/33940202?s=460&u=5af5f22d17416b6dd503e9e38163263984e55903&v=4',
            }}
          />
          <View style={styles.cardTexts}>
            <Text style={styles.cardTitle}>
              franciscojunior10/github-explorer
            </Text>
            <Text style={styles.cardSubTitle}>Descrição do repo</Text>
          </View>
          <Icon style={styles.cardIcon} name="chevron-right" size={30} />
        </View>
      </View>
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
    marginTop: 100,
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
  cardIcon: {
    color: '#A8A8B3',
    marginLeft: 20,
  },
});

export default Dashboard;
