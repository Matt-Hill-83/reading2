const wordTypes = {
  animal: "animal",
  name: "name",
  emotion: "emotion",
  location: "location",
  clothes: "clothes",
  food: "food",
  vehicle: "vehicle"
};

const animalWords = [
  { name: "cat", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "rat", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "bat", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "dog", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "pig", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "cow", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "bee", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "frog", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "crab", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "fish", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "bear", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "deer", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "bird", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "alligator", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "crow", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "snake", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "turtle", partOfSpeech: "noun", wordType: wordTypes.animal },
  { name: "bunny", partOfSpeech: "noun", wordType: wordTypes.animal }
];

const actionWords = [
  { name: "runs", partOfSpeech: "noun", wordType: wordTypes.animal }
];

const nameWords = [
  { name: "Bingo Bongo", partOfSpeech: "noun", wordType: wordTypes.name }
];

const emotionWords = [
  { name: "sad", partOfSpeech: "noun", wordType: wordTypes.emotion },
  { name: "mad", partOfSpeech: "noun", wordType: wordTypes.emotion },
  { name: "glad", partOfSpeech: "noun", wordType: wordTypes.emotion },
  { name: "happy", partOfSpeech: "noun", wordType: wordTypes.emotion },
  { name: "silly", partOfSpeech: "noun", wordType: wordTypes.emotion },
  { name: "angry", partOfSpeech: "noun", wordType: wordTypes.emotion },
  { name: "scared", partOfSpeech: "noun", wordType: wordTypes.emotion },
  { name: "brave", partOfSpeech: "noun", wordType: wordTypes.emotion },
  { name: "surprised", partOfSpeech: "noun", wordType: wordTypes.emotion }
];

const locationWords = [
  { name: "park", partOfSpeech: "noun", wordType: wordTypes.location },
  { name: "lake", partOfSpeech: "noun", wordType: wordTypes.location },
  { name: "store", partOfSpeech: "noun", wordType: wordTypes.location },
  { name: "school", partOfSpeech: "noun", wordType: wordTypes.location },
  { name: "forest", partOfSpeech: "noun", wordType: wordTypes.location },
  { name: "beach", partOfSpeech: "noun", wordType: wordTypes.location },
  { name: "playground", partOfSpeech: "noun", wordType: wordTypes.location }
];

const clothesWords = [
  { name: "hat", partOfSpeech: "noun", wordType: wordTypes.clothes },
  { name: "gloves", partOfSpeech: "noun", wordType: wordTypes.clothes },
  { name: "bow", partOfSpeech: "noun", wordType: wordTypes.clothes },
  { name: "pants", partOfSpeech: "noun", wordType: wordTypes.clothes },
  { name: "shirt", partOfSpeech: "noun", wordType: wordTypes.clothes }
];

const foodWords = [
  { name: "pizza", partOfSpeech: "noun", wordType: wordTypes.food },
  { name: "grass", partOfSpeech: "noun", wordType: wordTypes.food },
  { name: "cake", partOfSpeech: "noun", wordType: wordTypes.food },
  { name: "candy", partOfSpeech: "noun", wordType: wordTypes.food },
  { name: "muffin", partOfSpeech: "noun", wordType: wordTypes.food },
  { name: "lemon", partOfSpeech: "noun", wordType: wordTypes.food },
  { name: "apple", partOfSpeech: "noun", wordType: wordTypes.food }
];

const vehicleWords = [
  { name: "hat", partOfSpeech: "noun", wordType: wordTypes.vehicle },
  { name: "gloves", partOfSpeech: "noun", wordType: wordTypes.vehicle },
  { name: "bow", partOfSpeech: "noun", wordType: wordTypes.vehicle },
  { name: "pants", partOfSpeech: "noun", wordType: wordTypes.vehicle },
  { name: "shirt", partOfSpeech: "noun", wordType: wordTypes.vehicle }
];

const words = [
  ...animalWords,
  ...actionWords,
  ...nameWords,
  ...emotionWords,
  ...locationWords,
  ...clothesWords,
  ...foodWords,
  ...vehicleWords
];

export default {
  words,
  animalWords,
  actionWords,
  nameWords,
  emotionWords,
  locationWords,
  clothesWords
};
