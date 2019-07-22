const fs = require('fs');
const { resolve } = require('path');

const FILENAME = 'work';

const { results } = require(`./${FILENAME}.json`);

const data = JSON.stringify(results.map(process), null, 2);

fs.writeFileSync(resolve(__dirname, `../api/${FILENAME}.json`), data);

function process(image) {
  return {
    id: image.id,
    width: image.width,
    height: image.height,
    color: image.color,
    description: image.alt_description,
    urls: image.urls,
  };
}
