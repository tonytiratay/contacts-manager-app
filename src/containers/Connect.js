import React, { Component } from 'react';
import { connect }        from 'react-redux';
import { bindActionCreators }   from 'redux';

import { register, logout, setLoading, clearErrors } from '../actions/user-actions';

import { StatusBar, View, KeyboardAvoidingView, StyleSheet, ActivityIndicator, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';

import Color  from 'color';


import AnimatedView from '../components/AnimatedView';

class ConnectContainer extends Component {

  constructor(){
    super()
    this.state = {
      email: '', 
      password: '',
    };
  }

  componentWillMount(){
    let { changeColor, changeActiveSpace, checkMail } = this.props;
    this.props.setLoading(false);
    this.props.clearErrors();
    changeActiveSpace('home')
    changeColor('#9c5be5');
  }

  handleChange(name, value){
    this.setState({ [name]: value })
  }

  register(){
    this.props.setLoading(true);
    this.props.register(this.state.email, this.state.password)
  }

  errors(){
    let { errors } = this.props.user;
    let arr = Object.keys(errors).map((obj)=>{
        return typeof errors[obj] === "string" ? errors[obj] : false
      });
      return (
        <View style={ styles.errorZone }> 
          { arr.map((err, i)=>{
              return <Text key={i} style={styles.error}>* {err}</Text>
            })
          }
        </View> 
      )
  }

  connect(){
    return (
      <AnimatedView> 
        <KeyboardAvoidingView>
                
          <Image style={styles.image} source={require('../../public/github-logo-white.png')} />
          <Text style={styles.text}>Contacts Manager</Text>
          { this.props.user.errors ? this.errors() : false }

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
            onSubmitEditing={ this.register.bind(this) }
          />
         
          <Button 
            ref={(ref) => this.submitInput = ref}
            onPress={this.register.bind(this)}
            title={'Go'}
            />
        </KeyboardAvoidingView>
      </AnimatedView> 
    )
  }

  loggedIn(){
    return (
      <AnimatedView> 
        <Text style={styles.title}>Bienvenue ;)</Text>
        <Text style={styles.text}>Vous êtes connecté !</Text>
        <View style={styles.logout}>
          <Button onPress={this.props.logout} title="Déconnexion" />
        </View>
      </AnimatedView>

    ) 
  }

  loading(){
    return <AnimatedView><ActivityIndicator size="large" color="#fff"/></AnimatedView>
  }

	render(){
	    return(
          <View style={styles.container}><Text>Hello</Text>
            
              { this.props.user.token ? this.loggedIn() : this.props.user.loading ? this.loading() : this.connect() }
            
          </View>
	    )
	  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    fontSize: 32,
    textAlign: 'center'
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
  },
  logout: {
    display: 'flex',
    marginTop: 50,
    maxWidth: 250,
    alignSelf: 'center'
  },
  errorZone: {
    padding: 10,
    margin: 10,
    backgroundColor: 'white'
  },
  error: {
    color: 'red',
  }
});

function mapStateToProps( {todos, user} ){
  return (
    {
      user,
    }
  );
}

function mapDispatchToProps( dispatch ){
  return bindActionCreators( {
    logout,
    register,
    setLoading,
    clearErrors
  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( ConnectContainer );


 

