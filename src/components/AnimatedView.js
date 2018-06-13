import React from 'react';
import { Animated, Text, View, Easing } from 'react-native';

class AnimatedView extends React.Component {
  constructor(){
    super();
    this.state = {
      position: new Animated.Value(-800), 
    }
  }
  

  componentDidMount() {
    Animated.timing(   
      this.state.position,    
      {
        toValue: 0,          
        duration: 365,      
        easing: Easing.elastic(),
      }
    ).start();                   
  }

  style(){
    let { position } = this.state;
    return {
      marginTop: position, 
    };
  }

  render() {
    return (
      <Animated.View style={ this.style() }>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default AnimatedView

