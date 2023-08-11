import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import './index.css';
import App from './App';
import i18n from './i18n/i18n';
import GlobalState from './context/GlobalState';

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <GlobalState>
        <App />
      </GlobalState>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
