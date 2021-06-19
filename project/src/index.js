import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  NUMBERS: 3,
  CITIES: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
  POPULAR: ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'],
  PROPERTIES: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
};

ReactDOM.render(
  <React.StrictMode>
    <App properties={Setting.PROPERTIES} numbers={Setting.NUMBERS} cities={Setting.CITIES} popular={Setting.POPULAR} />
  </React.StrictMode>,
  document.getElementById('root'));
