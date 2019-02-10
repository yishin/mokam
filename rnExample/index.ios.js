/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry, YellowBox, StyleSheet, Text, View,
} from 'react-native';
import RNMokam, { spaceVer, keymap, convertToJsonFromAndroid } from 'mokam';

const strr = `
'atom-text-editor':
  'ctrl-shift-left': 'pane:move-item-left'
  'ctrl-shift-right': 'pane:move-item-right'
  'cmd-k cmd-j': 'window:focus-pane-on-left'
  'cmd-k cmd-k': 'window:focus-pane-on-right'
  'cmd-k cmd-u': 'window:focus-pane-above'
  'cmd-k cmd-n': 'window:focus-pane-below'
`;

const andrStrObj = {
  	resources: {
  		string: [
  			{
  				_name: 'app_name',
  				__text: 'MOIN',
  			},
  			{
  				_name: 'update',
  				__text: '업데이트',
  			},
  			{
  				_name: 'update_is_necessary',
  				__text: '현 업데이트는 필수입니다. 업데이트 후 사용해주세요.',
  			},
  			{
  				_name: 'later',
  				__text: '다음에 하기',
  			},
    ],
  },
};

/**
 *
 */
export default class rnExample extends Component {
  constructor(props) {
    super(props);
    this.testCode();
  }

  testCode() {
    console.log(' space ', spaceVer);
  }

  componentWillMount() {
    YellowBox.ignoreWarnings([
      'Warning: isMounted(...) is deprecated',
      'Module RCTImageLoader',
      'Remote debugger',
      'ListView ',
      'Required dispatch',
    ]);
  }

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
          Press Cmd+R to reload,
          {'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text
          onPress={() => this.convertTest()}
        >
            Convert Test
        </Text>
      </View>
    );
  }

  convertTest() {
    convertToJsonFromAndroid(andrStrObj);
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
