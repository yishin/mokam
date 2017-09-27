/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RNMokam, { keymap } from 'mokam';

const strr =  `
'atom-text-editor':
  'ctrl-shift-left': 'pane:move-item-left'
  'ctrl-shift-right': 'pane:move-item-right'
  'cmd-k cmd-j': 'window:focus-pane-on-left'
  'cmd-k cmd-k': 'window:focus-pane-on-right'
  'cmd-k cmd-u': 'window:focus-pane-above'
  'cmd-k cmd-n': 'window:focus-pane-below'
`;

export default class rnExample extends Component {
  render() {
    console.log(strr);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('rnExample', () => rnExample);
