import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#333',
    // padding: 10,
    
  },
  screen: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#ddd',
    padding: 10,
    margin:1,
    // margin: 5
  },
  screenResult: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  resultText: {
    fontSize: 28,
    color: '#333',
  },
  resultTextUnit: {
    fontSize: 22,
    color: '#333',
    marginLeft: 10,
  },
  screenOperation: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginTop: 30,
  },
  operationRow: { display: 'flex', flexDirection: 'row', marginTop: 30, },
  operationText: {
    fontSize: 24,
    color: '#555',
  },
  operationTextUnit: {
    fontSize: 20,
    color: '#555',
  },
  row: {
    display: 'flex',
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    // paddingTop: 20,
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
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 5,
  },
  cellText: {
    color: '#ddd',
    fontSize: 16,
  },
});
