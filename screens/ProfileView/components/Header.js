import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {gs, color} from "../../../styles";
import FontAwesome from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

export default class Header extends Component {
  render() {
    const user = this.props.user;
    const name = `${user.name.first} ${user.name.last}`;
    return (
      <LinearGradient colors={[color.orange, color.pink]} startPpoint={[0, 0]} endPoint={[1, 1]}>
        <View style={{marginHorizontal: 30, marginVertical: 40}}>
          <View style={gs.rowBetween}>
            <FontAwesome name={'arrowleft'} size={25} color={color.text}/>
            <Entypo name={'dots-three-vertical'} size={24} color={color.text}/>
          </View>

          <View style={styles.imageContainer}>
            <View style={styles.check}>
              <Entypo name={'check'} size={24} color={color.pink}/>
            </View>
            <Image source={{uri: user.picture.large}} style={{width: 100, height: 100, borderRadius: 32}}/>
          </View>

          <View style={[gs.center, {marginVertical: 12}]}>
            <Text style={gs.title}>{name}</Text>
            <Text style={[gs.subTitle, {marginTop: 8}]}>Traveler/Blogger</Text>

            <TouchableOpacity style={styles.follow}>
              <Entypo name={'plus'} size={20} color={'rgba(255, 255, 255, 0.8)'}/>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  imageContainer: {
    ...gs.center,
    marginTop: 16,
    shadowColor: color.darkBg,
    shadowOffset: {height: 3, width: 1},
    shadowOpacity: 0.5,
  },
  check: {
    ...gs.center,
    backgroundColor: color.text,
    borderRadius: 100,
    width: 32,
    height: 32,
    shadowColor: color.darkBg,
    shadowOffset: {height: 3, width: 1},
    shadowOpacity: 0.3,
    position: 'absolute',
    zIndex: 1,
    right: 110,
    bottom: 16
  },
  follow: {
    ...gs.button,
    ...gs.rowCenter,
    paddingHorizontal: 24,
    paddingVertical: 8,
    marginTop: 16,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 2
  },
  followText: {
    fontSize: 16,
    color: color.text,
    fontWeight: '600',
    marginLeft: 4
  }
})

