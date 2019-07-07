/*
 * @Author: lin.zehong 
 * @Date: 2018-09-16 14:45:46 
 * @Last Modified by: lin.zehong
 * @Last Modified time: 2018-09-16 17:35:52
 * @Desc: 长电影示例 
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import UePbdph from '../../assets/UePbdph.jpg';

const REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class MoviePage extends Component {
  constructor(props) {
    super(props);   //这一句不能省略，照抄即可
    this.state = {
      data: [],
      loaded: false,
    };
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.movies);
        this.setState({
          data: responseData.movies,
          loaded: true
        });
      });
  }
  render() {
    const { data, loaded } = this.state;

    if (!loaded) {
      return this.renderLoadingView();
    }
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        // style={styles.list}
        keyExtractor={(item, index) => item.id}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.containerMovie}>
        <Text>
          正在加载电影数据……
        </Text>
      </View>
    );
  }

  renderMovie({ item }) {
    return (
      <View style={styles.list}>
        <Image style={styles.thumbnail} source={{ uri: item.posters.thumbnail }} />
        <View style={styles.right}>
          <Text style={styles.text}>{item.title}</Text>
          <Text>{item.year}</Text>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  containerMovie: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: 57,
    height: 57
  },
  text: {
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
  }
})
