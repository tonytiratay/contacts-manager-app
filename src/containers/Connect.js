import React, { Component } from 'react';
import { StatusBar, View, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Color  from 'color';
import axios from 'axios';


import AnimatedView from '../components/AnimatedView';

class Connect extends Component {

  constructor(){
    super()
    this.state = {
      email: '', 
      password: '',
      token: '',
      newUser: false,
    };
  }

  initApi(){
    return axios.create({
      baseURL: 'http://192.168.1.25:5000/api/',
      timeout: 1000,
      headers: {'Authorization': this.state.token}
    });
  }

  postLogin(){
    let { email, password } = this.state;
    this.initApi().post('/users/login', {
      email,
      password,
    })
      .then((res) => {
        this.setState({token: res.data.token});
        this.getCurrent();
      })
      .catch( err => console.log(err.response.data) )
  }

  postRegister(){
    let { email, password } = this.state;
    this.initApi().post('/users/register', {
      email,
      password,
      password2: password,
    })
      .then( (res) => {
        if (res.data) {
          this.login();
          this.setState({ newUser: true })
        }
      })
      .catch( (err) => {
        let exists = err.response.data;
        if (exists) {
          this.postLogin()
        }
        console.log(err.response.data) 
      })
  }

  getCurrent(){
    this.initApi().get('users/current')
      .then( res => console.log(res.data) )
      .catch( err => console.log(err.response) );
  }

	componentWillMount(){
		let { changeColor, changeActiveSpace } = this.props;
		changeActiveSpace('connect')
		changeColor('#9c5be5');
	}

  handleSubmit(){
    this.postRegister();
  }

  handleChange(name, value){
    this.setState({ [name]: value })
  }

  connect(){
    return (<KeyboardAvoidingView>
                
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
                  onChangeText={this.handleChange.bind(this, "password")}
                  onSubmitEditing={() => this.handleSubmit.bind(this)}/>
                <Button 
                  onPress={this.handleSubmit.bind(this)}
                  title={'Go'}
                  />
              </KeyboardAvoidingView>)
  }

  loggedIn(){
    return (
      <View> 
        <Text style={styles.title}>Félicitations ;)</Text>
        <Text style={styles.bigText}>Vous êtes connecté !</Text>
      </View>

    ) 
  }

	render(){
	    return(
          <View style={styles.container}>
            <AnimatedView>
              { this.state.token ? this.loggedIn() : this.connect() }
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
