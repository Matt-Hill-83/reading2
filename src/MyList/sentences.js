import myWords from "./words.js";
import Utils from "./utils.js";

const sentences = [
  "Bingo Bongo is a bear.",
  "Bingo Bongo walks to the store.",
  "Bun Bun is a bunny.",
  "Bun Bun hops to the store.",
  "Bun Bun is fast.",
  "Bingo Bongo is not slow.",
  "Bingo Bongo is medium.",
  "Bingo Bongo is funny.",
  "The bunny bumps into the bear.",
  "The bunny gets mad at the bear.",
  "The bear is sad.",
  "The bear starts to cry.",
  "The bear starts to sob."
];

const makeStory = ({ words }) => {
  const animals = Utils.getWordsByType({ words, type: "animal" });
  const names = Utils.getWordsByType({ words, type: "name" });
  const places = Utils.getWordsByType({ words, type: "place" });
  const actions = Utils.getWordsByType({ words, type: "action" });

  const character0 = {
    name: Utils.getRandomItem({ items: names }).name,
    animal: animals[0].name,
    action: actions[0].name,
    place: places[0].name
  };

  const character1 = {
    name: names[1].name,
    animal: animals[1].name,
    action: actions[1].name,
    place: places[1].name
  };

  const story = [
    `${character0.name} is a ${character0.animal}.`,
    `${character1.name} is a ${character1.animal}.`,

    `${character0.name} ${character0.action} to the ${character0.place}.`,
    `${character1.name} ${character1.action} to the ${character0.place} too.`,
    `${character0.name} bumps into ${character1.name}.`
  ];

  return story;
};

const story1 = makeStory({ words: myWords.words, sentences });

export default { sentences, story1 };
