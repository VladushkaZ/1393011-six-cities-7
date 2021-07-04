import React, {useState} from 'react';
import PlaceCard from '../place-card/place-card';
import offerProp from '../place-card/offer-prop';
import PropTypes from 'prop-types';

function PlaceCards({offers}) {
  const [activeCard, setActiveCard] = useState(false);
  return offers.map((offer) => (
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
        checked={activeCard[offer.id]}
        onMouseEnter={setActiveCard}
      />
    </div>
  ));
}

PlaceCard.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([offerProp]).isRequired,
  ).isRequired,
};

export default PlaceCards;
