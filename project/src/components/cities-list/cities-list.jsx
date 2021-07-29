import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeCity } from '../../store/action';
import { CITY } from '../../const';
import { fetchOffersList } from '../../store/api-actions';
import { getCity } from '../../store/offers/selector';
import { getOffers } from '../../store/offers/selector';

function CitiesList(props) {
  const { city, onChangeCity, fetchOffers } = props;

  useEffect(() => {
    fetchOffers();
  }, [city]);

  const LocationCities = CITY.map((newCity) => (
    <li key={newCity.title} className="locations__item">
      <a
        onClick={() => onChangeCity(newCity)}
        className={
          city.title === newCity.title
            ? 'locations__item-link tabs__item tabs__item--active'
            : 'locations__item-link tabs__item'
        }
      >
        <span>{newCity.title}</span>
      </a>
    </li>
  ));
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">{LocationCities}</ul>
    </section>
  );
}

CitiesList.propTypes = {
  city: PropTypes.object.isRequired,
  onChangeCity: PropTypes.func.isRequired,
  fetchOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offers: getOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city, offers) {
    dispatch(changeCity(city, offers));
  },
  fetchOffers: () => dispatch(fetchOffersList()),
});

export { CitiesList };
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
