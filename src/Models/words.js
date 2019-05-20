const wordTypes = {
  animal: "animal",
  name: "name",
  feeling: "feeling",
  location: "location",
  garment: "garment",
  food: "food",
  vehicle: "vehicle",
  action: "action",
  creature: "creature"
};

const animals = [
  { name: "cat", image: "noun", type: wordTypes.animal },
  { name: "rat", image: "noun", type: wordTypes.animal },
  { name: "bat", image: "noun", type: wordTypes.animal },
  { name: "dog", image: "noun", type: wordTypes.animal },
  { name: "pig", image: "noun", type: wordTypes.animal },
  { name: "cow", image: "noun", type: wordTypes.animal },
  { name: "bee", image: "noun", type: wordTypes.animal },
  { name: "frog", image: "noun", type: wordTypes.animal },
  { name: "crab", image: "noun", type: wordTypes.animal },
  { name: "fish", image: "noun", type: wordTypes.animal },
  { name: "bear", image: "noun", type: wordTypes.animal },
  { name: "deer", image: "noun", type: wordTypes.animal },
  { name: "bird", image: "noun", type: wordTypes.animal },
  { name: "crow", image: "noun", type: wordTypes.animal },
  { name: "turtle", image: "noun", type: wordTypes.animal },
  { name: "bunny", image: "noun", type: wordTypes.animal },
  { name: "monster", image: "noun", type: wordTypes.animal },
  { name: "alligator", image: "noun", type: wordTypes.animal },
  { name: "snake", image: "noun", type: wordTypes.animal }
];

const other = [
  { name: "today", image: "noun", type: wordTypes.other },
  { name: "green", image: "noun", type: wordTypes.other }
];

const colors = [
  { name: "red", image: "noun", type: wordTypes.color },
  { name: "purple", image: "noun", type: wordTypes.color },
  { name: "pink", image: "noun", type: wordTypes.color },
  { name: "pink", image: "noun", type: wordTypes.color },
  { name: "green", image: "noun", type: wordTypes.color }
];

const actions = [
  { name: "runs", image: "noun", type: wordTypes.action },
  { name: "flys", image: "noun", type: wordTypes.action }
];

const creatures = [
  { name: "unicorn", image: "noun", type: wordTypes.creature },
  { name: "monster", image: "noun", type: wordTypes.creature },
  { name: "mermaid", image: "noun", type: wordTypes.creature },
  { name: "zombie", image: "noun", type: wordTypes.creature },
  { name: "elf", image: "noun", type: wordTypes.creature },
  { name: "fairy", image: "noun", type: wordTypes.creature },
  { name: "goblin", image: "noun", type: wordTypes.creature }
  // { name: "giant", image: "noun", type: wordTypes.creature }
];

const names = [
  { name: "Bingo Bongo", image: "noun", type: wordTypes.name },
  { name: "Bun Bun", image: "noun", type: wordTypes.name },
  { name: "Charlie", image: "noun", type: wordTypes.name },
  { name: "Bob", image: "noun", type: wordTypes.name },
  { name: "Matt", image: "noun", type: wordTypes.name },
  { name: "Will", image: "noun", type: wordTypes.name },
  { name: "Zippy", image: "noun", type: wordTypes.name },
  // { name: "Mom", image: "noun", type: wordTypes.name },
  // { name: "Dad", image: "noun", type: wordTypes.name },
  { name: "Mason", image: "noun", type: wordTypes.name },
  { name: "Abi", image: "noun", type: wordTypes.name },
  { name: "Elliot", image: "noun", type: wordTypes.name },
  { name: "Annadare", image: "noun", type: wordTypes.name },
  { name: "Noak", image: "noun", type: wordTypes.name },
  { name: "Nick", image: "noun", type: wordTypes.name },
  { name: "Chris", image: "noun", type: wordTypes.name },
  { name: "Tami", image: "noun", type: wordTypes.name },
  { name: "Nico", image: "noun", type: wordTypes.name },
  { name: "Plato", image: "noun", type: wordTypes.name }
];

const emotions = [
  { name: "sad", image: "noun", type: wordTypes.feeling },
  { name: "mad", image: "noun", type: wordTypes.feeling },
  { name: "glad", image: "noun", type: wordTypes.feeling },
  { name: "happy", image: "noun", type: wordTypes.feeling },
  { name: "silly", image: "noun", type: wordTypes.feeling },
  { name: "angry", image: "noun", type: wordTypes.feeling },
  { name: "scared", image: "noun", type: wordTypes.feeling },
  { name: "brave", image: "noun", type: wordTypes.feeling },
  { name: "surprised", image: "noun", type: wordTypes.feeling }
];

const locations = [
  { name: "park", image: "noun", type: wordTypes.location },
  { name: "lake", image: "noun", type: wordTypes.location },
  { name: "store", image: "noun", type: wordTypes.location },
  { name: "school", image: "noun", type: wordTypes.location },
  { name: "forest", image: "noun", type: wordTypes.location },
  { name: "library", image: "noun", type: wordTypes.location },
  { name: "island", image: "noun", type: wordTypes.location },
  { name: "waterfall", image: "noun", type: wordTypes.location },
  { name: "home", image: "noun", type: wordTypes.location },
  { name: "beach", image: "noun", type: wordTypes.location },
  { name: "playground", image: "noun", type: wordTypes.location }
];

const garments = [
  { name: "hat", image: "noun", type: wordTypes.garment },
  { name: "bow", image: "noun", type: wordTypes.garment },
  { name: "pants", image: "noun", type: wordTypes.garment },
  { name: "gloves", image: "noun", type: wordTypes.garment },
  { name: "shirt", image: "noun", type: wordTypes.garment }
];

const foods = [
  { name: "pizza", image: "noun", type: wordTypes.food },
  { name: "grass", image: "noun", type: wordTypes.food },
  { name: "cake", image: "noun", type: wordTypes.food },
  { name: "candy", image: "noun", type: wordTypes.food },
  { name: "muffin", image: "noun", type: wordTypes.food },
  { name: "lemon", image: "noun", type: wordTypes.food },
  { name: "apple", image: "noun", type: wordTypes.food },
  { name: "cookies", image: "noun", type: wordTypes.food },
  { name: "popsicle", image: "noun", type: wordTypes.food },
  { name: "banana", image: "noun", type: wordTypes.food },
  { name: "lollipop", image: "noun", type: wordTypes.food }
];

const vehicles = [
  { name: "car", image: "noun", type: wordTypes.vehicle },
  { name: "bike", image: "noun", type: wordTypes.vehicle },
  { name: "scooter", image: "noun", type: wordTypes.vehicle },
  { name: "boat", image: "noun", type: wordTypes.vehicle },
  { name: "plane", image: "noun", type: wordTypes.vehicle },
  { name: "train", image: "noun", type: wordTypes.vehicle }
  // { name: "helicopter", image: "noun", type: wordTypes.vehicle }
];

const words = [
  ...animals,
  ...actions,
  ...names,
  ...emotions,
  ...locations,
  ...garments,
  ...foods,
  ...vehicles,
  ...creatures,
  ...other,
  ...colors
];

export default {
  words,
  wordTypes
};
