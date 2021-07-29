import { combineReducers } from 'redux';
import { offer } from './offer/offer';
import { offers } from './offers/offers';
import { user } from './user/user';

export const NameSpace = {
  OFFERS: 'OFFERS',
  OFFER: 'OFFER',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.OFFER]: offer,
  [NameSpace.OFFERS]: offers,
  [NameSpace.USER]: user,
});
