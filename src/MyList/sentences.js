import myWords from "./words.js";
import Utils from "./utils.js";

const { words, wordTypes } = myWords;

const scenes = {
  home: {
    location: Utils.getRandomWordByType({
      words,
      type: wordTypes.location
    }),
    missingItem: "birthday present",
    newFriend: {
      type: Utils.getRandomWordByType({
        words,
        type: wordTypes.creature
      }),
      name: "Crystal"
    }
  },

  island: {
    location: "island",
    missingItem: "birthday present",
    newFriend: { type: "unicorn", name: "Sparkle" }
  },
  waterfall: {
    location: "waterfall",
    missingItem: "birthday present",
    newFriend: { type: "fairy", name: "Luna" }
  }
};

const plot = {
  scenesHistory: [],
  currentScene: scenes.home,
  you: {
    name: "Priana",
    creature: "girl",
    homeLocation: "forest",
    vehicle: "scooter"
  },
  missingItems: ["birthday present", "key", "flower"],
  scenes
};

const makeStory = ({ plot }) => {
  const { you, scenes } = plot;

  const story = [
    [
      `Your name is ${you.name}.`,
      `You live in the ${you.homeLocation}.`,
      `You are happy.`,
      ``,
      `You have a ${you.vehicle}.`,
      `Your ${you.vehicle} is fast.`,
      `You ride your ${you.vehicle} to the ${
        plot.currentScene.location
      } to play.`
    ]
    // [
    //   `At the ${scenes[0].location}, you see a ${scenes[0].newFriend.type}`,
    //   `The ${scenes[0].newFriend.type} is sad.`,
    //   `The ${scenes[0].newFriend.type} is crying.`,
    //   ``,
    //   `You say, "Hello ${scenes[0].newFriend.type}, my name is ${you.name}"`,
    //   `The ${scenes[0].newFriend.type} says, "Hello ${
    //     you.name
    //   }, can you help me?"`,
    //   `I am lost.`,
    //   `I need to go to the ${scenes[1].location} to find my friend ${
    //     scenes[1].newFriend.name
    //   }.`,
    //   ``,
    //   `But I am lost.`,
    //   `I am sooooooo sad.`
    // ]
    // `What should you do?`,
    // ``,
    // `Stay at the ${scenes[0].location}.`,
    // `or`,
    // `Go to the ${scenes[1].location} with ${scenes[0].newFriend.name} the ${
    //   scenes[0].newFriend.type
    // }.`
  ];

  return story;
};

export default { makeStory, plot };
