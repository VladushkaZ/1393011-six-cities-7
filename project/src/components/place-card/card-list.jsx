import React, { useState } from 'react';
import PlaceCard from '../place-card/place-card';
import offerProp from '../place-card/offer-prop';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function PlaceCards(props) {
  const [activeCard, setActiveCard] = useState(false);
  const { city } = props;
  return props.offers.map((offer) => (
    city === offer.city.name ? (
      <PlaceCard
        id={offer.id}
        city={offer.city}
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
    ) : (
      ''
    )
  ));
}

PlaceCards.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.oneOfType([offerProp]).isRequired)
    .isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

export { PlaceCards };
export default connect(mapStateToProps, null)(PlaceCards);
