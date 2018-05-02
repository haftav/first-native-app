import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Text style={styles.text}>I love react native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0
  },
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    marginTop: 60
  }
});
