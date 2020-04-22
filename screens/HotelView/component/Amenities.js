import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {gs, color} from "../../../styles";


export default class Amenities extends Component {
  render() {
    return (
      <View style={gs.sectionContainer}>
        <Text style={gs.sectionTitle}>Amenities</Text>
        <View style={styles.amenitiesContainer}>
          <View style={styles.amenityContainer}>
            <View style={styles.amenity}>
              <Feather name={'ios-wifi'} size={24} color={color.lightHl} />
            </View>
            <Text style={styles.amenityName}>Wi-fi</Text>
          </View>

          <View style={styles.amenityContainer}>
            <View style={styles.amenity}>
              <Feather name={'md-restaurant'} size={24} color={color.lightHl} />
            </View>
            <Text style={styles.amenityName}>Hotel Restaurant</Text>
          </View>

          <View style={styles.amenityContainer}>
            <View style={styles.amenity}>
              <FontAwesome5 name={'swimmer'} size={24} color={color.lightHl} />
            </View>
            <Text style={styles.amenityName}>Swimming</Text>
          </View>

          <View style={styles.amenityContainer}>
            <View style={styles.amenity}>
              <MaterialIcons name={'local-bar'} size={24} color={color.lightHl} />
            </View>
            <Text style={styles.amenityName}>Bar</Text>
          </View>

          <View style={styles.amenityContainer}>
            <View style={styles.amenity}>
              <Feather name={'ios-car'} size={24} color={color.lightHl} />
            </View>
            <Text style={styles.amenityName}>Parking Spot</Text>
          </View>

          <View style={styles.amenityContainer}>
            <View style={styles.amenity}>
              <FontAwesome5 name={'teamspeak'} size={24} color={color.lightHl} />
            </View>
            <Text style={styles.amenityName}>Night Club</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  amenitiesContainer: {
    marginTop: 16,
    marginHorizontal: 16,
    ...gs.rowBetween,
    flexWrap: 'wrap'
  },
  amenityContainer: {
    alignItems: 'center',
    width: 95,
    marginVertical: 12
  },
  amenity: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    ...gs.center,
    backgroundColor: '#444'
  },
  amenityName: {
    color: color.lightHl,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 6,
    textAlign: 'center'
  }
})

