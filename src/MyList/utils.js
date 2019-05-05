// // todo
// // flag a word : isUsedInStory

// export default class Utils {
//   static removeFavorites = words => words.filter(word => !word.isFavorite);

//   static getWordsByType = ({ words, type }) =>
//     words.filter(word => word.type === type);

//   static getWordsByFavorite = ({ words, type }) =>
//     words.filter(word => word.isFavorite === true);

//   static getRandomItem = ({ items }) =>
//     items[Math.floor(Math.random() * items.length)];

//   static getRandomWordByType = ({ words, type }) => {
//     const output = this.getWordsByType({ words, type }).map(word => word.name);

//     // output.isUsed = true;
//     // need to output objects

//     return this.getRandomItem({ items: output });
//   };
// }
