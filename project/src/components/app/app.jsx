import React from 'react';
import MainScreen from '../main-screen/main-screen';
import FavoritesCard from '../favorites/favorites';
import LoginPage from '../login/login';
import PropertyCard from '../property/property';
import ErrorPage from '../notfound/notfound';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppRoute, isCheckedAuth } from '../../const';
import reviewProp from '../review/review-prop';
import offerProp from '../place-card/offer-prop';
import LoadingScreen from '../loading-screen/loading-screen';
import {connect} from 'react-redux';
import PrivateRoute from '../private-rout/private-rout';
import PrivateLogin from '../private-rout/private-login';
import browserHistory from '../../browser-history';
import { getAuthorizationStatus } from '../../store/user/selector';
import { getDataLoaded } from '../../store/offers/selector';

function App(props) {
  const { properties, offers, reviews, authorizationStatus, isDataLoaded } = props;
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (

    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen/>
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <PropertyCard properties={properties} offers={offers} reviews={reviews} onReview={() => {}} />
        </Route>
        <PrivateRoute exact path={AppRoute.FAVORITES}
          render={({history}) =><FavoritesCard offers={offers} onReplayButtonClick={() => history.push(AppRoute.LOGIN)}/>}
        />
        <PrivateLogin exact path={AppRoute.LOGIN}
          render={({history}) => <LoginPage  onReplayButtonClick={() => history.push(AppRoute.ROOT)}/>}
        />
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  properties: PropTypes.array.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([offerProp]).isRequired,
  ),
  reviews: PropTypes.arrayOf(
    PropTypes.oneOfType([reviewProp]).isRequired,
  ),
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  isDataLoaded: getDataLoaded(state),
});

export {App};
export default connect(mapStateToProps, null)(App);
