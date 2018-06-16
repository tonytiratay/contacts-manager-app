import React from 'react';

import { StatusBar, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import Color  from 'color';

import LaunchScreen from './src/components/LaunchScreen';
import About from './src/components/About';
import Connect from './src/containers/Connect';



export default class ContactApp extends React.Component {
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

  menus(){
    let { backgroundColor, lightenFactor, activeSpace } = this.state;
    return (
      <View style={{...styles.navContainer, backgroundColor: Color(backgroundColor).darken(lightenFactor) , }}>
              
              <Link style={{
                    ...styles.navItem, 
                    backgroundColor: this.chooseBackground("home"),
                  }} 
                component={TouchableOpacity} 
                to="/">
                <Text style={{...styles.navItemText, color: this.chooseColor("home"), fontWeight: this.state.space === "home" ? 'bold' : 'normal' }}>Home</Text>
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
                    backgroundColor: this.chooseBackground("help"),
                  }} 
                component={TouchableOpacity} 
                to="/help">
                <Text style={{...styles.navItemText, color: this.chooseColor("help"), fontWeight: this.state.space === "help" ? 'bold' : 'normal' }}>Connect</Text>
              </Link>

            </View>
    );
  }

  render() {
    let { backgroundColor } = this.state;
    return( 
        <NativeRouter>

          <View style={{ ...styles.container, backgroundColor}}>

            <StatusBar hidden={true}/>

            <View style={styles.container}>
              <Route 
                path="/" 
                exact
                style={styles.route}
                render={ () => { 
                  return (<Connect changeColor={this.changeColor.bind(this)} changeActiveSpace={this.changeActiveSpace.bind(this)} />)
                  }
                }/>
              <Route 
                path="/about" 
                exact
                style={styles.route}
                render={()=>{ 
                  this.changeColor.bind(this);
                  return (<LaunchScreen changeColor={this.changeColor.bind(this)} changeActiveSpace={this.changeActiveSpace.bind(this)} />) }
              }/>
              <Route 
                path="/help" 
                exact
                style={styles.route}
                render={()=>{ 
                  this.changeColor.bind(this);
                  return ( <About changeColor={this.changeColor.bind(this)} changeActiveSpace={this.changeActiveSpace.bind(this)} />) }
              }/>
            </View>

            { this.menus() }

          </View>

        </NativeRouter>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
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

