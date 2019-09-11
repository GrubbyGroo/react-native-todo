import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor () {
    super()

    this.state = {
      todoInput: '',
      todos: [
        {id: 0, title: 'Take out the Trash', done: false },
        {id: 1, title: 'Cook Dinner', done: false}
      ]
    }
  }

  render () {
    const statusbar = (Platform.OS === 'ios') ? <View style={styles.statusbar}></View> : <View></View>

    return (
      <View style={styles.container}>
        {statusbar}

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusbar: {
    backgroundColor: "#FFCE00",
    height: 40
  }
});
