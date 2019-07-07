import React from 'react';
import { ListView, View, Image, TouchableOpacity, Alert, Text, StyleSheet } from 'react-native';

const Dimensions = require('Dimensions');
const { width } = Dimensions.get('window');
const Wine = require('./Wine.json');

export default class List extends React.Component {

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(Wine),
    };
  }

  renderData = (rowData, sectionID, rowID, highlightRow) => {
    const imgs = [require('./images/1.jpg')];
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => this.handlePress(rowData, rowID)}
      >
        <View style={styles.itemContent}>
          <Image source={imgs[0]} style={styles.imageStyle} />
          <View style={styles.desc}>
            <Text style={styles.name}>{rowData.name}</Text>
            <Text style={styles.money}>${rowData.money}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  handlePress = (rowData, rowID) => {
    Alert.alert(
      '',
      rowData.name,
      [
        { text: '确定', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        // { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderData}
      />
    )
  }
}

const styles = StyleSheet.create({
  itemContent: {
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    padding: 10,
    flexDirection: 'row',
  },
  desc: {
    justifyContent: 'center',
    marginLeft: 8,
    width: '80%',
  },
  name: {
    fontSize: 13,
    color: '#000',
    marginBottom: 5,
  },
  money: {
    fontSize: 15,
    color: 'red'
  },
  imageStyle: {
    width: 60,
    height: 60
  }
})
