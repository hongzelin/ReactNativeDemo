import React from 'react';
import { ListView, View, Image, TouchableOpacity, Alert, Text, StyleSheet } from 'react-native';

const Dimensions = require('Dimensions');
const car = require('./car/Car.json');
const { width } = Dimensions.get('window');

export default class Car extends React.Component {

  constructor(props) {
    super(props);
    this.handerData();
  }

  handerData = () => {
    let ds = new ListView.DataSource({
      getRowData: this.getRowData,
      getSectionData: this.getSectionData,
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    this.state = {
      dataSource: ds,
    };
  }

  getSectionData = (dataBlob, sectionID) => {
    return dataBlob[sectionID]
  }

  getRowData = (dataBlob, sectionID, rowID) => {
    return dataBlob[sectionID + ':' + rowID];
  }

  componentDidMount() {
    this.loadDataFromJson();
  }

  loadDataFromJson = () => {
    let dataBlob = {},
      sectionIDs = [],
      rowIDs = [];
    car.data.map((item, i) => { // 遍历数据
      sectionIDs.push(i); // 组号
      dataBlob[i] = item.title; // 组的title放入dataBlob
      const Cars = item.cars; // 遍历该组中的所有汽车
      rowIDs[i] = []; // 确定有几组
      Cars.map((car, j) => {
        rowIDs[i].push(j); // 每一行对应的行标识
        dataBlob[i + ':' + j] = car; // 根据唯一的标识，组+行标识放入dataBlob
      })
    });
    this.setState({
      dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
    })
  }

  renderData = (rowData, sectionID, rowID, highlightRow) => {
    const imgs = [require('./car/images/m_2_100.png')];
    return (
      <TouchableOpacity
        activeOpacity={0.5}
      >
        <View style={styles.content}>
          <Image source={imgs[0]} style={styles.imageStyle} />
          <Text>{rowData.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderSectionHeader = (sectionData, sectionID) => {
    return (
      <View>
        <Text style={styles.header}>{sectionData}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.containerCar}>
        <View style={styles.headerViewStyle}>
          <Text style={styles.title}>标题</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderData}
          renderSectionHeader={this.renderSectionHeader}
          stickyHeaderIndices={[0]}
          stickySectionHeadersEnabled={true}
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  containerCar: {
    flex: 1,
    width: "100%",
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#e8e8e8',
    color: '#fff'
  },
  headerViewStyle: {
    height: 48,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    color: '#fff',
  },
  content: {
    flexDirection: 'row',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    alignItems: 'center',
    padding: 10,
  }
})
