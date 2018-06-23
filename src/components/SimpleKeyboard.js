import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

const row1 = [{ value: '7' }, { value: '8' }, { value: '9' }, { value: '/', backgroundColor: '#ddd' }];
const row2 = [{ value: '4' }, { value: '5' }, { value: '6' }, { value: 'X', backgroundColor: '#ddd' }];
const row3 = [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '-', backgroundColor: '#ddd' }];
const row4 = [{ value: '0' }, { value: ',' }, { value: 'clear'  }, { value: '+', backgroundColor: '#ddd' }];

const baseRows = [row1, row2, row3, row4];

export default class SimpleKeyboard extends React.Component {

  genrateLine(line){
    return line.map((cell, i) => {

      let { backgroundColor } = cell;
      const cellStyle = [styles.cell, { backgroundColor: backgroundColor || '#fff'}];

      if (cell.value) {
        
        return (
          <TouchableOpacity key={'cell' + i} style={cellStyle}>
            <View style={cellStyle}><Text>{cell.value}</Text></View>
          </TouchableOpacity>
        )  
      
      } else {

        return (
          <View key={'cell' + i} style={cellStyle}>  
          </View>
        )
      }
      
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
        <View style={styles.saveContainer} >
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveText} >Ok</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#eee',
  },
  screen: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
  },
  screenResult: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 36
  },
  row: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  line: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveContainer: {
    // padding: 10,
  },
  saveButton: {
    width: '100%',
    display: 'flex',
    backgroundColor: '#4fd42c',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 10,
  },
  saveText: {
    color: '#fff',
  }
});
