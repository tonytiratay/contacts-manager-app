import React from 'react';
import { StatusBar, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Color  from 'color';
import LaunchScreen from './src/components/LaunchScreen';
import About from './src/components/About';
import Connect from './src/containers/Connect';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      backgroundColor: '#9c5be5',
      lightenFactor: '0.1',
      activeSpace: 'launchscreen',
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
    return activeSpace === name ? backgroundColor : Color(backgroundColor).lighten(lightenFactor); 
  }

  render() {
    let { backgroundColor, lightenFactor, activeSpace } = this.state;
    return( 

      <NativeRouter>

        <View style={{ ...styles.container, backgroundColor}}>

          <StatusBar hidden={true}/>

          <View style={styles.container}>
            <Route 
              path="/" 
              exact
              render={()=>{ 
                return (<LaunchScreen changeColor={this.changeColor.bind(this)} changeActiveSpace={this.changeActiveSpace.bind(this)} />) }
              }/>
            <Route 
              path="/about" 
              exact
              render={()=>{ 
                this.changeColor.bind(this, '#5a9ce2');
                return (<About changeColor={this.changeColor.bind(this)} changeActiveSpace={this.changeActiveSpace.bind(this)} />) }
            }/>
            <Route 
              path="/connect" 
              exact
              render={()=>{ 
                this.changeColor.bind(this, '#5ae28e');
                return (<Connect changeColor={this.changeColor.bind(this)} changeActiveSpace={this.changeActiveSpace.bind(this)} />) }
            }/>
          </View>

          <View style={{...styles.navContainer, backgroundColor, }}>
            
            <Link style={{
                  ...styles.navItem, 
                  backgroundColor: this.chooseBackground("launchscreen"),
                }} 
              component={TouchableOpacity} 
              to="/">
              <Text style={{...styles.navItemText}}>Home</Text>
            </Link>
            
            <Link style={{
                  ...styles.navItem, 
                  backgroundColor: this.chooseBackground("about"),
                }} 
              component={TouchableOpacity} 
              to="/about">
              <Text style={{...styles.navItemText}}>About</Text>
            </Link>
            
            <Link style={{
                  ...styles.navItem, 
                  backgroundColor: this.chooseBackground("connect"),
                }} 
              component={TouchableOpacity} 
              to="/connect">
              <Text style={{...styles.navItemText}}>Connect</Text>
            </Link>

          </View>

        </View>

      </NativeRouter>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    // borderTopWidth: 1,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItemText: {
    color: '#fff',
  }
}; 

