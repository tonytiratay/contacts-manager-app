import React from 'react';
import { StatusBar, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import LaunchScreen from './src/components/LaunchScreen';
import About from './src/components/About';

export default class App extends React.Component {
  render() {
    return( 
      <NativeRouter>
        <View style={styles.container}>
          <StatusBar hidden={true}/>
          <View style={styles.container}>
            <Route path="/" exact component={ LaunchScreen } />
            <Route path="/about" exact component={ About } />
          </View>
          <View style={styles.navContainer}>
            <Link style={styles.navItemBorder} component={TouchableOpacity} to="/">
              <Text style={styles.navItemText}>Home</Text>
            </Link>
            <Link style={styles.navItem} component={TouchableOpacity} to="/About">
              <Text style={styles.navItemText}>About</Text>
            </Link>
          </View>
        </View>
      </NativeRouter>
    );
  }
}

const navColor = '#6bd3ea';
const navItemColor = "#35b2ce"

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
    height: 50,
    backgroundColor: navColor,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: navItemColor,
  },
  navItemBorder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderRightColor: '#1699b7',
    backgroundColor: navItemColor,
  },
  navItemText: {
    color: '#fff',
  }
}); 

