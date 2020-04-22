import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import {gs, color} from "../../../styles";

export default class Location extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width: 75, height: 75}}>
          <Image
            source={require('../../../assets/location.png')}
            style={{flex: 1, width: undefined}}
            resizeMode={'center'}
          />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.location}>Switzer land</Text>
          <Text style={styles.distance}>227km away</Text>
        </View>
        <Entypo name={'chevron-right'} size={24} color={color.darkHl}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...gs.rowCenter,
    backgroundColor: color.lightBg,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  location: {
    fontSize: 18,
    color: color.text,
    fontWeight: '500'
  },
  distance: {
    ...gs.smallText,
    color: color.darkHl,
    marginTop: 4,
    textTransform: 'uppercase'
  }
})

