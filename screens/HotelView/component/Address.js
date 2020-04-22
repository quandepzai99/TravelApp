import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {color, gs} from '../../../styles'



export default class Address extends Component {
  render() {
    return (
      <View >
        <View style={{backgroundColor: '#000'}}>
          <Image source={require('../../../assets/map.png')}style={{height: 200, opacity: 0.4}} />
        </View>
        <View style={styles.addressContainer}>
          <Image source={require('../../../assets/pin.png')}style={{width: 60, height: 60, backgroundColor: '#fff'}} />

          <View style={{marginLeft: 8, marginTop: 24}}>
            <Text style={gs.sectionTitle}>Address</Text>
            <Text style={styles.address}>{`Many districts and landmarks in New York City are well known, including three of the world's ten most visited tourist attractions in 2013.`}</Text>
            <View style={{marginTop: 16}}>
              <TouchableOpacity style={styles.checkButton}>
                <Text style={gs.smallText}>check it</Text>
                <Icon name={'chevron-right'} size={12} color={'#fff'}style={{marginLeft: 4}}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addressContainer: {
    ...gs.absoluteFull,
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  address: {
    ...gs.smallText,
    color: color.darkHl,
    marginTop: 6,
    letterSpacing: 1,
    lineHeight: 20
  },
  checkButton: {
    ...gs.button,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    flexDirection: 'row'
  }
})

