import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/SimpleKeyboard';

const Operation = ({ operationText, operationTextUnit, fontSize, viewStyle }) => {
	return (
		<View style={[styles.screenOperation, viewStyle]}>
			<View style={ styles.operationRow }>
				<Text style={[styles.resultText, { fontSize }]}>
					{operationText}
				</Text>
				<Text style={[styles.resultTextUnit, { fontSize: fontSize * .5 }]}> 
					{operationTextUnit}
				</Text>
			</View>
			
		</View>
	)
};

const Result = ({ resultText, resultTextUnit, viewStyle, fontSize}) => {
	return (
		<View style={[styles.screenResult, viewStyle]}>
			<Text style={[styles.resultText, { fontSize }]}>
				{resultText}
			</Text>
			<Text style={[styles.resultTextUnit, { fontSize: fontSize * .5 }]}> 
				{resultTextUnit}
			</Text>
		</View>
	)
	};


const Screen = ({operationText, operationTextUnit, resultText, resultTextUnit, conversionText, conversionTextUnit }) => {
	return (
		<View style={styles.screen}>
	      	<Operation 
	        	operationText={operationText} 
	        	operationTextUnit={operationTextUnit}
	        	fontSize={36} />
	      	<Result
	      		resultText={resultText}
	      		resultTextUnit={resultTextUnit}
	      		fontSize={48}/>
    	</View>
	);
};

export default Screen;