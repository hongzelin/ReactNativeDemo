import React from 'react';
import {
  View,
  Text,
  Button,
  Image
} from 'react-native';

export default class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center', width: '100%' }}>
        <Image
          source={require('../../../assets/icon7.png')}
          style={{ width: 30, height: 30 }}
        />
      </View>
    );
  }
}
