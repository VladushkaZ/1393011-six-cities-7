import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Reviews} from './mocks/review';
import {Offers} from './mocks/offers';
import {CITIES} from './const';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const Setting = {
  NUMBERS: 3,
  POPULAR: ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'],
  PROPERTIES: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
};

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App properties={Setting.PROPERTIES} numbers={Setting.NUMBERS} cities={CITIES} popular={Setting.POPULAR} offers={Offers} reviews={Reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
