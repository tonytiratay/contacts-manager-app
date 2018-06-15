import React, { Component } from 'react';
import { StatusBar, View, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Color  from 'color';

import AnimatedView from '../components/AnimatedView';

class Connect extends Component {

  constructor(){
    super()
    this.state = {
      email: '', 
      password: '',
    };
  }

	componentWillMount(){
		let { changeColor, changeActiveSpace } = this.props;
		changeActiveSpace('connect')
		changeColor('#9c5be5');
	}

  handleChange(name, value){
    this.setState({ [name]: value })
  }

	render(){
	    return(
          <View style={styles.container}>
            <AnimatedView>
              <KeyboardAvoidingView>
                
                <Text style={styles.title}>CONTACT</Text>
                <Text style={styles.bigText}>MANAGER</Text>
                <TextInput  
                  style={styles.input}
                  required
                  underlineColorAndroid="transparent"
                  ref={(ref) => this.emailInput = ref}
                  autoFocus={true}
                  keyboardType="email-address"
                  value = {this.state.email}
                  placeholder="votre@mail.com"
                  returnKeyType="next"
                  spellCheck={false}
                  onSubmitEditing={() => this.passwordInput.focus()}
                  onChangeText={this.handleChange.bind(this, "email")}/>
               
                <TextInput  
                  style={styles.input}
                  required
                  underlineColorAndroid="transparent"
                  ref={(ref) => this.passwordInput = ref}
                  value = {this.state.password}
                  placeholder="Mot de passe"
                  returnKeyType="go"
                  secureTextEntry={true}
                  spellCheck={false}
                  onChangeText={this.handleChange.bind(this, "password")}/>
              </KeyboardAvoidingView>
            </AnimatedView>
          </View>
	    )
	  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  title: {
    color: '#fff',
    fontSize: 56,
    fontWeight: 'bold',
  },
  bigText: {
    color: '#fff',
    fontSize: 36,
    marginBottom: 40,
  },
  image: {
    width: 300,
    height: 100,
  },
  input: {
    padding: 10,
    marginBottom: 15,
    fontSize: 20,
    color: Color("#fff").lighten(.7),
    borderBottomWidth: 1,
    borderColor: Color("#fff").alpha(.4),
    textAlign: 'left',
  }
});

export default Connect
