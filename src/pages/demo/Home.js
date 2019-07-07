
import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>首页</Text>
        <View style={styles.buttonMarginBottom}>
          <Button title='其他' color='#6699FF' onPress={() => {
            this.props.navigation.navigate('Others');
          }} />
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonMarginBottom: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
  }
});