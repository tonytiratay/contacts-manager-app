import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import AnimatedView from './AnimatedView';

import SimpleKeyboard from './SimpleKeyboard';

class About extends Component {
  
  componentWillMount(){
    let { changeColor, changeActiveSpace } = this.props;
    changeActiveSpace('help');
    changeColor('#5a9ce2');
  }
  render(){
    return(
      <AnimatedView style={{ flex: 1, display: 'flex' }}>
        <SimpleKeyboard/>
      </AnimatedView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
});

export default About
