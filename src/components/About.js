import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import AnimatedView from './AnimatedView';

class About extends Component {
  render(){
    return(
      <AnimatedView style={styles.container}>
        <Text style={styles.text}>About</Text>
      </AnimatedView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#18819b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 36,
    textAlign: 'center'
  },
});

export default About