import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

export default class WelcomePage extends React.Component {

  constructor(props) {
    super(props);

  }

  componentWillUnmount() {
    console.log(' WelcomePage componentWillUnmount')
  }

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>WelcomePage Page</Text>
        <Button title='go to Home' onPress={() => this.props.navigation.navigate('App')} />
      </View>
    );
  }
}