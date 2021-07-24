import React from 'react';
import MainScreen from '../main-screen/main-screen';
import FavoritesCard from '../favorites/favorites';
import LoginPage from '../login/login';
import PropertyCard from '../property/property';
import ErrorPage from '../notfound/notfound';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppRoute, isCheckedAuth } from '../../const';
import reviewProp from '../review/review-prop';
import offerProp from '../place-card/offer-prop';
import LoadingScreen from '../loading-screen/loading-screen';
import {connect} from 'react-redux';

function App(props) {
  const { numbers, popular, properties, offers, reviews, authorizationStatus, isDataLoaded } = props;
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen numbers={numbers} popular={popular}/>
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <PropertyCard properties={properties} numbers={numbers} offers={offers} reviews={reviews} onReview={() => {}} />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesCard numbers={numbers} offers={offers}/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  numbers: PropTypes.number.isRequired,
  popular: PropTypes.array.isRequired,
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
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
