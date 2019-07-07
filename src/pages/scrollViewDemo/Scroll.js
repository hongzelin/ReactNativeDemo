import React from 'react';
import { ScrollView, View, Image, Button, Text, StyleSheet } from 'react-native';

const Dimensions = require('Dimensions');
const { width } = Dimensions.get('window');
const ImageData = require('./ImageData.json');

export default class Scroll extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    }
  }

  componentDidMount() {
    this.startTime();
  }

  startTime = () => {
    let imgCount = ImageData.data.length;
    const scrollView = this.refs.scrollView;
    this.timer = setInterval(
      () => {
        let activePage = 0;
        if (this.state.currentPage + 1 >= imgCount) {
          activePage = 0;
        } else {
          activePage = this.state.currentPage + 1;
        }
        this.setState({ currentPage: activePage });

        var currentX = activePage * width;
        scrollView.scrollResponderScrollTo({ x: currentX, y: 0, animated: true });

      }, 1000);
  }

  componentWillUnmount() {
    this.timer && clearInterval(this.timer);
  }

  renderContent = () => {
    let { data } = ImageData;
    const imgAddress = [
      require('../../assets/img_01.png'), require('../../assets/img_02.png'),
      require('../../assets/img_03.png'), require('../../assets/img_04.png'),
      require('../../assets/img_05.png')
    ];
    let content = data.map((item, index) => {
      return (
        <Image key={index} source={imgAddress[index]} style={{ width: width, height: 120 }} />
      )
    });
    return content;
  }

  renderPage = () => {
    let { data } = ImageData;
    let { currentPage } = this.state;
    let bullPage = data.map((item, index) => {
      let colorStyle = (index === currentPage) ? { color: 'orange' } : { color: '#fff' };
      return (
        <Text key={index} style={[styles.bull, colorStyle]}>&bull;</Text>
      )
    });
    return bullPage;
  }

  handleAminated = (e) => {
    const offsetX = e.nativeEvent.contentOffset.x; // 水平方向的偏移量
    const currentPage = Math.floor(offsetX / width); // 求出当前的页数
    this.setState({ currentPage }); // 更新状态，重绘UI
  }

  onScrollBeginDrag = () => {
    this.timer && clearInterval(this.timer);
  }

  onScrollEndDrag = () => {
    this.startTime();
  }

  render() {
    return (
      <View>
        <ScrollView
          ref="scrollView"
          horizontal={true} // 水平排列
          showsHorizontalScrollIndicator={false} // 隐藏水平滚动条
          pagingEnabled={true} // 自适应滚动视图的尺寸的整数倍位置
          onMomentumScrollEnd={(e) => this.handleAminated(e)} // 当一帧滚动完毕的时候调用
          onScrollBeginDrag={this.onScrollBeginDrag} // 当开始手动拖拽的时候调用
          onScrollEndDrag={this.onScrollEndDrag} // 当结束手动拖拽的时候调用
        >
          {this.renderContent()}
        </ScrollView>
        <View style={styles.pageStyle}>
          {this.renderPage()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pageStyle: {
    height: 25,
    backgroundColor: 'rgba(0,0,0,0.5)',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  bull: {
    marginLeft: 5,
    fontSize: 26,
  }
})
