import { ActionType } from './action';
import { CITY, POPULAR } from '../const';
import { Offers } from '../mocks/offers';

const initialState = {
  city: CITY.Paris.title,
  offers: Offers.filter(({ city }) => city.name === CITY.Paris.title),
  popular: POPULAR[0],
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
    default:
      return state;
  }
};

export { reducer };
