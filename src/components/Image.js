import React from 'react';
import PropTypes from 'prop-types';

import './Image.scss';

function Image(props) {
  const {
    src,
    description,
    width,
    height,
  } = props;

  const style = {
    width,
    height,
  };

  return (
    <img
      className="image"
      style={style}
      src={src}
      alt={description}
      draggable="false"
    />
  );
}

Image.propTypes = {
  src: PropTypes.string,
  description: PropTypes.string,
  nativeWidth: PropTypes.number,
  nativeHeight: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};

export default Image;
