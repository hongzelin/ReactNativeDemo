import React from 'react'
import { Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import SettingsPage from "./SettingsPage";


const BottomTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        if (routeName === 'Home') {
          iconName = focused ?
            require('../NavigationBar/navigationbar_friendattention_highlighted.png')
            :
            require('../NavigationBar/navigationbar_friendattention.png')
        } else if (routeName === 'Details') {
          iconName = focused ?
            require('../NavigationBar/navigationbar_pop_highlighted.png')
            :
            require('../NavigationBar/navigationbar_pop.png')
        }

        return <Image source={iconName} />;
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
      header: null, // 配置头部相关信息
    }
  },
  Settings: {
    screen: SettingsPage
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