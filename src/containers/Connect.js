import React, { Component } from 'react';
import { StatusBar, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import AnimatedView from '../components/AnimatedView';

class Connect extends Component {

	componentWillMount(){
		let { changeColor, changeActiveSpace } = this.props;
		changeColor('#9c5be5');
		changeActiveSpace('connect')
	}

	render(){
	    return(
	      <AnimatedView style={styles.container}>
	        <Text style={styles.text}>Connect</Text>
	      </AnimatedView>
	    )
	  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 36,
    textAlign: 'center'
  },
});

export default Connect
