// todo
// flag a word : isUsedInStory

export default class Utils {
  static removeFavorites = words => words.filter(word => !word.isFavorite);

  static getWordsByType = ({ words, type }) =>
    words.filter(word => word.type === type);

  static getWordsByFavorite = ({ words, type }) =>
    words.filter(word => word.isFavorite === true);

  static getRandomItem = ({ items }) =>
    items[Math.floor(Math.random() * items.length)];

  static reserveRandomItem = ({ items }) => {
    const freshItems = items.filter(item => !item.isUsed && !item.isReserved);

    // When all the items are used
    if (freshItems.length === 0) {
      return;
    }

    const item = this.getRandomItem({ items: freshItems });
    item.isReserved = true;
    return item;
  };

  static unreserveItems = ({ items }) => {
    items && items.forEach(item => (item.isReserved = false));
  };

  static getRandomWordByType = ({ words, type }) => {
    const output = this.getWordsByType({ words, type }).map(word => word.name);

    // output.isUsed = true;
    // need to output objects

    return this.getRandomItem({ items: output });
  };
}
