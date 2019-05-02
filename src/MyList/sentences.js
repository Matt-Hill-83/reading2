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

  const character1 = {
    name: getRandomWordByType({ words, type: myWords.wordTypes.name }),
    animal: getRandomWordByType({ words, type: myWords.wordTypes.animal }),
    action: actions[1].name,
    place: place
  };

  const myName = "Pria";
  // const myName = "Charlie";

  const story = [
    `Your name is ${myName}.`,
    `You walk to the ${place}.`,
    `At the ${place}, you see a ${creature}`,
    `You say, "Hello ${creature}, my name is ${myName}"`,
    `The ${creature} says, "Hello ${myName}, can you help me?!"`,
    `I am lost.  I need to go to the ${place2} to find my friend ${
      character0.name
    }`,

    // `${character0.name} is a ${character0.animal}.`,
    // `${character1.name} is a ${character1.animal}.`,

    // `${character0.name} ${character0.action} to the ${character0.place}.`,
    // `${character1.name} ${character1.action} to the ${character0.place} too.`,
    // `${character0.name} bumps into ${character1.name}.`,
    // `${character0.name} sees a  ${creature}.`,
    `  `

    // `The ${creature} says, "Hello ${myName}!"`
  ];

  return story;
};

const story1 = makeStory({ words: myWords.words });

export default { story1, makeStory };
