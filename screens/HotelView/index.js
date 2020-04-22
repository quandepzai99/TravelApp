import React, {Component} from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {color} from '../../styles'
import Header from './component/Header'
import BookMark from './component/BookMark'
import About from './component/About'
import Stats from './component/Stats'
import Amenities from "./component/Amenities";
import Address from "./component/Address";
import Extras from "./component/Extras";

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'/>
        <Header/>
        <View>
          <BookMark/>
          <About/>
          <Stats/>
          <Amenities/>
          <Address/>
          <Extras/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.darkBg
  }
})

