import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class ReactNativeTabNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TabNavigator
          sceneStyle={{ backgroundColor: '#e8e8e8' }}
        // tabBarStyle={{ backgroundColor: 'green' }}
        // tabBarShadowStyle={{ backgroundColor: 'red' }}
        >
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="首页"
            selectedTitleStyle={{ color: 'orange' }}
            tabStyle={{ backgroundColor: 'green' }}
            renderIcon={() => <Image source={require("./TabBar/tabbar_home.png")} />}
            renderSelectedIcon={() => <Image source={require("./TabBar/tabbar_home_highlighted.png")} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <View>
              <Text>home</Text>
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="我的"
            selectedTitleStyle={{ color: 'orange' }}
            renderIcon={() => <Image source={require("./TabBar/tabbar_discover.png")} />}
            renderSelectedIcon={() => <Image source={require("./TabBar/tabbar_discover_highlighted.png")} />}
            // renderBadge={() => <CustomBadgeView />}
            renderBadge={() => true ? <View style={styles.badgeView}><Text style={styles.badgeText}>15</Text></View> : null}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            <View>
              <Text>profile</Text>
            </View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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