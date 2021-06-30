/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import AppEntry from './src/AppEntry';
import {Provider} from 'react-redux';
import store, {persistor} from './src/store/index';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';

class App extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <AppEntry />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
