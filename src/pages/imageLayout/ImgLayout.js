/*
 * @Author: lin.zehong 
 * @Date: 2018-09-16 14:45:46 
 * @Last Modified by: lin.zehong
 * @Last Modified time: 2018-09-17 21:02:26
 * @Desc: 图片布局示例 
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import uepbdph from '../../assets/UePbdph.jpg';

const Dimensions = require('Dimensions');
const { width } = Dimensions.get('window');
const boxWidth = 100;
const boxNum = 3;
const marginWidth = (width - boxWidth * boxNum) / (boxNum + 1);
console.log(marginWidth);

export default class ImgLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapImg}>
        {
          this.renderImg()
        }
      </View>
    );
  }

  renderImg() {
    const name = ["吞吞吐吐", "额鹅鹅鹅", "多多少少", "灌灌灌灌", "哈哈哈哈", "顶顶顶顶"];
    return (
      name.map((item, index) => (
        <View key={index} style={styles.content}>
          <Image style={styles.img} source={require('../../assets/UePbdph.jpg')} />
          <Text style={styles.text}>{item}</Text>
        </View>
      ))
    )
  }
}


const styles = StyleSheet.create({
  wrapImg: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  content: {
    backgroundColor: '#ccc',
    padding: 10,
    width: 100,
    marginTop: 20,
    alignItems: 'center',
    marginLeft: marginWidth,
  },
  img: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 13,
    marginTop: 8,
  }
})
