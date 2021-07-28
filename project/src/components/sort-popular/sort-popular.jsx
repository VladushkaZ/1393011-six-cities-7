import React from 'react';
import { POPULAR } from '../../const';
import { ActionCreator } from '../../store/action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function SortPopular(props) {
  const { popular, sortPopular } = props;
  const Sort = POPULAR.map((pop) => (
    <li onClick={() => sortPopular(pop)} key={pop} className="places__option" tabIndex="0">
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
  sortPopular: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  popular: state.popular,
});

const mapDispatchToProps = (dispatch) => ({
  sortPopular(popular) {
    dispatch(ActionCreator.sortPopular(popular));
  },
});

export { SortPopular };
export default connect(mapStateToProps, mapDispatchToProps)(SortPopular);
