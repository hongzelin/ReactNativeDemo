import React from 'react';
import { View, Text, Button, WebView } from 'react-native';

const DetailData = require('./DetailData.json');

export default class Detail extends React.Component {
  state = {
    detailContent: ""
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('detailData')['title'],
    }
  };
  componentDidMount = () => {
    const { params } = this.props.navigation.state; // 获取通过navigation调整传递的参数。
    let url_api = `http://c.3g.163.com/nc/article/${params.detailData.docid}/full.html`;

    // 获取详情的内容
    // fetch(url_api, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({}),
    // }).then(result => {
    //   console.log(result);
    // })BN6QFDAL00963VRO

    let detailContent = DetailData['BN6QFDAL00963VRO'].body;

    // 文章图片的占位符替换成图片
    const imgArr = DetailData['BN6QFDAL00963VRO'].img;
    imgArr.map((item, index) => {
      var imgHtml = '<img src="' + item.src + '" width="100%">'
      detailContent = detailContent.replace(item.ref, imgHtml);
    });

    this.setState({
      detailContent
    })

  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          originWhitelist={['*']}
          scalesPageToFit={true}
          bounces={false}
          source={{ html: this.state.detailContent, baseUrl: '' }}
        />
      </View>
    );
  }
}
