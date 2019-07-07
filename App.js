/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
// import MoviePage from './src/pages/movies/MoviePage';
import ImgLayout from './src/pages/imageLayout/ImgLayout';
import Demo from './src/pages/demo/Demo';
import MyIcon from './MyIcon';
// import Touchables from './src/pages/demo/Touchables';
import Login from './src/pages/qqLogin/Login';
import Scroll from './src/pages/scrollViewDemo/Scroll';
import List from './src/pages/listViewDemo/List';
import Jiugongge from './src/pages/listViewDemo/Jiugongge';
import Car from './src/pages/listViewDemo/Car';
import FixedHeaderListView from './src/pages/listViewDemo/FixedHeaderListView';
import ReactNativeTabNavigator from './src/pages/reactNativeTabNavigator/ReactNativeTabNavigator';
import ReactNavigation from './src/pages/reactNavigation/createStackNavigator/ReactNavigation';
import CreateBottomTabNavigator from './src/pages/reactNavigation/createBottomTabNavigator/RootNavigator';
import CreateSwitchNavigator from './src/pages/reactNavigation/createSwitchNavigator/RootNavigator';
import WithNavigation from './src/pages/reactNavigation/withNavigation/RootNavigator';

import RootNavigator from './src/pages/news/RootNavigator';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {/* <MyIcon name={'pointer_move'} size={20} color={'green'} /> */}
        {/* <Text style={styles.title}>电影列表</Text> */}
        {/* <Touchables /> */}
        {/* <Demo /> */}
        {/* <ImgLayout /> */}
        {/* <MoviePage /> */}
        {/* <AppNavigator /> */}
        {/* <Login /> */}
        {/* <Scroll /> */}
        {/* <List /> */}
        {/* <Jiugongge /> */}
        {/* <Car /> */}
        {/* <FixedHeaderListView /> */}
        {/* <ReactNativeTabNavigator /> */}
        {/* <ReactNavigation /> */}
        {/* <CreateBottomTabNavigator /> */}
        {/* <CreateSwitchNavigator /> */}
        {/* <WithNavigation /> */}

        <RootNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 16,
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
    padding: 8,
  }
});
