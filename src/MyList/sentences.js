import myWords from "./words.js";
// import { wordTypes } from "./words.js";
import Utils from "./utils.js";

const { words, wordTypes } = myWords;

const getRandomWordByType = ({ words, type }) => {
  const output = Utils.getWordsByType({ words, type }).map(word => word.name);
  return Utils.getRandomItem({ items: output });
};

console.log("words", words); // zzz
console.log("wordTypes", wordTypes); // zzz

// flag a word : isUsedInStory
// const words = words;

const plot = {
  you: {
    name: "Priana",
    creature: "girl",
    homePlace: "forest",
    vehicle: getRandomWordByType({
      words: words,
      type: wordTypes.vehicle
    })
  },
  missingItems: ["birthday present", "key", "flower"],
  scenes: [
    {
      place: getRandomWordByType({
        words,
        type: wordTypes.place
      }),
      missingItem: "birthday present",
      newFriend: { type: "cat", name: "Luna cat" }
    },
    {
      place: "island",
      missingItem: "birthday present",
      newFriend: { type: "unicorn", name: "Luna unicorn" }
    },
    {
      place: "waterfall",
      missingItem: "birthday present",
      newFriend: { type: "fairy", name: "Luna fairy" }
    }
  ]
};

const makeStory = ({ words, plot = {} }) => {
  const actions = Utils.getWordsByType({ words, type: "action" });
  const creature = getRandomWordByType({
    words,
    type: wordTypes.creature
  });

  // const place = getRandomWordByType({
  //   words,
  //   type: wordTypes.place
  // });

  const place2 = getRandomWordByType({
    words,
    type: wordTypes.place
  });
  // create function to create a character with a random set of attributes
  // turn it into a choose your own adventure.
  const character0 = {
    name: getRandomWordByType({ words, type: wordTypes.name }),
    animal: getRandomWordByType({ words, type: wordTypes.animal }),
    action: actions[0].name
    // place: place
  };

  const { you } = plot;

  const story = [
    `Your name is ${you.name}.`,
    // `You have a magical ${friend.type} named r ${friend.name}.`,
    `You live in the ${you.place} in your ${you.vehicle}.`,
    `Your ${you.vehicle} is fast.`,
    ``,
    `At the ${you.place}, you see a ${creature}`,
    `The ${creature} is sad.`,
    `The ${creature} is crying.`,
    ``,
    `You say, "Hello ${creature}, my name is ${you.name}"`,
    `The ${creature} says, "Hello ${you.name}, can you help me?"`,
    `I am lost.`,
    `I need to go to the ${you.place} to find my friend ${character0.name}.`,
    ``,
    `But I am lost.`,
    `I am sooooooo sad.`
  ];
  // const story = [
  //   `Your name is ${myName}.`,
  //   // `You have a magical ${friend.type} named r ${friend.name}.`,
  //   `You go to the ${place} in your ${vehicle}.`,
  //   `Your ${vehicle} is fast.`,
  //   ``,
  //   `At the ${place}, you see a ${creature}`,
  //   `The ${creature} is sad.`,
  //   `The ${creature} is crying.`,
  //   ``,
  //   `You say, "Hello ${creature}, my name is ${myName}"`,
  //   `The ${creature} says, "Hello ${myName}, can you help me?"`,
  //   `I am lost.`,
  //   `I need to go to the ${place2} to find my friend ${character0.name}.`,
  //   ``,
  //   `But I am lost.`,
  //   `I am sooooooo sad.`
  // ];

  return story;
};

// const story1 = makeStory({ words: words });

export default { makeStory, plot };
