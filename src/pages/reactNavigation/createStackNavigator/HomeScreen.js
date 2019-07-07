import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import LogoTitle from './LogoTitle';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    // headerTitle instead of title
    headerTitle: <LogoTitle />,
    // headerRight: (
    //   <Button
    //     onPress={() => alert('This is a button!')}
    //     title="Info"
    //     color="blue"
    //   />
    // ),

    // headerBackTitle: 'A much too long text for back button from B to A',
    // headerTruncatedBackTitle: `to A`,

    title: 'Home',
    // headerStyle: {            //标题栏样式
    //   backgroundColor: 'red',
    // },
    headerTintColor: '#fff',  //标题文字和按钮颜色
    headerTitleStyle: {     //标题文字样式
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'blue'
      // 如果这里也写了标题文字的颜色，那么会覆盖headerTintColor的颜色，即标题为蓝色
    },
    /* No more header config here! */
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', { name: '卓原' })}
        />
      </View>
    );
  }
}
