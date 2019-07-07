import React from 'react';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';

const Dimensions = require('Dimensions');
const { width } = Dimensions.get('window');

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />
        <TextInput placeholder={"请输入账号"} style={styles.ipt} />
        <TextInput placeholder={"请输入密码"} maxLength={8} password={true} style={styles.ipt} />
        <View style={styles.subText}>
          <Text>新账号</Text>
          <Text>忘记密码</Text>
        </View>
        <View style={styles.footerImg}>
          <Text>其他方式登录：</Text>
          <Image style={styles.logo} style={styles.footerLogo} source={require("../../assets/icon3.png")} />
          <Image style={styles.logo} style={styles.footerLogo} source={require("../../assets/icon7.png")} />
          <Image style={styles.logo} style={styles.footerLogo} source={require("../../assets/icon8.png")} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    flex: 1,
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginTop: 30,
    marginBottom: 30,
  },
  ipt: {
    height: 38,
    width: width,
    backgroundColor: '#fff',
    marginBottom: 1,
    textAlign: 'center'
  },
  subText: {
    flexDirection: 'row',
    width: width,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
  },
  footerImg: {
    position: 'absolute',
    bottom: 20,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerLogo: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginLeft: 10,
  }
})





