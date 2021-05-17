import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, clickHandler,
}) => {
  const handleClick = (buttonName) => {
    clickHandler(buttonName.target.innerText);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  clickHandler: null,
};
export default Button;
