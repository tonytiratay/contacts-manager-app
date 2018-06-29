import React from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function createButton(value, type, onClick, render ){
	return { 
		value, 
		type, 
		onClick || ()=>{},
		render, 
	}
};

let numbers, topTools, rightTools, bottomTools;
[0,1,2,3,4,5,6,7,8,9].map((num) => {
	numbers.push(createButton(num, 'number', ()=>{}, false))
});

console.log(numbers)


export const topRow = [
	{ value: '( )', backgroundColor: '#2C2C2C' }, 
	{ value: '^', backgroundColor: '#2C2C2C' }, 
	{ value: '%', backgroundColor: '#2C2C2C' }, 
	{ value: 'C', backgroundColor: '#992918' }, 
];
export const topNumbers = [
	{ value: '7' }, 
	{ value: '8' }, 
	{ value: '9' }, 
	{ value: '/', backgroundColor: '#333' }
];
export const middleNumbers = [
	{ value: '4' }, 
	{ value: '5' },
	{ value: '6' },
	{ value: 'X', backgroundColor: '#333' }
];
export const bottomNumbers = [
	{ value: '1' }, 
	{ value: '2' }, 
	{ value: '3' }, 
	{ value: '-', backgroundColor: '#333' }
];
export const lastNumbers = [
	{ value: '0' }, 
	{ value: ',' }, 
	{ 
		value: 'Params', 
		backgroundColor:'#4C4C4C', 
		render: () => <Ionicons name="md-settings" size={16}/>  
	}, 
	{ value: '+', backgroundColor: '#333' }
];
export const options = [
	{ 
		value: 'Conversion HT -> TTC', 
		backgroundColor: '#222', flex:3, 
		render: () => <Text>HT  <Ionicons name="md-arrow-forward" size={16}/>  TTC</Text> 
	}, 
	{ 
		value: '=', 
		backgroundColor: '#149291', 
		render: () => <Ionicons name="md-checkmark" size={16}/> 
	} 
];

export const baseRows = [ topRow, topNumbers, middleNumbers ,bottomNumbers, lastNumbers, options ];

