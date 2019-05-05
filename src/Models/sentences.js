import myWords from "../Models/words.js";
import Utils from "../Utils/Utils.js";

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
    },
    buttons: [
      { label: "", nextScene: "waterfall" },
      { label: "", nextScene: "island" }
    ]
  },

  island: {
    location: "island",
    missingItem: "birthday present",
    newFriend: { type: "unicorn", name: "Sparkle" },
    buttons: [
      { label: "", nextScene: "waterfall" },
      { label: "", nextScene: "home" }
    ]
  },
  waterfall: {
    location: "waterfall",
    missingItem: "birthday present",
    newFriend: { type: "fairy", name: "Luna" },
    buttons: [
      { label: "", nextScene: "home" },
      { label: "", nextScene: "island" }
    ]
  }
};

const startScene = scenes.home;

const plot = {
  scenesHistory: [],
  activeScene: startScene,
  you: {
    name: "Priana",
    creature: "girl",
    homeLocation: "forest",
    vehicle: "scooter"
  },
  // missingItems: ["birthday present", "key", "flower"],
  scenes
};

const createHomeStory = ({ you }) => {
  return [
    `Your name is ${you.name}.`,
    `You live in the ${you.homeLocation}.`,
    `You are happy.`,
    ``,
    `You have a ${you.vehicle}.`,
    `Your ${you.vehicle} is fast.`,
    `Where do you go?`
  ];
};

const lostAnimalStory = ({ you, activeScene, nextSceneA }) => {
  return [
    `At the ${activeScene.location}, you see a ${activeScene.newFriend.type}`,
    `The ${activeScene.newFriend.type} is sad.`,
    `The ${activeScene.newFriend.type} is crying.`,
    `You say, "Hello ${activeScene.newFriend.type}, my name is ${you.name}"`,
    `The ${activeScene.newFriend.type} says, "Hello ${
      you.name
    }, can you help me?"`,
    `I am lost.`,
    `I need to go to the ${nextSceneA.location} to find my friend ${
      nextSceneA.newFriend.name
    }.`,
    `But I am lost.`,
    `I am sooooooo sad.`
  ];
};

const getNarrative = ({ plot, activeScene, nextSceneA, nextSceneB }) => {
  if (activeScene) {
    activeScene.isVisited = true;
  }

  const { you, scenes } = plot;

  return [
    createHomeStory({ you }),
    lostAnimalStory({ you, activeScene, nextSceneA })
  ];
};

export default { getNarrative, plot };
