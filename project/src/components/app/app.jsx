import React from 'react';
import MainScreen from '../main-screen/main-screen';
import PropTypes from 'prop-types';
function App(props) {
  const {numbers} = props;
  return <MainScreen numbers={numbers}/>;
}

App.propTypes = {
  numbers: PropTypes.number.isRequired,
};

export default App;
