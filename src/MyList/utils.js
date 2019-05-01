const removeFavorites = words => words.filter(word => !word.isFavorite);

const getWordsByType = ({ words, type }) =>
  words.filter(word => word.type === type);

const getWordsByFavorite = ({ words, type }) =>
  words.filter(word => word.isFavorite === true);

export default {
  removeFavorites,
  getWordsByType,
  getWordsByFavorite
};
