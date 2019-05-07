import myWords from "../Models/words.js";
import Utils from "../Utils/Utils.js";

const { words, wordTypes } = myWords;

// This cannot be chosen for the next scene.
const createHomeStory = ({ you }) => {
  return [
    `Your name is ${you.name}.`,
    `You live in the ${you.homeLocation}.`,
    `You are happy.`,
    `You have a ${you.vehicle}.`,
    `Your ${you.vehicle} is fast.`,
    `Where do you go?`
  ];
};

const lostCreatureStory = ({ you, activeScene, sceneOptionA }) => {
  return [
    `At the ${activeScene.location}, you see a ${activeScene.newFriend.type}`,
    `The ${activeScene.newFriend.type} is sad.`,
    `The ${activeScene.newFriend.type} is crying.`,
    `You say, "Hello ${activeScene.newFriend.type}, my name is ${you.name}"`,
    `The ${activeScene.newFriend.type} says, "Hello ${
      you.name
    }, can you help me?"`,
    `I lost my ${activeScene.missingItem}.`,
    `Can you help me?"`,

    `I am sooooooo sad.`
  ];
};

const birthdayPartyStory = ({ you, activeScene, sceneOptionA }) => {
  return [
    `At the ${activeScene.location}, you see a ${activeScene.newFriend.type}`,
    `You say, "Hello ${activeScene.newFriend.type}, my name is ${you.name}"`,
    `The ${activeScene.newFriend.type} says, "Hello ${you.name}?"`,
    `I am sooooooo happy.`,
    `I need to go to a birthday party.`
  ];
};

const lostThingStory = ({ you, activeScene, sceneOptionA }) => {
  return [
    `At the ${activeScene.location}, you see a ${activeScene.newFriend.type}`,
    `The ${activeScene.newFriend.type} is happy.`,
    `I need to go to the ${sceneOptionA.location} to find my friend ${
      sceneOptionA.newFriend.name
    }.`,
    `I lost my ${activeScene.missingItem}.`,
    `I am sooooooo sad.`
  ];
};

const scenes = {
  home: {
    location: "forest",
    missingItem: "birthday present",
    newFriend: {
      type: Utils.getRandomWordByType({
        words,
        type: wordTypes.creature
      }),
      name: "Crystal"
    },
    narrative: createHomeStory,
    isHome: true
  },

  meadow: {
    location: "meadow",
    missingItem: "birthday present",
    newFriend: { type: "unicorn", name: "Sparkle" }
  },
  waterfall: {
    location: "waterfall",
    missingItem: "birthday present",
    newFriend: { type: "fairy", name: "Luna" }
  },
  school: {
    location: "school",
    missingItem: "birthday cake",
    newFriend: { type: "fairy", name: "Luna" }
  },
  garden: {
    location: "garden",
    missingItem: "rose bush",
    newFriend: { type: "fairy", name: "Luna" }
  }
};

const startScene = scenes.home;

const plot = {
  activeScene: startScene,
  you: {
    name: "Pria",
    creature: "girl",
    homeLocation: "forest",
    vehicle: "scooter"
  },
  scenes
};

const stories = [lostThingStory, lostCreatureStory, birthdayPartyStory];

const getNarrative = ({ plot, activeScene, sceneOptionA, sceneOptionB }) => {
  const { you } = plot;

  if (activeScene.narrative) {
    return activeScene.narrative({ you, activeScene, sceneOptionA });
  } else {
    const story = Utils.getRandomItem({ items: stories });
    return story({ you, activeScene, sceneOptionA });
  }
};

export default { getNarrative, plot };
