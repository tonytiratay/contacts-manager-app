import React from 'react';
import { Animated, Text, View, Easing } from 'react-native';

class AnimatedView extends React.Component {
  constructor(){
    super();
    this.state = {
      position: new Animated.Value(-400), 
      opacity: new Animated.Value(0.3), 
    }
  }
  

  componentDidMount() {
    Animated.parallel([
      
      Animated.timing(   
        this.state.opacity,    
        {
          toValue: 1,         
          duration: 400,
          delay: 100,
          useNativeDriver: true,
        }
      ),
  
      Animated.spring(   
        this.state.position,    
        {
          toValue: 0,
          tension: 200,
          friction: 9,
          useNativeDriver: true, 
        }
      ),

    ]).start();                 
  }

  style(){
    let { position, opacity } = this.state;
    return {
      display: 'flex',
      flex: 1,
      transform: [{ translateX: Animated.multiply(position, 0) }, { translateY: Animated.multiply(position, 1)  }], 
      opacity
    };
  }

  render() {
    return (
      <Animated.View style={ [this.style(), this.props.style] }>
        {this.props.children}
      </Animated.View>
    );
  }
}

export default AnimatedView

