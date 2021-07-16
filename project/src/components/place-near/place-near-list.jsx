import React from 'react';
import PlaceCard from '../place-card/place-card';
import offerProp from '../place-card/offer-prop';
import PropTypes from 'prop-types';

function NearPlaceCards({offers}) {
  return offers.slice(0,3).map((offer) => (
    <div key={offer.id}>
      <PlaceCard
        id={offer.id}
        previewImage={offer.previewImage}
        price={offer.price}
        isFavorite={offer.isFavorite}
        isPremium={offer.isPremium}
        rating={offer.rating}
        title={offer.title}
        type={offer.type}
      />
    </div>
  ));
}

PlaceCard.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([offerProp]).isRequired,
  ).isRequired,
};

export default NearPlaceCards;
