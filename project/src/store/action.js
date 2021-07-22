//import { Offers } from '../mocks/offers';

export const ActionType = {
  CHANGE_CITY: 'offer/changeCity',
  FILL_OFFER_LIST: 'offer/fillOfferList',
  SORT_POPULAR: 'offer/popular',
  LOAD_OFFERS: 'data/loadOffers',
};

export const ActionCreator = {
  changeCity: (currentCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: {
      city: currentCity,
    },
  }),
  sortPopular: (pop) => ({
    type: ActionType.SORT_POPULAR,
    payload: {
      popular: pop,
    },
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
};
