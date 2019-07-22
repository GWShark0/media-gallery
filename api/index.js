const animals = require('./animals.json');
const architecture = require('./architecture.json');
const camera = require('./camera.json');
const cat = require('./cat.json');
const city = require('./city.json');
const dog = require('./dog.json');
const food = require('./food.json');
const laptop = require('./laptop.json');
const nature = require('./nature.json');
const technology = require('./technology.json');
const travel = require('./travel.json');
const work = require('./work.json');

const api = {
  animals,
  architecture,
  camera,
  cat,
  city,
  dog,
  food,
  laptop,
  nature,
  technology,
  travel,
  work,
};

module.exports = {
  get: search => api[search] || [],
};
