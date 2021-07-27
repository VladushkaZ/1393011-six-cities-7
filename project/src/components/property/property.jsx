import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';
import PlaceReview from '../review/review';
import NearPlaceCards from '../place-near/place-near-list';
import reviewProp from '../review/review-prop';
import ReviewForm from '../review/add-review';
import { AppRoute, CITY, AuthorizationStatus } from '../../const';
import { Link, withRouter } from 'react-router-dom';
import Map from '../map/map';
import { connect } from 'react-redux';
import { getOfferByID, getReviewByID, getNearbyByID } from '../../store/api-actions';
import ErrorPage from '../notfound/notfound';
import { logout } from '../../store/api-actions';
function PropertyCard(props) {
  const { getByID, match: { params: { id: offerID } }, offer, offers, reviews, nearby, authorizationStatus, logoutApp} = props;
  const [selectedPoint, setSelectedPoint] = useState({});
  const onListItemHover = (offersID) => {
    const currentPoint = offers.find(({ id }) =>
      Number(id) === Number(offersID),
    );
    setSelectedPoint(currentPoint);
  };
  useEffect(() => {
    getByID(offerID);
  }, [offerID]);
  if (!offer) {
    return <ErrorPage/>;
  }

  const adapt = (key) =>
    key.replace(/_([a-z])/g, (_, m) => m.toUpperCase());
  const trasnform = (o, replacer) =>
    Object.fromEntries(Object.entries(o).map(([k, v]) => [replacer(k), v]));
  const offersNew = trasnform(offer, adapt);
  const {
    description,
    price,
    maxAdults,
    isFavorite,
    host,
    rating,
    title,
    type,
    bedrooms,
    isPremium,
    images,
    goods,
  } = offersNew;
  const PlaceProperties = goods.map((good) => (
    <li key={good} className="property__inside-item">
      {good}
    </li>
  ));
  const PlacePicture = images.map((image) => (
    <div key={image} className="property__image-wrapper">
      <img className="property__image" src={image} alt="Photo studio" />
    </div>
  ));
  const numReviews = reviews.length;
  const PlaceReviews = reviews.map((review) => (
    <li key={review.id}>
      <PlaceReview
        id={review.id}
        comment={review.comment}
        date={review.date}
        rating={review.rating}
        user={review.user}
      />
    </li>
  ));
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.ROOT}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width="81"
                  height="41"
                />
              </Link>
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

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">{PlacePicture}</div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={`${
                    isFavorite ? 'property__bookmark-button--active' : ''
                  } property__bookmark-button button`}
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: `${rating * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">{PlaceProperties}</ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={`${
                      host['is_pro'] ? 'property__avatar-wrapper--pro' : ''
                    } property__avatar-wrapper user__avatar-wrapper`}
                  >
                    <img
                      className="property__avatar user__avatar"
                      src={host['avatar_url']}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  <span className="property__user-status">
                    {host['is_pro'] ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">{description}</div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{numReviews}</span>
                </h2>
                <ul className="reviews__list">{PlaceReviews}</ul>
                {
                  authorizationStatus === AuthorizationStatus.AUTH?
                    <ReviewForm id={offerID}/>: ''
                }
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city={CITY} offers={nearby} selectedPoint={selectedPoint}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <NearPlaceCards offers={nearby} onListItemHover={onListItemHover}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

PropertyCard.propTypes = {
  ...reviewProp,
};
const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  offer: state.offer,
  reviews: state.reviews,
  nearby: state.nearby,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  getByID(id) {
    dispatch(getOfferByID(id));
    dispatch(getReviewByID(id));
    dispatch(getNearbyByID(id));
  },
  logoutApp() {
    dispatch(logout());
  },
});

export { PropertyCard };
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PropertyCard));
