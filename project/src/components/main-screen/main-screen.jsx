import React from 'react';
import PlaceCards from '../place-card/card-list';
import Map from '../map/map';
import PropTypes from 'prop-types';
import offerProp from '../place-card/offer-prop';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import CitiesList from '../cities-list/cities-list';
import { connect } from 'react-redux';
function MainScreen(props) {
  const { city } = props;
  const popular = props.popular;
  const SortPopular = popular.map((pop) => (
    <li key={pop} className="places__option" tabIndex="0">
      {pop}
    </li>
  ));
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.FAVORITES}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.LOGIN}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList/>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found"> places to stay in {city}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  {SortPopular}
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <PlaceCards
                  offers={props.offers}
                />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" ><Map city={city} offers={props.offers}/></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainScreen.propTypes = {
  ...offerProp,
  popular: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

export { MainScreen };
export default connect(mapStateToProps, null)(MainScreen);
