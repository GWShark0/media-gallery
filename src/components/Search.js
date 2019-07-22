import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../icons/search.svg';
import { ReactComponent as ResetIcon } from '../icons/x.svg';

import './Search.scss';

function Search(props) {
  const { onSubmit, onReset } = props;
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setQuery(props.query);
  }, [props.query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  const handleReset = (event) => {
    event.target.query.focus();
    setQuery('');
    onReset();
  };

  return (
    <form
      className="search"
      onSubmit={handleSubmit}
      onReset={handleReset}
      data-focused={focused}
    >
      <button className="search__button-search" type="submit">
        <SearchIcon className="search__icon-search" />
      </button>
      <input
        className="search__input"
        placeholder={'Search for "dog"'}
        type="text"
        name="query"
        autoComplete="off"
        value={query}
        onChange={event => setQuery(event.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {!!query && (
        <button className="search__button-reset" type="reset">
          <ResetIcon className="search__icon-reset" />
        </button>
      )}
    </form>
  );
}

Search.propTypes = {
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
};

Search.defaultProps = {
  onSubmit: () => {},
  onReset: () => {},
};

export default Search;
