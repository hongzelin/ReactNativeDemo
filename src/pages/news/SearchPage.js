import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

export default class SearchPage extends React.Component {
  static navigationOptions = {
    tabBarLabel: '搜索',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Search Page</Text>
      </View>
    );
  }
}