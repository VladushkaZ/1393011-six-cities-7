import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

import {Reviews} from './mocks/review';
import {Offers} from './mocks/offers';

const Setting = {
  NUMBERS: 3,
  CITIES: ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'],
  POPULAR: ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'],
  PROPERTIES: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
};

ReactDOM.render(
  <React.StrictMode>
    <App properties={Setting.PROPERTIES} numbers={Setting.NUMBERS} cities={Setting.CITIES} popular={Setting.POPULAR} offers={Offers} reviews={Reviews}/>
  </React.StrictMode>,
  document.getElementById('root'));
