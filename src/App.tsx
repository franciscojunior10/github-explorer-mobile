import React from 'react';

import {View, Text, StatusBar, StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F0F5"/>
      <View style={styles.container}>
        <Text>hello world!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F5',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App;
