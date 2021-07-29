import React, { useEffect, useState } from 'react';
import PlaceCard from '../place-card/place-card';
import { connect } from 'react-redux';
import { getCity, getOffers, getPopular } from '../../store/offers/selector';

function PlaceCards({ offers, popular, onListItemHover }) {
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
      previewImage={offer['preview_image']}
      price={offer.price}
      isFavorite={offer['is_favorite']}
      isPremium={offer['is_premium']}
      rating={offer.rating}
      title={offer.title}
      type={offer.type}
      onListItemHover={onListItemHover}
    />
  ));
}

const mapStateToProps = (state) => ({
  city: getCity(state),
  offers:getOffers(state),
  popular: getPopular(state),
});

export { PlaceCards };
export default connect(mapStateToProps, null)(PlaceCards);
