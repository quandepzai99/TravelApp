import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {color, gs} from '../../../styles'



export default class Extras extends Component {
  render() {
    const extras =[
      'payment at checkout',
      'Wi-fi network is off by 12:00pm',
      'no swimming after 10:00pm',
      'no more than 2 bags of luggage',
      'no signing while showering',
      'no refunds'
    ]
    return (
      <View style={styles.container}>
        <Text style={gs.sectionTitle}>Before you go</Text>
        <View style={styles.list}>
          {extras.map((extra, key) => {
            return (
              <Text style={styles.listItem} key={key}>
                &mdash; {extra}
              </Text>
            )
          })}
        </View>
        <View style={{marginTop: 32, marginBottom: -40}}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={{fontWeight: '700', color: '#fff'}}>Filter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    marginTop: 8,
    marginBottom: 64
  },
  list: {
    marginTop: 16,
    marginLeft: 8,
  },
  listItem: {
    color: color.textSec,
    marginVertical: 8
  },
  filterButton: {
    ...gs.button,
    paddingVertical: 16
  }
})

