import {ActionType} from './action';
import {CITY} from '../const';

const initialState = {
  offerList: [],
  city: CITY.Paris.title,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.FILL_OFFER_LIST:
      return {
        ...state,
        offerList: state.offerList + action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
