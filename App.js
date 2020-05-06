import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';


export default class App extends React.Component{
  render() {
  return (
    <View style={styles.container}>
      <Statusbar barStyle/>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
