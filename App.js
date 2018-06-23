import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './src/store';

import ContactApp from './ContactApp';
import SimpleCalculator from './src/containers/SimpleCalculator';


export default class App extends React.Component {
  componentDidCatch(error, info) {
    console.log(error)
  }

  render() {
    
    return( 
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SimpleCalculator />
        </PersistGate>
      </Provider>
    );
  }
}


