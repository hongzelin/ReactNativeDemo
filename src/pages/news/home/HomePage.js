import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import Content from './Content';

export default class HomePage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Content {...this.props} />
      </View>
    );
  }
}
