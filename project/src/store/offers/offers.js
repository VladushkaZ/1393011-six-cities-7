import { changeCity, sortPopular, loadOffers } from '../action';
import { createReducer } from '@reduxjs/toolkit';
import { CITY, POPULAR } from '../../const';

const initialState = {
  city: CITY[0],
  offers: [],
  popular: POPULAR[0],
  isDataLoaded: false,
};

const offers = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(sortPopular, (state, action) => {
      state.popular = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    });
});

export { offers };
