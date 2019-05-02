import myWords from "./words.js";
import Utils from "./utils.js";
// import { wordTypes } from "./words.js";

const getRandomWordByType = ({ words, type }) => {
  const output = Utils.getWordsByType({ words, type }).map(word => word.name);
  return Utils.getRandomItem({ items: output });
};

// flag a word : isUsedInStory
const makeStory = ({ words }) => {
  const actions = Utils.getWordsByType({ words, type: "action" });
  const creature = getRandomWordByType({
    words,
    type: myWords.wordTypes.creature
  });
  const vehicle = getRandomWordByType({
    words,
    type: myWords.wordTypes.vehicle
  });

  const place = getRandomWordByType({
    words,
    type: myWords.wordTypes.place
  });

  const place2 = getRandomWordByType({
    words,
    type: myWords.wordTypes.place
  });
  // create function to create a character with a random set of attributes
  // turn it into a choose your own adventure.
  const character0 = {
    name: getRandomWordByType({ words, type: myWords.wordTypes.name }),
    animal: getRandomWordByType({ words, type: myWords.wordTypes.animal }),
    action: actions[0].name,
    place: place
  };

  // const character1 = {
  //   name: getRandomWordByType({ words, type: myWords.wordTypes.name }),
  //   animal: getRandomWordByType({ words, type: myWords.wordTypes.animal }),
  //   action: actions[1].name,
  //   place: place
  // };

  const myName = "Pria";
  // const myName = "Charlie";

  const story = [
    `Your name is ${myName}.`,
    `You go to the ${place} in your ${vehicle}.`,
    `Your ${vehicle} is fast.`,
    ``,
    `At the ${place}, you see a ${creature}`,
    `The ${creature} is sad.`,
    `The ${creature} is crying.`,
    ``,
    `You say, "Hello ${creature}, my name is ${myName}"`,
    `The ${creature} says, "Hello ${myName}, can you help me?"`,
    `I am lost.`,
    `I need to go to the ${place2} to find my friend ${character0.name}.`,
    ``,
    `But I am lost.`
  ];

  return story;
};

const story1 = makeStory({ words: myWords.words });

export default { story1, makeStory };
