import myWords from "../Models/words.js";
import Utils from "../Utils/Utils.js";

const { words, wordTypes } = myWords;

// This cannot be chosen for the next scene.
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

const lostAnimalStory = ({ you, activeScene, sceneOptionA }) => {
  return [
    `At the ${activeScene.location}, you see a ${activeScene.newFriend.type}`,
    `The ${activeScene.newFriend.type} is sad.`,
    `The ${activeScene.newFriend.type} is crying.`,
    `You say, "Hello ${activeScene.newFriend.type}, my name is ${you.name}"`,
    `The ${activeScene.newFriend.type} says, "Hello ${
      you.name
    }, can you help me?"`,
    `I am lost.`,
    `I need to go to the ${sceneOptionA.location} to find my friend ${
      sceneOptionA.newFriend.name
    }.`,
    `But I am lost.`,
    `I am sooooooo sad.`
  ];
};

const scenes = {
  home: {
    location: "home",
    // location: Utils.getRandomWordByType({
    //   words,
    //   type: wordTypes.location
    // }),
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
    ],
    narrative: createHomeStory,
    isHome: true
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
  },
  school: {
    location: "school",
    missingItem: "birthday cake",
    newFriend: { type: "fairy", name: "Luna" },
    buttons: [
      { label: "", nextScene: "home" },
      { label: "", nextScene: "island" }
    ]
  },
  garden: {
    location: "garden",
    missingItem: "rose bush",
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
  scenes
};

const getNarrative = ({ plot, activeScene, sceneOptionA, sceneOptionB }) => {
  const { you } = plot;

  if (activeScene.narrative) {
    return activeScene.narrative({ you, activeScene, sceneOptionA });
  } else {
    return lostAnimalStory({ you, activeScene, sceneOptionA });
  }
};

export default { getNarrative, plot };
