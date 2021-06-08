import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  NUMBERS: 5,
  CITIES: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
  POPULAR: ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'],
};

ReactDOM.render(
  <React.StrictMode>
    <App numbers={Setting.NUMBERS} cities={Setting.CITIES} popular={Setting.POPULAR}/>
  </React.StrictMode>,
  document.getElementById('root'));
