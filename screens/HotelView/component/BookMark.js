import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import {gs, color} from "../../../styles";


export default class BookMark extends Component {
  render() {
    return (
      <View style={styles.bookmark}>
        <Feather name="bookmark" typr='Feather' size={25} color={color.pink}/>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  bookmark: {
    position: 'absolute',
    width: 56,
    height: 56,
    right: 32,
    top: -56 / 2,
    backgroundColor: color.text,
      ...gs.center,
    borderRadius: 56 / 2,
    zIndex: 10
  }
})

