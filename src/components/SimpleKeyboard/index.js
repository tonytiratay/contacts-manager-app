import React from 'react';
import { Text, View, TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import { styles } from '../styles/SimpleKeyboard';

import Screen from './Screen';

import { baseRows } from './buttons';

export default class SimpleKeyboard extends React.Component {

  genrateLine(line){
    return line.map((cell, i) => {

      let { backgroundColor, flex, render, value } = cell;
      const cellStyle = [styles.cell, { backgroundColor: backgroundColor || '#444' }];
      const cellContainerStyle = [styles.cellContainer, { flex: flex || 1}];
      let content = render && render() || value;
      return (
          <TouchableOpacity key={'cell' + i} style={cellContainerStyle}>
            <View style={cellStyle}><Text style={styles.cellText} >{content}</Text></View>
          </TouchableOpacity>
        )  
      
    });
  }

  generateRow(){

    const rows = baseRows.map((line, i) => {
      return (
        <View key={'row' + i} style={styles.line}>
          {this.genrateLine(line)}
        </View>
        )
    });

    return <View style={styles.row}>{rows}</View>
  }

  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar hidden={true}/>
        <Screen 
          operationText="360 x 5 x 4 x 3" 
          operationTextUnit="HT"
          conversionText="25 920"
          conversionTextUnit="TTC"
          resultText="21 600"
          resultTextUnit="HT" />
        {this.generateRow()}
      </View>
    );
  }
}

