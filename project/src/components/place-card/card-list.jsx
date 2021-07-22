import React, { useEffect, useState } from 'react';
import PlaceCard from '../place-card/place-card';
import offerProp from '../place-card/offer-prop';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function PlaceCards({ offers, popular, onListItemHover }) {
  const [activeCard, setActiveCard] = useState(false);
  const [sortedOffers, setSortedOffers] = useState(offers);

  useEffect(() => {
    setSortedOffers(offers);
  }, [offers]);

  useEffect(() => {
    switch(popular) {
      case 'Price: low to high': setSortedOffers([...offers].sort((a, b) => a.price - b.price));
        break;
      case 'Price: high to low': setSortedOffers([...offers].sort((a, b) => b.price - a.price));
        break;
      case 'Top rated first': setSortedOffers([...offers].sort((a, b) => b.rating - a.rating));
        break;
      case 'Popular':
      default: setSortedOffers(offers);
        break;
    }
  }, [popular]);

  return sortedOffers.map((offer) => (
    <PlaceCard
      key={offer.id}
      id={offer.id}
      city={offer.city}
      previewImage={offer.preview_image}
      price={offer.price}
      isFavorite={offer.is_favorite}
      isPremium={offer.is_premium}
      rating={offer.rating}
      title={offer.title}
      type={offer.type}
      checked={activeCard[offer.id]}
      onMouseEnter={setActiveCard}
    />
  ));
}

PlaceCards.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.oneOfType([offerProp]).isRequired)
    .isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  popular: state.popular,
});

export { PlaceCards };
export default connect(mapStateToProps, null)(PlaceCards);
