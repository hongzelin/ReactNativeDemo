/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import HomeScreen from '../listViewDemo/List';
import MineScreen from '../listViewDemo/Car';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const TabNavigatorItem = TabNavigator.Item;
//默认选项
const TAB_HOME_NORMAL = require('./TabBar/tabbar_home.png');
const TAB_MINE_NORMAL = require('./TabBar/tabbar_discover.png');
//选中
const TAB_HOME_PRESS = require('./TabBar/tabbar_home_highlighted.png');
const TAB_MINE_PRESS = require('./TabBar/tabbar_discover_highlighted.png');

export default class HelloWord extends Component {
  //默认选中
  constructor() {
    super();
    this.state = {
      selectedTab: 'Home',
    }
  }
  //点击方法
  onPress(tabName) {
    if (tabName) {
      this.setState({
        selectedTab: tabName,
      }
      );
    }
  }

  //渲染选项卡
  renderTabView(title, tabName, defaultTab, isBadge) {
    var tabNomal;
    var tabPress;
    var tabPage;
    switch (tabName) {
      case 'Home':
        tabNomal = TAB_HOME_NORMAL;
        tabPress = TAB_HOME_PRESS;
        tabPage = <HomeScreen />;
        break;
      case 'Mine':
        tabNomal = TAB_MINE_NORMAL;
        tabPress = TAB_MINE_PRESS;
        tabPage = <MineScreen />;
        break;
      default:
    }

    return (
      <TabNavigatorItem
        selected={this.state.selectedTab === tabName}
        title={title}
        titleStyle={styles.tabText}
        selectedTitleStyle={styles.selectedTabText}
        renderIcon={() => <Image style={styles.icon} source={tabNomal} />}
        renderSelectedIcon={() => <Image style={styles.icon} source={tabPress} />}

        onPress={() => this.onPress(tabName)}
        renderBadge={() => isBadge ? <View style={styles.badgeView}><Text style={styles.badgeText}>15</Text></View> : null}
      >
        <View style={styles.page}>
          {tabPage}
        </View>
      </TabNavigatorItem>
    );
  }

  //自定义TabView
  tabBarView() {
    return (
      <TabNavigator
        tabBarStyle={styles.tab}>
        {this.renderTabView('首页', 'Home', HomeScreen, true)}
        {this.renderTabView('我的', 'Mine', HomeScreen, false)}
      </TabNavigator>
    );
  }

  //渲染界面
  render() {
    var tabView = this.tabBarView();
    return (
      <View style={styles.container}>
        {tabView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabText: {
    fontSize: 10,
    color: 'black'
  },
  selectedTabText: {
    fontSize: 10,
    color: 'green'
  },
  tabIcon: {
    width: 25,
    height: 25,
  },
  badgeView: {
    width: 22,
    height: 14,
    backgroundColor: '#f85959',
    borderWidth: 1,
    marginLeft: 10,
    marginTop: 3,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 8,
  },
  icon: {
    width: 22,
    height: 22
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
});
