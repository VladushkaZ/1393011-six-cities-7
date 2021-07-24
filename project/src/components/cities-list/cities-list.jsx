import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import { CITY } from '../../const';
import { fetchOffersList } from '../../store/api-actions';

function CitiesList(props) {
  const { city, changeCity, fetchOffers } = props;

  useEffect(() => {
    fetchOffers();
  }, [city]);

  const LocationCities = CITY.map((newCity) => (
    <li key={newCity.title} className="locations__item">
      <a
        onClick={() => changeCity(newCity)}
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
  city: PropTypes.array.isRequired,
  changeCity: PropTypes.func.isRequired,
  fetchOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city, offers) {
    dispatch(ActionCreator.changeCity(city, offers));
  },
  fetchOffers: () => dispatch(fetchOffersList()),
});

export { CitiesList };
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
