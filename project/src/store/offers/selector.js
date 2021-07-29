import { NameSpace } from '../root-reducer';

export const getCity = (state) => state[NameSpace.OFFERS].city;
export const getPopular = (state) => state[NameSpace.OFFERS].popular;
export const getOffers = (state) => state[NameSpace.OFFERS].offers;
export const getDataLoaded = (state) => state[NameSpace.OFFERS].isDataLoaded;
