import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Thumb from './components/Thumb';
import fetchData from './util/fetchData';
import takeFive from './util/takeFive';

import './App.scss';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchData(query, setResults);
  }, [query]);

  const five = takeFive(results);

  return (
    <div className="app">
      <Search
        query={query}
        onSubmit={query => setQuery(query)}
      />
      <div>
        {five.map(image => {
          const { id } = image;
          return (<Thumb {...image} key={id} />);
        })}
      </div>
    </div>
  );
}

export default App;
