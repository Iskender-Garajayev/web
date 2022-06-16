import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter as Router} from "react-router-dom";
import { StateProvider } from './components/contacts/StateProvider';
import {initialState} from './components/contacts/initialState'
import reducer from './components/contacts/Reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <StateProvider initialSate={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>
);


reportWebVitals();
