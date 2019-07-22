import React from 'react';
import PropTypes from 'prop-types';

import './Thumb.scss';

function Thumb(props) {
  const { description, urls } = props;
  const { thumb } = urls;

  return (
    <img
      className="thumb"
      src={thumb}
      alt={description}
    />
  );
}

Thumb.propTypes = {
  id: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  description: PropTypes.string,
  urls: PropTypes.shape({
    raw: PropTypes.string,
    full: PropTypes.string,
    regular: PropTypes.string,
    small: PropTypes.string,
    thumb: PropTypes.string,
  }),
};

Thumb.defaultProps = {
  urls: {},
};

export default Thumb;
