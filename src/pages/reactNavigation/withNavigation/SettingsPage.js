import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import MyBackButton from './MyBackButton';

export default class SettingsPage extends React.Component {

  constructor(props) {
    super(props);

  }

  componentWillUnmount() {
    console.log(' SettingsPage componentWillUnmount')
  }

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings Page</Text>
        <Button title='go to deatils' onPress={() => this.props.navigation.navigate('App')} />
        <MyBackButton />
      </View>
    );
  }
}