import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class About extends Component {
  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../public/github-logo-white.png')} />
        <Text style={styles.text}>About</Text>
      </View>
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
  image: {
    width: 300,
    height: 100,
  }
});

export default About