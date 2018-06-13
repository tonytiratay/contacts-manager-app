import React from 'react';
import { Animated, Text, View, Easing } from 'react-native';

class AnimatedView extends React.Component {
  state = {
    position: new Animated.Value(1000),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.position,            // The animated value to drive
      {
        toValue: 0,                   // Animate to opacity: 1 (opaque)
        duration: 300,              // Make it take a while
        easing: Easing.elastic(),
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { position } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          marginTop: position,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default AnimatedView

