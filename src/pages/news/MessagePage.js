import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

export default class MessagePage extends React.Component {
  static navigationOptions = {
    tabBarLabel: '通知',
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Message Page</Text>
        <Button title='go to deatils' onPress={() => this.props.navigation.navigate('Details')} />
      </View>
    );
  }
}