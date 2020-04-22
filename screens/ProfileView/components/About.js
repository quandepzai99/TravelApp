import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {gs, color} from "../../../styles";

export default class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={gs.sectionTitle}>About Me</Text>
        <Text style={styles.about}>
          Egal, ob Bluse, Kleid oder T-Shirt: bei ABOUT YOU findest Du alles für Deinen stimmigen Look. Auf eine große Auswahl an Größen und Farben musst Du dabei nicht verzichten. Besonders farbenfrohe Modelle machen Lust auf Sommer
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 32
  },
  about: {
    fontSize: 15,
    fontWeight: '500',
    color: color.darkHl,
    marginTop: 8,
    lineHeight: 22
  }
})

