import React, {Component} from 'react';
import {StyleSheet, View, Text,} from 'react-native';
import {gs, color} from "../../../styles";

export default class Stats extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statContainer}>
          <Text style={styles.statNumber}>12k</Text>
          <Text style={styles.stat}>Follower</Text>
        </View>

        <View style={[styles.statContainer, styles.divider]}>
          <Text style={styles.statNumber}>12k</Text>
          <Text style={styles.stat}>Follower</Text>
        </View>

        <View style={styles.statContainer}>
          <Text style={styles.statNumber}>12k</Text>
          <Text style={styles.stat}>Follower</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...gs.sectionContainer,
    ...gs.rowBetween,
    marginHorizontal: 16,
    borderRadius: 16,
    marginTop: -40
  },
  statContainer: {
    ...gs.center,
    flex: 1
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: color.text
  },
  stat: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: color.lightHl,
    marginTop: 6
  },
  divider: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: color.darkHl
  }
})

