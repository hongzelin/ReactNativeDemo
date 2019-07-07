import React from 'react';
import { View, Text, Button, StyleSheet, ListView, Image, TouchableOpacity } from 'react-native';
import HeaderSwiper from './HeaderSwiper';

const localData = require('./LocalData.json');
const KEY_WORD = 'T1348647853363';

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headerData: [],
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    }
  }

  componentDidMount() {
    const data = localData[KEY_WORD];
    let headerData = [];
    let contentData = [];
    data.map((item, index) => {
      if (item.ads) { // 轮播
        headerData = item.ads;
      } else { // 列表
        contentData.push(item);
      }
    });
    this.setState({
      headerData,
      dataSource: this.state.dataSource.cloneWithRows(contentData)
    })
  }

  renderHeader = (rowData) => {
    return (
      <HeaderSwiper />
    )
  }

  renderRow = (rowData) => {
    return (
      <TouchableOpacity onPress={() => this.goDetail(rowData)} activeOpacity={0.5} style={styles.home_container}>
        <Image source={require('../../../assets/UePbdph.jpg')} style={styles.leftImg} />
        <View style={styles.rightContent}>
          <Text style={styles.home_title}>{rowData.title}</Text>
          <Text style={styles.home_digest}>{rowData.digest}</Text>
          <Text style={styles.home_count}>{rowData.replyCount}跟帖</Text>
        </View>
      </TouchableOpacity>
    )
  }

  goDetail = (rowData) => {
    this.props.navigation.navigate('HomeDetail', { detailData: rowData })
  }

  render() {
    return (
      <View style={styles.home_content}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderRow(rowData)}
          renderHeader={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home_content: {
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  home_container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 0.5,
  },
  leftImg: {
    width: 70,
    height: 90
  },
  rightContent: {
    flex: 1,
    marginLeft: 10,
    position: 'relative',
  },
  home_title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
    marginBottom: 5,
  },
  home_digest: {
    fontSize: 13,
    color: '#999',
  },
  home_count: {
    fontSize: 12,
    color: '#999',
    position: 'absolute',
    right: 0,
    bottom: 0
  }
})