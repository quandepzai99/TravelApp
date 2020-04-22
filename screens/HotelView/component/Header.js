import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {gs} from '../../../styles'



export default class Header extends Component {
  render() {
    return (
      <View >
        <Image source={require('../../../assets/hotel.jpg')} style={{width: '100%', height: 400}}/>
        <View style={styles.topButtons}>
          <Icon name='close' size={25} color='#fff' />
          <View style={gs.rowCenter}>
            <Icon name={'save'} size={24} style={styles.topButtonsRight} />
            <Icon name={'share'} size={24} style={styles.topButtonsRight} />
            <Icon name={'dots-three-vertical'} size={24} style={styles.topButtonsRight} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topButtons: {
    ...gs.rowBetween,
    position: 'absolute',
    top: 20,
    left: 32,
    right: 32
  },
  topButtonsRight: {
    marginLeft: 12,
    color: '#fff'
  }
})

