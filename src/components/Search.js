import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Thumb from './Thumb';
import fetchData from '../util/fetchData';
import takeFive from '../util/takeFive';

import './Search.scss';

function Search(props) {
  const { onSelectImage } = props;
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchData(query, setResults);
  }, [query]);

  const five = takeFive(results);

  return (
    <div className="search">
      <SearchBar
        query={query}
        onSubmit={query => setQuery(query)}
      />
      <div>
        {five.map(image => {
          const { id } = image;
          return (
            <Thumb
              {...image}
              onClick={() => onSelectImage(image)}
              key={id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Search;
