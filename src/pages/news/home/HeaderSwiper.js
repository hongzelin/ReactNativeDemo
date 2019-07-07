import React from 'react';
import { View, Text, Button, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')

export default class HeaderSwiper extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Swiper style={styles.wrapper} height={180}
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={{ backgroundColor: 'rgba(255,255,255,.5)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
          activeDot={<View style={{ backgroundColor: '#fff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
          paginationStyle={{
            bottom: 5, left: null, right: 10
          }}
          loop={true}
          autoplay={true}
        >
          <View style={styles.slide} title={<Text style={styles.swiper_title} numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/1.jpg')} />
          </View>
          <View style={styles.slide} title={<Text style={styles.swiper_title} numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/2.jpg')} />
          </View>
          <View style={styles.slide} title={<Text style={styles.swiper_title} numberOfLines={1}>Why Stone split from Garfield</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/3.jpg')} />
          </View>
          <View style={styles.slide} title={<Text style={styles.swiper_title} numberOfLines={1}>Learn from Kim K to land that job</Text>}>
            <Image resizeMode='stretch' style={styles.image} source={require('./img/4.jpg')} />
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  swiper_title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 35,
    left: 10,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width,
    flex: 1
  }

})