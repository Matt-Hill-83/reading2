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
    `At the ${activeScene.location}, you see a ${activeScene.newFriend.type}.`,
    `You say, "Hello ${activeScene.newFriend.type}, my name is ${you.name}."`,
    `The ${activeScene.newFriend.type} says, "Hello ${you.name}?"`,
    `I am sooooooo happy.`,
    `I need to go to a birthday party.`
  ];
};

const lostThingStory = ({ you, activeScene, sceneOptionA }) => {
  return [
    `At the ${activeScene.location}, you see a ${activeScene.newFriend.type}.`,
    `The ${activeScene.newFriend.type} is happy.`,
    `I need to go to the ${sceneOptionA.location} to find my friend ${
      sceneOptionA.newFriend.name
    }.`,
    `I lost my ${activeScene.missingItem}.`,
    `I am sooooooo sad.`
  ];
};

const argumentStory = ({ you, activeScene, sceneOptionA, sceneOptionB }) => {
  const creatures = Utils.getWordsByType({ words, type: wordTypes.animal });
  const animal1 = Utils.getRandomItem({ items: creatures });
  const animal2 = Utils.getRandomItem({ items: creatures });
  const names = Utils.getWordsByType({ words, type: wordTypes.name });
  const name1 = Utils.getRandomItem({ items: names });
  const name2 = Utils.getRandomItem({ items: names });

  const creature1 = { type: animal1.name, name: name1.name };
  const creature2 = { type: animal2.name, name: name2.name };

  if (!activeScene || activeScene === undefined) {
    return [];
  }

  // console.log("activeScene", activeScene); // zzz
  // console.log("activeScene.location", activeScene.location); // zzz

  return [
    `You go on your ${you.vehicle} to the ${activeScene &&
      activeScene.location}.`,
    `You see a ${creature2.type}`,
    `At the ${activeScene && activeScene.location}, you see a ${
      creature2.type
    }.`,
    `You also see a ${creature1.type}.`,
    `They both look mad.`,
    `The ${creature1.type} says,`,

    `"I am ${creature1.name}."`,
    `"Will you come to the ${sceneOptionA.location} with me?"`
    // `The ${creature2.type} says,`,
    // `"I am ${creature2.name}."`
    // Deal with only 1 scene left, maybe allow user to return to previous scene,
    //  but set a flag that there is only one scene left.  How should the game
    // end?
    // `"Will you come to the ${sceneOptionB.location} with me?"`
    // `${"Will you come to the ${sceneOptionB.location} with me?"}`
  ];
};

const scenes = {
  home: {
    location: "forest",
    missingItem: "birthday present",
    newFriend: {
      type: undefined,
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
    newFriend: { type: "mermaid", name: "Luna" }
  },
  school: {
    location: "school",
    missingItem: "birthday cake",
    newFriend: { type: "elf", name: "Elliot" }
  },
  garden: {
    location: "garden",
    missingItem: "rose bush",
    newFriend: { type: "fairy", name: "AnnaDare" }
  }
};

const startScene = scenes.home;

const stories = [
  // argumentStory,
  birthdayPartyStory,
  lostCreatureStory,
  lostThingStory
];

const plot = {
  activeScene: startScene,
  you: {
    name: "Prichella",
    creature: "girl",
    homeLocation: startScene.location,
    vehicle: "scooter"
  },
  scenes,
  stories
};

const getNarrative = ({
  plot,
  activeScene,
  sceneOptionA,
  sceneOptionB,
  story
}) => {
  const { you } = plot;

  if (activeScene.narrative) {
    return activeScene.narrative({ you, activeScene, sceneOptionA });
  } else {
    return story({ you, activeScene, sceneOptionA, sceneOptionB });
  }
};

export default { getNarrative, plot };
