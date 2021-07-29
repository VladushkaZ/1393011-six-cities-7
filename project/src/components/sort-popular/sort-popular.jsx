import React from 'react';
import { POPULAR } from '../../const';
import { sortPopular } from '../../store/action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPopular } from '../../store/offers/selector';

function SortPopular(props) {
  const { popular, onSortPopular } = props;
  const Sort = POPULAR.map((pop) => (
    <li onClick={() => onSortPopular(pop)} key={pop} className="places__option" tabIndex="0">
      {pop}
    </li>
  ));
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {popular}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Sort}
      </ul>
    </form>
  );
}

SortPopular.propTypes = {
  popular: PropTypes.string.isRequired,
  onSortPopular: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  popular: getPopular(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSortPopular(popular) {
    dispatch(sortPopular(popular));
  },
});

export { SortPopular };
export default connect(mapStateToProps, mapDispatchToProps)(SortPopular);
