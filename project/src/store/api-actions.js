import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) => {
  const { city } = _getState();
  return api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.filter(({ city: _city }) => _city.name === city.title))));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
