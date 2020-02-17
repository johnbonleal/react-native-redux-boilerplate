import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import TestScreen from './Test';
import configureStore from './redux/store';

const {store, persistor} = configureStore();

const VentenyApp = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <TestScreen />
    </PersistGate>
  </Provider>
);

export default VentenyApp;
