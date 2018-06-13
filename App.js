import React from 'react';
import { StatusBar, View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import LaunchScreen from './src/components/LaunchScreen';
import About from './src/components/About';

export default class App extends React.Component {
  render() {
    return( 
      <NativeRouter>
        <View style={styles.container}>
          <StatusBar hidden={true}/>
          <View style={styles.navContainer}>
            <Link style={styles.navItem} to="/"><Text style={styles.navItemText}>Home</Text></Link>
            <Link style={styles.navItem} to="/About"><Text style={styles.navItemText}>About</Text></Link>
          </View>
          <Route path="/" exact component={ LaunchScreen } />
          <Route path="/about" exact component={ About } />
        </View>
      </NativeRouter>
    );
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
  navContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#1fa3c1'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItemText: {
    color: '#fff',
  }
}); 
