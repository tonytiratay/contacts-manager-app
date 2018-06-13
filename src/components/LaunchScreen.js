import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Animated, Easing } from 'react-native';

import AnimatedView from './AnimatedView';

class LaunchScreen extends Component {

	render(){
		return(
			<AnimatedView style={ styles.container }>
		        <Image style={styles.image} source={require('../../public/github-logo-white.png')} />
		        <Text style={styles.text}>Contacts Manager</Text>
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
  image: {
    width: 300,
    height: 100,
  }
});

export default LaunchScreen