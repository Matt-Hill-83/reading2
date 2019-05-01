import myWords from "./words.js";

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

const makeStory = ({ words, sentences }) => {
  const animal1 = myWords.words[0]["name"];
  console.log("animal1", animal1); // zzz

  const conversation1 = [
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
};

makeStory({ words: myWords.words, sentences });

export default { sentences, makeStory };
