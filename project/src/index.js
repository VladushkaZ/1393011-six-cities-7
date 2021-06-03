import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  NUMBERS: 3,
};

ReactDOM.render(
  <React.StrictMode>
    <App numbers={Setting.NUMBERS}/>
  </React.StrictMode>,
  document.getElementById('root'));
