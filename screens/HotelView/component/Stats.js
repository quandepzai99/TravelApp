import React, {Component} from 'react';
import {StyleSheet, View,Text} from 'react-native';
import  Feather from "react-native-vector-icons/FontAwesome";
import {color, gs} from "../../../styles";
import index from "../index";

const starColor= ['#e3ab53','#e3ab53','#e3ab53','#e3ab53','#e3ab53']

const Circle = props => {
  return <View style={[styles.circle, props.style]} />
}

export default class Stats extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.weatherContainer}>
          <Feather name={'sun-o'} size={25} color={color.darkHl} />
          <View style={{marginLeft: 8}}>
            <Text style={styles.title}>22</Text>
            <Text style={styles.subTitle}>Sunny</Text>
          </View>
        </View>

        <View>
          <Text style={styles.title}>
            8.2
            <Text style={[styles.subTitle, {paddingLeft: 8}]}>&nbsp;&nbsp; +6k Votes</Text>
          </Text>
          <View style={gs.rowCenter}>
            {starColor.map((color, index) => {
              return(
                <Feather name={'star'} size={24} color={color} key={index} style={{marginHorizontal: 2}} />
                  )
                  })}
           </View>
        </View>
        <View style={styles.circlesContainer}>
          <Circle style={{backgroundColor: '#999', marginRight: -10, zIndex: 3}}/>
          <Circle style={{backgroundColor: '#888', marginRight: -10, zIndex: 2}}/>
          <Circle style={{backgroundColor: '#777', marginRight: -10, zIndex: 1}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...gs.rowCenter,
    ...gs.sectionContainer
  },
  weatherContainer: {
    ...gs.rowCenter,
    paddingRight: 12,
    marginRight: 12,
    borderRightColor: '#444',
    borderWidth: 1
  },
  title: {
    color: color.text,
    fontSize: 18,
    fontWeight: '800'
  },
  subTitle: {
    color: color.textSec,
    fontSize: 10,
    fontWeight: '800'
  },
  circlesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  circle: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    borderWidth: 2,
    borderColor: color.lightBg
  }
})

