import Navigation from './app/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import storages from './app/store';
import React, {Component} from 'react';

const {store, persistor} = storages();

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
