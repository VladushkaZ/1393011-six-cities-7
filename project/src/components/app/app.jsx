import React from 'react';
import MainScreen from '../main-screen/main-screen';
import FavoritesCard from '../favorites/favorites';
import LoginPage from '../login/login';
import PropertyCard from '../property/property';
import ErrorPage from '../notfound/notfound';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AppRoute } from '../../const';
import reviewProp from '../review/review-prop';
import offerProp from '../place-card/offer-prop';

function App(props) {
  const { numbers, cities, popular, properties, offers, reviews } = props;
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainScreen numbers={numbers} cities={cities} popular={popular} offers={offers}/>
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <PropertyCard properties={properties} numbers={numbers} offers={offers} reviews={reviews} onReview={() => {}} />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesCard numbers={numbers} cities={cities} offers={offers}/>
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
  cities: PropTypes.array.isRequired,
  popular: PropTypes.array.isRequired,
  properties: PropTypes.array.isRequired,
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([offerProp]).isRequired,
  ),
  reviews: PropTypes.arrayOf(
    PropTypes.oneOfType([reviewProp]).isRequired,
  ),
};

export default App;
