import React from 'react';
import { NativeRouter, Route } from 'react-router-native';

import LaunchScreen from './src/components/LaunchScreen';

export default class App extends React.Component {
  render() {
    return( 
      <NativeRouter>
        <Route path="/" exact component={ LaunchScreen } />
      </NativeRouter>
    );
  }
}


