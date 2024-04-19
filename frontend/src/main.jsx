import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import { restoreSession } from './utils/jwt';
import { createReminder, fetchPetReminders, updateReminder } from './store/reminderReducer';
import { destroyReminder } from './store/reminderReducer';
import { destroyPet, updatePet } from './store/petReducer';
const store = configureStore()
window.store = store
window.fetchPetReminders = fetchPetReminders
window.createReminder = createReminder
window.destroyReminder = destroyReminder
window.updateReminder = updateReminder
window.fetchPetReminders = fetchPetReminders
window.updatePet = updatePet

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