import React, { Component } from 'react';
import { View } from 'react-native';
import { sr } from './StyleUtils';

/**
 *  Empty Space View
 */
export class Space extends Component {
  render() {
    const { h, w, isDebug = false, f = null, borderBottom = false,
      borderColor = '#e5e7ec' } = this.props;
    const backgroundColor = isDebug ? '#5555' : '#0000';
    if (f) {
      return <View style={{ flex: f, backgroundColor }} />;
    }
    const height = !h ? 100 : h * sr;
    const width = !w ? null : w * sr;
    const borderSty = borderBottom ? { borderBottomWidth: 1, borderColor }
      : { };
    return (
      <View
        {...this.props}
        style={{ height, width, backgroundColor, ...borderSty }}
      />
    );
  }
}
