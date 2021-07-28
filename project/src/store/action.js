
export const ActionType = {
  CHANGE_CITY: 'offer/changeCity',
  FILL_OFFER_LIST: 'offer/fillOfferList',
  SORT_POPULAR: 'offer/popular',
  LOAD_OFFER: 'data/loadOffer',
  LOAD_REVIEW: 'data/loadReview',
  LOAD_OFFERS: 'data/loadOffers',
  LOAD_NEARBY: 'data/loadNearby',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  CREATE_COMMENT: 'user/createComment',
  REDIRECT_TO_ROUTE: 'offer/redirectToRoute',
  LOAD_USER_DATA: 'user/login',
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
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  loadReview: (reviews) => ({
    type: ActionType.LOAD_REVIEW,
    payload: reviews,
  }),
  loadUserData: (userData) => ({
    type: ActionType.LOAD_USER_DATA,
    payload: userData,
  }),
  loadNearby: (nearPlases) => ({
    type: ActionType.LOAD_NEARBY,
    payload: nearPlases,
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
