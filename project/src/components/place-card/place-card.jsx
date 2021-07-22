import React from 'react';
import offerProp from './offer-prop';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
function PlaceCard(offer) {
  const {
    id,
    previewImage,
    price,
    isFavorite,
    isPremium,
    rating,
    title,
    type,
  } = offer;
  return (
    <article className="cities__place-card place-card">
      {(isPremium)
      && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.ROOM}=${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            alt="Place image"
            style={{
              width: '260',
              height: '200',
            }}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`${isFavorite ? 'place-card__bookmark-button--active' : ''} place-card__bookmark-button button`} type="button">
            <svg
              className="place-card__bookmark-icon"
              style={{ width: '18', height: '19' }}
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating*20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`${AppRoute.ROOM}=${id}`}>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  ...offerProp,
};

export default PlaceCard;
