import React from 'react';
import PropTypes from 'prop-types';

import './Search.scss';

function Search(props) {
  const { onSubmit, ...rest } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event.target.query.value);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input type="text" name="query" {...rest} />
    </form>
  );
}

Search.propTypes = {
  onSubmit: PropTypes.func,
};

Search.defaultProps = {
  onSubmit: () => {},
};

export default Search;
