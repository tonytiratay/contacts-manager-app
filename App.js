import React from 'react';
import { Provider } from 'react-redux';

import { StatusBar, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import Color  from 'color';

import LaunchScreen from './src/components/LaunchScreen';
import About from './src/components/About';
import Connect from './src/containers/Connect';

import store from './src/store'


export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      backgroundColor: '#9c5be5',
      lightenFactor: '0.05',
      activeSpace: 'about',
      color: '#fff',
    };
  }

  changeColor(color){
    this.setState({ backgroundColor: color });
  }

  changeActiveSpace(activeSpace){
    this.setState({activeSpace});
  }

  chooseBackground(name){
    let { backgroundColor, lightenFactor, activeSpace } = this.state;
    return activeSpace === name ? Color(backgroundColor).lighten(lightenFactor) : Color(backgroundColor).darken(lightenFactor); 
  }

  chooseColor(name){
    let { color, backgroundColor, lightenFactor, activeSpace } = this.state;
    return activeSpace === name ? color : Color(color).alpha(0.5); 
  }

  render() {
    let { backgroundColor, lightenFactor, activeSpace } = this.state;
    return( 
      <Provider store={store}>
        <NativeRouter>

          <View style={{ ...styles.container, backgroundColor}}>

            <StatusBar hidden={true}/>

            <View style={styles.container}>
              <Route 
                path="/" 
                exact
                style={styles.route}
                render={()=>{ 
                  return (<LaunchScreen changeColor={this.changeColor.bind(this)} changeActiveSpace={this.changeActiveSpace.bind(this)} />) }
                }/>
              <Route 
                path="/about" 
                exact
                style={styles.route}
                render={()=>{ 
                  this.changeColor.bind(this, '#5a9ce2');
                  return (<About changeColor={this.changeColor.bind(this)} changeActiveSpace={this.changeActiveSpace.bind(this)} />) }
              }/>
              <Route 
                path="/connect" 
                exact
                style={styles.route}
                render={()=>{ 
                  this.changeColor.bind(this, '#5ae28e');
                  return (<Connect changeColor={this.changeColor.bind(this)} changeActiveSpace={this.changeActiveSpace.bind(this)} />) }
              }/>
            </View>

            <View style={{...styles.navContainer, backgroundColor: Color(backgroundColor).darken(lightenFactor) , }}>
              
              <Link style={{
                    ...styles.navItem, 
                    backgroundColor: this.chooseBackground("launchscreen"),
                  }} 
                component={TouchableOpacity} 
                to="/">
                <Text style={{...styles.navItemText, color: this.chooseColor("launchscreen"), fontWeight: this.state.space === "launchscreen" ? 'bold' : 'normal' }}>Home</Text>
              </Link>
              
              <Link style={{
                    ...styles.navItem, 
                    backgroundColor: this.chooseBackground("about"),
                  }} 
                component={TouchableOpacity} 
                to="/about">
                <Text style={{...styles.navItemText, color: this.chooseColor("about"), fontWeight: this.state.space === "about" ? 'bold' : 'normal' }}>About</Text>
              </Link>
              
              <Link style={{
                    ...styles.navItem, 
                    backgroundColor: this.chooseBackground("connect"),
                  }} 
                component={TouchableOpacity} 
                to="/connect">
                <Text style={{...styles.navItemText, color: this.chooseColor("connect"), fontWeight: this.state.space === "connect" ? 'bold' : 'normal' }}>Connect</Text>
              </Link>

            </View>

          </View>

        </NativeRouter>
      </Provider>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  route: {
    display: 'flex', flex: 1,
  },
  navContainer: {
    width: '100%',
    display: 'flex',
    padding: 5,
    flexDirection: 'row',
    height: 50,
  },
  navItem: {
    flex: 1,
    marginLeft: 4, marginRight: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  navItemText: {
    color: '#fff',
    fontWeight: 'bold',
  }
}; 

