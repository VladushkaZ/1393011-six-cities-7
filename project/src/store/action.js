export const ActionType = {
  CHANGE_CITY: 'offer/changeCity',
  FILL_OFFER_LIST: 'offer/fillOfferList',
};

export const ActionCreator = {
  changeCity: (currentCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: currentCity,
  }),
  offerList: (data) => ({
    type: ActionType.FILL_OFFER_LIST,
    payload: data,
  }),
};
