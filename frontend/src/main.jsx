import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { restoreSession } from './utils/jwt';


const initializeApp = () => {
  const store = configureStore()
  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

}

if (import.meta.env.PROD) {
  initializeApp()
}else{
  restoreSession().then(initializeApp)
}

// restoreSession().then(initializeApp)