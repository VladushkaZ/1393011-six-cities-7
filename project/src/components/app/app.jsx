import React from 'react';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';
function App(props) {
  const {numbers} = props;
  const {cities} = props;
  const {popular} = props;
  return <MainScreen numbers={numbers} cities={cities} popular={popular}/>;
}

App.propTypes = {
  numbers: PropTypes.number.isRequired,
  cities: PropTypes.array.isRequired,
  popular: PropTypes.array.isRequired,
};

export default App;
