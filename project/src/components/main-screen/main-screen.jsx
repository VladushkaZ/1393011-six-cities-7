import React, {useState} from 'react';
import PlaceCards from '../place-card/card-list';
import SortPopular from '../sort-popular/sort-popular';
import Map from '../map/map';
import offerProp from '../place-card/offer-prop';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Link } from 'react-router-dom';
import CitiesList from '../cities-list/cities-list';
import { connect } from 'react-redux';
import { logout } from '../../store/api-actions';
function MainScreen(props) {
  const { city, offers, authorizationStatus, logoutApp } = props;
  const [selectedPoint, setSelectedPoint] = useState({});
  const onListItemHover = (offerID) => {
    const currentPoint = offers.find(({ id }) =>
      Number(id) === Number(offerID),
    );
    setSelectedPoint(currentPoint);
  };
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
              {authorizationStatus === AuthorizationStatus.AUTH ? (
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
                    <Link
                      className="header__nav-link"
                      to="/"
                      onClick={(evt) => {
                        evt.preventDefault();

                        logoutApp();
                      }}
                    >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="header__nav-list">
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.LOGIN}>
                      <span className="header__signout">Sign in</span>
                    </Link>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList city={city} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in {city.title}
              </b>
              <SortPopular />
              <div className="cities__places-list places__list tabs__content">
                <PlaceCards offers={props.offers} onListItemHover={onListItemHover}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city.title} offers={offers} selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainScreen.propTypes = {
  ...offerProp,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  logoutApp() {
    dispatch(logout());
  },
});

export { MainScreen };
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
