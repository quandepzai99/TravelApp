import React, {Component} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {color} from './styles';
import HotelView from './screens/HotelView';
import ProfileView from './screens/ProfileView';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        {/*<HotelView/>*/}
        <ProfileView />
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.darkBg
  }
})

