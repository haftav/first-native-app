import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}></View>
        <View style={styles.container}>
          <Text style={styles.text}>I love react native</Text>
        </View>
        <View style={styles.menubar}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'red'
  },
  container: {
    flex: 7,
    backgroundColor: 'lightblue',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 30
  },
  menubar: {
  flex: 1,
  backgroundColor: 'green'
  }
});
