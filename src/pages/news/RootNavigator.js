import React from 'react'
import { Image, Button, View, Text } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomePage from "./home/HomePage";
import MessagePage from "./MessagePage";
import SearchPage from "./SearchPage";
import MePage from "./MePage";
import HomeDetail from "./home/Detail";

import DetailsScreen from "./DetailsScreen";
import SettingsPage from "./SettingsPage";

const BottomTabNavigator = createBottomTabNavigator({
  Home: HomePage,
  Message: MessagePage,
  Search: SearchPage,
  Me: MePage,
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconUrl = "";
        if (routeName === 'Home') {
          iconUrl = focused ?
            require('../../assets/TabBar/tabbar_home_highlighted.png')
            :
            require('../../assets/TabBar/tabbar_home.png')
        } else if (routeName === 'Message') {
          iconUrl = focused ?
            require('../../assets/TabBar/tabbar_message_center_highlighted.png')
            :
            require('../../assets/TabBar/tabbar_message_center.png')
        } else if (routeName === 'Search') {
          iconUrl = focused ?
            require('../../assets/TabBar/tabbar_discover_highlighted.png')
            :
            require('../../assets/TabBar/tabbar_discover.png')
        } else if (routeName === 'Me') {
          iconUrl = focused ?
            require('../../assets/TabBar/tabbar_profile_highlighted.png')
            :
            require('../../assets/TabBar/tabbar_profile.png')
        }
        return <Image source={iconUrl} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });

const RootStack = createStackNavigator({
  HomeTab: {
    screen: BottomTabNavigator,
    navigationOptions: {
      // header: null, // 配置头部相关信息
      // title: '城市',
      headerTitle: (
        <View style={{ alignItems: 'center', width: '100%' }}>
          <Text>城市人</Text>
        </View>
      ),
      headerStyle: {            //标题栏样式
        backgroundColor: '#fff',
      },
      headerTintColor: '#fff',  //标题文字和按钮颜色
      headerTitleStyle: {     //标题文字样式
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333',
      },
      headerLeft: (
        <Image source={require('../../assets/NavigationBar/navigationbar_friendattention_highlighted.png')} />
      ),
      headerLeftContainerStyle: { // 设置左边的样式
        paddingLeft: 10,
      },
      headerRight: (
        <Image source={require('../../assets/NavigationBar/navigationbar_pop_highlighted.png')} />
      ),
      headerRightContainerStyle: { // 设置右边的样式
        paddingRight: 10,
      },
    }
  },
  Settings: {
    screen: SettingsPage
  },
  HomeDetail: {
    screen: HomeDetail
  }
}, {
    /* 主屏幕的标题配置现在在这里 */
    //headerMode: 'none',
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
  });


export default RootStack;