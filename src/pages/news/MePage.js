import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

export default class MePage extends React.Component {
  static navigationOptions = {
    tabBarLabel: '我的',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Me Page</Text>
      </View>
    );
  }
}