import React from 'react';
import FavoriteCard from '../favorite-card/favorite-card';
import PropTypes from 'prop-types';
import offerProp from '../place-card/offer-prop';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../header/header';
function FavoritesCard(props) {
  const {offers} = props;
  const FavoriteCards = offers.map((offer) =>
    offer.isFavorite ? (
      <div key={offer.id} className="favorites__card place-card">
        <FavoriteCard
          id={offer.id}
          previewImage={offer.previewImage}
          price={offer.price}
          rating={offer.rating}
          title={offer.title}
          type={offer.type}
        />
      </div>
    ) : (
      ''
    ));
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <Link className="locations__item-link" to="">
                      <span>Amsterdam</span>
                    </Link>
                  </div>
                </div>
                <div className="favorites__places">{FavoriteCards}</div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

FavoritesCard.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.oneOfType([offerProp]).isRequired)
    .isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  authorizationStatus: state.authorizationStatus,
});

export { FavoritesCard };
export default connect(mapStateToProps, null)(FavoritesCard);
