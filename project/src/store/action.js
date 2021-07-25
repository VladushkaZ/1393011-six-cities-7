//import { Offers } from '../mocks/offers';

export const ActionType = {
  CHANGE_CITY: 'offer/changeCity',
  FILL_OFFER_LIST: 'offer/fillOfferList',
  SORT_POPULAR: 'offer/popular',
  LOAD_OFFERS: 'data/loadOffers',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'game/redirectToRoute',
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
