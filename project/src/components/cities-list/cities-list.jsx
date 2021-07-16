import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../store/action';
import { CITIES } from '../../const';

function CitiesList(props) {
  const { city, changeCity } = props;
  const LocationCities = CITIES.map((newCity) => (
    <li key={newCity} className="locations__item">
      <a
        onClick={() => changeCity(newCity)}
        className={
          city === newCity
            ? 'locations__item-link tabs__item tabs__item--active'
            : 'locations__item-link tabs__item'
        }
      >
        <span>{newCity}</span>
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
  changeCity: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export { CitiesList };
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
