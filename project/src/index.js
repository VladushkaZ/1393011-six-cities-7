import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import {Reviews} from './mocks/review';
//import {Offers} from './mocks/offers';
import {CITIES} from './const';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {ActionCreator} from './store/action';
import {checkAuth, fetchOffersList} from './store/api-actions';
import {AuthorizationStatus} from './const';

const api = createAPI(
  () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const Setting = {
  NUMBERS: 3,
  PROPERTIES: ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'],
};

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App properties={Setting.PROPERTIES} cities={CITIES} reviews={Reviews}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
