import React from 'react';
import {
  View,
  Text,
  Button,
  Image
} from 'react-native';

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigation)
    return {
      headerTitle: (
        <View style={{ width: '90%', alignItems: 'center' }}>
          <Text>{navigation.getParam('name', 'A Nested Details Screen')}</Text>
        </View>
      ),


      // title: navigation.getParam('name', 'A Nested Details Screen'),
      // headerBackImage: <Image
      //   source={require('../../../assets/icon3.png')}
      //   style={{ width: 30, height: 30 }}
      // />,
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({ name: 'Updated!' })}
        />

      </View>
    );
  }
}