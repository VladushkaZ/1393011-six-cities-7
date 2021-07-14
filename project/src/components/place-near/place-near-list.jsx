import React from 'react';
import PlaceCard from '../place-card/place-card';
import offerProp from '../place-card/offer-prop';
import PropTypes from 'prop-types';

function NearPlaceCards({offers}) {
  const ShortCards = offers.slice(0,3);
  return ShortCards.map((offer) => (
    <div key={offer.id}>
      <PlaceCard
        {...offer}
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
