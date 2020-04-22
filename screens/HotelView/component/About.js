import React, {Component} from 'react';
import {View, StyleSheet,Text} from 'react-native'
import {gs, color} from "../../../styles";

const hotel ={
  name: 'Mt. Catlin Hotel',
  price: '$967',
  location: 'New York',
  about: 'New York City (NYC), often called the City of New York or simply New York (NY), is the most populous city in the United States. With an estimated 2018 population of 8,398,748 distributed over about 302.6 square miles (784 km2), '
}

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={gs.title}>{hotel.name}</Text>
        <Text style={styles.info}>{hotel.price} &#8226; {hotel.location}</Text>
        <View style={gs.divider} />
        <Text style={gs.sectionTitle}>About {hotel.name}</Text>
        <Text style={styles.about}>{hotel.about}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    backgroundColor: color.darkBg
  },
  info: {
    color: color.textSec,
    fontWeight: '600',
    marginTop: 4
  },
  about: {
    fontSize: 15,
    fontWeight: '600',
    color: color.textSec,
    marginTop: 6,
    lineHeight: 20
  }
})

