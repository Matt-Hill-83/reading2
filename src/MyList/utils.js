const removeFavorites = words => words.filter(word => !word.isFavorite);

const getWordsByType = ({ words, type }) =>
  words.filter(word => word.type === type);

const getWordsByFavorite = ({ words, type }) =>
  words.filter(word => word.isFavorite === true);

const getRandomItem = ({ items }) =>
  items[Math.floor(Math.random() * items.length)];

export default {
  removeFavorites,
  getWordsByType,
  getWordsByFavorite,
  getRandomItem
};
