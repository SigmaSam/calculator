import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, clickHandler, color, wide,
}) => {
  const backgroundColor = color;
  const handleClick = (buttonName) => {
    clickHandler(buttonName.target.innerText);
  };
  const width = wide ? '50%' : '25%';
  return (
    <button
      onClick={handleClick}
      type="button"
      style={{ backgroundColor, width }}
      className="button"
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
  color: PropTypes.string,
  wide: PropTypes.string,
};

Button.defaultProps = {
  name: '',
  clickHandler: null,
  color: 'orange',
  wide: false,
};
export default Button;
