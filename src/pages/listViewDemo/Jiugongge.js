import React from 'react';
import { ListView, View, Image, TouchableOpacity, Alert, Text, StyleSheet } from 'react-native';

const Dimensions = require('Dimensions');
const shareData = require('./shareData.json');
const { width } = Dimensions.get('window');
const cols = 3;
const cellW = 100;
const cellH = 100;
const vMargin = (width - cols * cellW) / (cols + 1);

export default class Jiugongge extends React.Component {

  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(shareData.data),
    };
  }

  renderData = (rowData, sectionID, rowID, highlightRow) => {
    const imgs = [require('./images/icon1.png')];
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => this.handlePress(rowData, rowID)}
      >
        <View style={styles.itemContent}>
          <Image source={imgs[0]} style={styles.imageStyle} />
          <Text style={styles.title}>{rowData.title}</Text>
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
      ],
      { cancelable: false }
    )
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderData}
        contentContainerStyle={styles.contentContainer}
      />
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContent: {
    width: cellW,
    height: cellH,
    marginLeft: vMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 60,
    height: 60,
  },
  title: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
  }
})
