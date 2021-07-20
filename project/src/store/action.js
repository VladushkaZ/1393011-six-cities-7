import { Offers } from '../mocks/offers';

export const ActionType = {
  CHANGE_CITY: 'offer/changeCity',
  FILL_OFFER_LIST: 'offer/fillOfferList',
  SORT_POPULAR: 'offer/popular',
};

export const ActionCreator = {
  changeCity: (currentCity) => ({
    type: ActionType.CHANGE_CITY,
    payload: {
      city: currentCity,
      offers: Offers.filter(({ city }) => currentCity === city.name),
    },
  }),
  sortPopular: (pop) => ({
    type: ActionType.SORT_POPULAR,
    payload: {
      popular: pop,
    },
  }),
};
