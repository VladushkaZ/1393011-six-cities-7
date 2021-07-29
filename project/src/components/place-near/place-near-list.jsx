import React from 'react';
import PlaceCard from '../place-card/place-card';
import offerProp from '../place-card/offer-prop';
import PropTypes from 'prop-types';

function NearPlaceCards({offers, onListItemHover}) {
  return offers.map((near) => (
    <div key={near.id}>
      <PlaceCard
        id={near.id}
        previewImage={near['preview_image']}
        price={near.price}
        isFavorite={near['is_favorite']}
        isPremium={near['is_premium']}
        rating={near.rating}
        title={near.title}
        type={near.type}
        onListItemHover={onListItemHover}
      />
    </div>
  ));
}

PlaceCard.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.oneOfType([offerProp]).isRequired),
};

export default NearPlaceCards;
