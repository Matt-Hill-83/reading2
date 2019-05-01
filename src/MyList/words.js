const wordTypes = {
  animal: "animal",
  name: "name",
  feeling: "feeling",
  place: "place",
  clothes: "clothes",
  food: "food",
  vehicle: "vehicle"
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
  { name: "Bingo Bongo", partOfSpeech: "noun", type: wordTypes.name },
  { name: "Bun Bun", partOfSpeech: "noun", type: wordTypes.name },
  { name: "Charlie", partOfSpeech: "noun", type: wordTypes.name },
  { name: "Bob", partOfSpeech: "noun", type: wordTypes.name },
  { name: "Matt", partOfSpeech: "noun", type: wordTypes.name }
];

const emotions = [
  { name: "sad", partOfSpeech: "noun", type: wordTypes.feeling },
  { name: "mad", partOfSpeech: "noun", type: wordTypes.feeling },
  { name: "glad", partOfSpeech: "noun", type: wordTypes.feeling },
  { name: "happy", partOfSpeech: "noun", type: wordTypes.feeling },
  { name: "silly", partOfSpeech: "noun", type: wordTypes.feeling },
  { name: "angry", partOfSpeech: "noun", type: wordTypes.feeling },
  { name: "scared", partOfSpeech: "noun", type: wordTypes.feeling },
  { name: "brave", partOfSpeech: "noun", type: wordTypes.feeling },
  { name: "surprised", partOfSpeech: "noun", type: wordTypes.feeling }
];

const locations = [
  { name: "park", partOfSpeech: "noun", type: wordTypes.place },
  { name: "lake", partOfSpeech: "noun", type: wordTypes.place },
  { name: "store", partOfSpeech: "noun", type: wordTypes.place },
  { name: "school", partOfSpeech: "noun", type: wordTypes.place },
  { name: "forest", partOfSpeech: "noun", type: wordTypes.place },
  { name: "beach", partOfSpeech: "noun", type: wordTypes.place },
  { name: "playground", partOfSpeech: "noun", type: wordTypes.place }
];

const clothes = [
  { name: "hat", partOfSpeech: "noun", type: wordTypes.clothes },
  { name: "bow", partOfSpeech: "noun", type: wordTypes.clothes },
  { name: "pants", partOfSpeech: "noun", type: wordTypes.clothes },
  { name: "gloves", partOfSpeech: "noun", type: wordTypes.clothes },
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
  { name: "train", partOfSpeech: "noun", type: wordTypes.vehicle },
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
  words,
  wordTypes
};
