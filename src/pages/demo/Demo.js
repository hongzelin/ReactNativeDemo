/**
 * @flow
 */

import React from 'react';
import { ScrollView, View, StatusBar, Button, Text } from 'react-native';

const Dimensions = require('Dimensions');
const { width } = Dimensions.get('window');

export default class Demo extends React.Component {

  renderContent = () => {
    let colors = ['red', 'green', 'blue', '#ccc'];
    let content = colors.map((item, index) => {
      return (
        <View key={index} style={{ backgroundColor: item, width: width, height: 200 }}>
          <Text>
            {item}
          </Text>
        </View>
      )
    });
    return content;
  }

  render() {
    return (
      <ScrollView
        horizontal={true} // 水平排列
        showsHorizontalScrollIndicator={false} // 隐藏水平滚动条
        pagingEnabled={true} // 自适应滚动视图的尺寸的整数倍位置
      >
        {this.renderContent()}
      </ScrollView>
    )
  }
} 
