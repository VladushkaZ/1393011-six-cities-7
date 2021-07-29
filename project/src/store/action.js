import { createAction } from '@reduxjs/toolkit';

export const ActionType = {
  CHANGE_CITY: 'offers/changeCity',
  SORT_POPULAR: 'offers/popular',
  LOAD_OFFER: 'offer/loadOffer',
  LOAD_REVIEW: 'offer/loadReview',
  LOAD_OFFERS: 'offers/loadOffers',
  LOAD_NEARBY: 'offer/loadNearby',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirectToRoute',
  LOAD_USER_DATA: 'user/login',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const sortPopular = createAction(ActionType.SORT_POPULAR, (popular) => ({
  payload: popular,
}));

export const loadOffers = createAction(
  ActionType.LOAD_OFFERS,
  (offers) => ({
    payload: offers,
    isDataLouded:true,
  }),
);

export const loadOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({
  payload: offer,
}));

export const loadReview = createAction(ActionType.LOAD_REVIEW, (reviews) => ({
  payload: reviews,
}));

export const loadUserData = createAction(
  ActionType.LOAD_USER_DATA,
  (userData) => ({
    payload: userData,
  }),
);

export const loadNearby = createAction(
  ActionType.LOAD_NEARBY,
  (nearPlases) => ({
    payload: nearPlases,
  }),
);

export const requireAuthorization = createAction(
  ActionType.REQUIRED_AUTHORIZATION,
  (status) => ({
    payload: status,
  }),
);

export const logout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(
  ActionType.REDIRECT_TO_ROUTE,
  (url) => ({
    payload: url,
  }),
);
