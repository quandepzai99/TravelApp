import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {gs} from "../../../styles";

const photos = [
  require('../../../assets/hotel.jpg'),
  require('../../../assets/hotel.jpg'),
  require('../../../assets/hotel.jpg'),
  require('../../../assets/hotel.jpg'),
  require('../../../assets/hotel.jpg'),
  require('../../../assets/hotel.jpg'),
  require('../../../assets/hotel.jpg'),
  require('../../../assets/hotel.jpg'),
]

export default class Photos extends Component {
  render() {
    return (
      <View style={[gs.sectionContainer, {marginTop: 8}]}>
        <Text style={gs.sectionTitle}>My Photos</Text>
        <View style={styles.photosContainer}>
          {photos.map((photo, index) => {
            return <Image
              source={photo}
              key={index}
              style={[
                styles.photo,
                {
                  marginRight: (index + 1) % 3 === 0 ? 0 : 10,
                }
              ]} />
          })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  },
  photo: {
    height: 108,
    width: 108,
    marginBottom: 12,
    borderRadius: 8
  }
})

