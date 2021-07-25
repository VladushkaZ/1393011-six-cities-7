import { ActionType } from './action';
import { CITY, POPULAR } from '../const';
import {AuthorizationStatus} from '../const';

const initialState = {
  city: CITY[0],
  offers: [],
  popular: POPULAR[0],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
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
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export { reducer };
