import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={styles.container}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />

        <View style={styles.menubar}>
          <View style={styles.menuItem}>
            <Icon name="cog" size={30} color="white" />
          </View>
          <View style={styles.menuItem}>
            <Icon name="globe" size={45} color="white" />
          </View>
          <View style={styles.menuItem}>
            <Icon name="user-circle" size={30} color="white" />
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'gray'
  },
  container: {
    flex: 7,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 30
  },
  menubar: {
    flex: 1,
    backgroundColor: 'navy',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  menuItem: {
    backgroundColor: '#0097A7',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
