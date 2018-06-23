import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

import SimpleKeyboard from '../components/SimpleKeyboard';

class SimpleCalculator extends React.Component {
	render(){
		return(
			<View style={{ flex: 1, display: 'flex' }}>
				<SimpleKeyboard />
			</View>
		)
	}
}

function mapStateToProps( {todos, user} ){
  return (
    {
      user,
    }
  );
}

function mapDispatchToProps( dispatch ){
  return bindActionCreators( {

  }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( SimpleCalculator );