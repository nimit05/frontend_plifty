import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store , persistor} from './redux/store'
import {PersistGate} from 'redux-persist/integration/react'
import Apiroute from './routes/apirouter'
import './styles/index.scss'

ReactDOM.render(
  <Provider store = {store}>
    <PersistGate persistor = {persistor}>
      <Apiroute />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

