import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => <div className="Display"><h1 className="Result">{result}</h1></div>;

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
