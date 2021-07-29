import { loadOffer, loadReview, loadNearby } from '../action';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  offer: null,
  reviews: [],
  nearPlases: [],
};

const offer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(loadReview, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNearby, (state, action) => {
      state.nearPlases = action.payload;
    });
});

export { offer };
