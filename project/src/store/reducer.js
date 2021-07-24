import { ActionType } from './action';
import { CITY, POPULAR } from '../const';
//import { Offers } from '../mocks/offers';

const initialState = {
  city: CITY[0],
  offers: [],
  popular: POPULAR[0],
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.SORT_POPULAR:
      return {
        ...state,
        ...action.payload,
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export { reducer };
