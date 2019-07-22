import axios from 'axios';

// cue Dave Brubeck
async function fetchData(query, callback) {
  if (!query) {
    return callback([]);
  }
  const { data } = await axios(`/search/photos?query=${query}`);
  callback(data);
}

export default fetchData;
