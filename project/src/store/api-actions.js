import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute, AppRoute} from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) => {
  const { city } = _getState();
  return api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.filter(({ city: _city }) => _city.name === city.title))));
};

export const getOfferByID = (id) => (dispatch, _getState, api) => api.get(APIRoute.OFFERS)
  .then(({data}) => {
    dispatch(ActionCreator.loadOffer(data.find(({ id: offerID }) => Number(offerID) === Number(id))));
  });

export const getReviewByID = (id) => (dispatch, _getState, api) => api.get(`${APIRoute.REVIEW}/${id}`)
  .then(({data}) => {
    dispatch(ActionCreator.loadReview(data));
  });

export const getNearbyByID = (id) => (dispatch, _getState, api) => api.get(`${APIRoute.OFFERS}/${id}/nearby`)
  .then(({data}) => {
    dispatch(ActionCreator.loadNearby(data));
  });

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.loadUserData(data));
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.loadUserData(data));
      localStorage.setItem('token', data.token);
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const createComment = ( {id, comment, rating}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEW}/${id}`, {comment, rating})
    .then(({data}) => {
      dispatch(ActionCreator.loadReview(
        data.map((review) => (review)),
      ));
    })
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
