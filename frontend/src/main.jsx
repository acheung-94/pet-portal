import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { restoreSession } from './utils/jwt';

const store = configureStore()

const initializeApp = () =>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );

}

restoreSession().then(initializeApp)