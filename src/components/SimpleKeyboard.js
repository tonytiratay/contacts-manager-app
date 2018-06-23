import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

const row0 = [{ value: '(', backgroundColor: '#222' }, { value: ')', backgroundColor: '#222' }, { value: '^', backgroundColor: '#222' }, { value: '%', backgroundColor: '#222' }, ];
const row1 = [{ value: '7' }, { value: '8' }, { value: '9' }, { value: '/', backgroundColor: '#333' }];
const row2 = [{ value: '4' }, { value: '5' }, { value: '6' }, { value: 'X', backgroundColor: '#333' }];
const row3 = [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '-', backgroundColor: '#333' }];
const row4 = [{ value: '0' }, { value: ',' }, { value: 'C'  }, { value: '+', backgroundColor: '#333' }];
const row5 = [{ value: 'Param', backgroundColor: '#222' }, { value: 'HT', backgroundColor: '#c17400' }, { value: 'TTC', backgroundColor: '#c17400' }, { value: '=', backgroundColor: '#28687a' }, ];

const baseRows = [row0, row1, row2, row3, row4, row5];

export default class SimpleKeyboard extends React.Component {

  genrateLine(line){
    return line.map((cell, i) => {

      let { backgroundColor } = cell;
      const cellStyle = [styles.cell];
      const cellContainerStyle = [styles.cellContainer, { backgroundColor: backgroundColor || '#444', flex: cell.flex || 1}];

      return (
          <TouchableOpacity key={'cell' + i} style={cellContainerStyle}>
            <View style={cellStyle}><Text style={styles.cellText} >{cell.value}</Text></View>
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
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.screen}>
          <View style={styles.screenResult}>
            <Text style={styles.resultText} >0</Text>
          </View>
        </View>
        {this.generateRow()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#222',
  },
  screen: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#ccc',
  },
  screenResult: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 36,
    color: '#333',
  },
  row: {
    display: 'flex',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  line: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 6,
    borderRadius: 5,
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    color: '#ddd',
    fontSize: 16,
  },
});
