import myWords from "./words.js";
import Utils from "./utils.js";

const { words, wordTypes } = myWords;

const plot = {
  you: {
    name: "Priana",
    creature: "girl",
    homePlace: "forest",
    vehicle: "scooter"
  },
  missingItems: ["birthday present", "key", "flower"],
  scenes: [
    {
      place: Utils.getRandomWordByType({
        words,
        type: wordTypes.place
      }),
      missingItem: "birthday present",
      newFriend: {
        type: Utils.getRandomWordByType({
          words,
          type: wordTypes.creature
        }),
        name: "Luna cat"
      }
    },
    {
      place: "island",
      missingItem: "birthday present",
      newFriend: { type: "unicorn", name: "Sparkle" }
    },
    {
      place: "waterfall",
      missingItem: "birthday present",
      newFriend: { type: "fairy", name: "Luna" }
    }
  ]
};

const makeStory = ({ plot }) => {
  const { you, scenes } = plot;

  const story = [
    `Your name is ${you.name}.`,
    `You live in the ${you.homePlace}.`,
    `You are happy.`,
    ``,
    // `You live in the ${you.homePlace} in your ${you.vehicle}.`,

    `You have a ${you.vehicle}.`,
    `Your ${you.vehicle} is fast.`,
    `You ride your ${you.vehicle} to the ${scenes[0].place}.`,
    ``,
    `At the ${scenes[0].place}, you see a ${scenes[0].newFriend.type}`,
    `The ${scenes[0].newFriend.type} is sad.`,
    `The ${scenes[0].newFriend.type} is crying.`,
    ``,
    `You say, "Hello ${scenes[0].newFriend.type}, my name is ${you.name}"`,
    `The ${scenes[0].newFriend.type} says, "Hello ${
      you.name
    }, can you help me?"`,
    `I am lost.`,
    `I need to go to the ${scenes[1].place} to find ${
      scenes[1].newFriend.name
    }.`,
    ``,
    `But I am lost.`,
    `I am sooooooo sad.`
  ];

  return story;
};

export default { makeStory, plot };
