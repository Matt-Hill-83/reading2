const wordTypes = {
  animal: "animals",
  name: "names",
  emotion: "emotions",
  location: "locations",
  clothes: "clothes",
  food: "foods",
  vehicle: "vehicles"
};

const animals = [
  { name: "cat", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "rat", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "bat", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "dog", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "pig", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "cow", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "bee", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "frog", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "crab", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "fish", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "bear", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "deer", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "bird", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "crow", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "turtle", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "bunny", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "monster", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "alligator", partOfSpeech: "noun", type: wordTypes.animal },
  { name: "snake", partOfSpeech: "noun", type: wordTypes.animal }
];

const actions = [
  { name: "runs", partOfSpeech: "noun", type: wordTypes.animal }
];

const names = [
  { name: "Bingo Bongo", partOfSpeech: "noun", type: wordTypes.name }
];

const emotions = [
  { name: "sad", partOfSpeech: "noun", type: wordTypes.emotion },
  { name: "mad", partOfSpeech: "noun", type: wordTypes.emotion },
  { name: "glad", partOfSpeech: "noun", type: wordTypes.emotion },
  { name: "happy", partOfSpeech: "noun", type: wordTypes.emotion },
  { name: "silly", partOfSpeech: "noun", type: wordTypes.emotion },
  { name: "angry", partOfSpeech: "noun", type: wordTypes.emotion },
  { name: "scared", partOfSpeech: "noun", type: wordTypes.emotion },
  { name: "brave", partOfSpeech: "noun", type: wordTypes.emotion },
  { name: "surprised", partOfSpeech: "noun", type: wordTypes.emotion }
];

const locations = [
  { name: "park", partOfSpeech: "noun", type: wordTypes.location },
  { name: "lake", partOfSpeech: "noun", type: wordTypes.location },
  { name: "store", partOfSpeech: "noun", type: wordTypes.location },
  { name: "school", partOfSpeech: "noun", type: wordTypes.location },
  { name: "forest", partOfSpeech: "noun", type: wordTypes.location },
  { name: "beach", partOfSpeech: "noun", type: wordTypes.location },
  { name: "playground", partOfSpeech: "noun", type: wordTypes.location }
];

const clothes = [
  { name: "hat", partOfSpeech: "noun", type: wordTypes.clothes },
  { name: "gloves", partOfSpeech: "noun", type: wordTypes.clothes },
  { name: "bow", partOfSpeech: "noun", type: wordTypes.clothes },
  { name: "pants", partOfSpeech: "noun", type: wordTypes.clothes },
  { name: "shirt", partOfSpeech: "noun", type: wordTypes.clothes }
];

const foods = [
  { name: "pizza", partOfSpeech: "noun", type: wordTypes.food },
  { name: "grass", partOfSpeech: "noun", type: wordTypes.food },
  { name: "cake", partOfSpeech: "noun", type: wordTypes.food },
  { name: "candy", partOfSpeech: "noun", type: wordTypes.food },
  { name: "muffin", partOfSpeech: "noun", type: wordTypes.food },
  { name: "lemon", partOfSpeech: "noun", type: wordTypes.food },
  { name: "apple", partOfSpeech: "noun", type: wordTypes.food }
];

const vehicles = [
  { name: "car", partOfSpeech: "noun", type: wordTypes.vehicle },
  { name: "bike", partOfSpeech: "noun", type: wordTypes.vehicle },
  { name: "scooter", partOfSpeech: "noun", type: wordTypes.vehicle },
  { name: "boat", partOfSpeech: "noun", type: wordTypes.vehicle },
  { name: "plane", partOfSpeech: "noun", type: wordTypes.vehicle },
  { name: "helicopter", partOfSpeech: "noun", type: wordTypes.vehicle }
];

const words = [
  ...animals,
  ...actions,
  ...names,
  ...emotions,
  ...locations,
  ...clothes,
  ...foods,
  ...vehicles
];

export default {
  words
};
