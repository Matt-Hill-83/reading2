import React from "react";

import { Tab, Tabs } from "@blueprintjs/core";
import { SketchPicker } from "react-color";

import "./MyList.css";

const animalWords = [
  { name: "cat", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "rat", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "bat", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "dog", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "pig", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "cow", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "bee", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "frog", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "crab", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "fish", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "bear", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "deer", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "bird", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "alligator", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "crow", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "snake", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "turtle", partOfSpeech: "noun", partOfStory: "animal" },
  { name: "bunny", partOfSpeech: "noun", partOfStory: "animal" }
];

const actionWords = [
  { name: "runs", partOfSpeech: "noun", partOfStory: "animal" }
];

const nameWords = [
  { name: "Bingo Bongo", partOfSpeech: "noun", partOfStory: "name" }
];

const emotionWords = [
  { name: "happy", partOfSpeech: "noun", partOfStory: "emotion" },
  { name: "sad", partOfSpeech: "noun", partOfStory: "emotion" },
  { name: "mad", partOfSpeech: "noun", partOfStory: "emotion" },
  { name: "scared", partOfSpeech: "noun", partOfStory: "emotion" },
  { name: "glad", partOfSpeech: "noun", partOfStory: "emotion" },
  { name: "brave", partOfSpeech: "noun", partOfStory: "emotion" },
  { name: "silly", partOfSpeech: "noun", partOfStory: "emotion" },
  { name: "angry", partOfSpeech: "noun", partOfStory: "emotion" },
  { name: "surprised", partOfSpeech: "noun", partOfStory: "emotion" }
];

const locationWords = [
  { name: "store", partOfSpeech: "noun", partOfStory: "location" },
  { name: "forest", partOfSpeech: "noun", partOfStory: "location" },
  { name: "lake", partOfSpeech: "noun", partOfStory: "location" },
  { name: "beach", partOfSpeech: "noun", partOfStory: "location" },
  { name: "park", partOfSpeech: "noun", partOfStory: "location" },
  { name: "playground", partOfSpeech: "noun", partOfStory: "location" }
];

const mySentences = [
  "Bingo Bongo the bear walks to the store.",
  "Bun Bun the bunny hops to the store.",
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

export default class MyList extends React.Component {
  state = { activeTab: "a" };

  handleTabChange = newTab => {
    console.log("newTab", newTab); // zzz

    this.setState({ activeTab: newTab });
  };

  renderSentences = () => {
    const sentences = mySentences.map((sentence, i) => {
      return (
        <span key={i} className="sentence">{`${i + 1}. ${sentence}`}</span>
      );

      return sentences;
    });
  };

  renderFlashCards = ({ words }) => {
    const renderedFlashCards = words.map((word, i) => {
      return (
        <div key={i} className="word-tools-container">
          <div className="word-container">
            <span className="index">{`${i + 1}.`}</span>
            <span className="word">{` ${word.name}`}</span>
          </div>
        </div>
      );
    });

    return renderedFlashCards;
  };

  render() {
    console.log("render");

    const words = [
      ...animalWords,
      ...actionWords,
      ...nameWords,
      ...emotionWords,
      ...locationWords
    ];

    const panels = {
      animals: { name: "animals", content: animalWords },
      places: { name: "places", content: locationWords },
      feelings: { name: "feelings", content: emotionWords }
    };

    const selectedPanels = [panels.animals, panels.places, panels.feelings];

    const renderedPanels = selectedPanels.map(panel => {
      return (
        <Tab
          id={panel.name}
          title={panel.name}
          panel={this.renderFlashCards({ words: panel.content })}
        />
      );
    });

    return (
      <div className="main">
        <span className="header banner">I Can Read</span>
        <div className="body">
          <div className="left">
            <span className="header">Flash Cards</span>

            {/* <audio controls>
              <source src="./horse.ogg" type="audio/ogg" />
              <source src="./horse.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio> */}

            <Tabs id="TabsExample">{renderedPanels}</Tabs>
          </div>

          <div className="right">
            <SketchPicker />
            <span className="header">Story</span>
            <div className="story">{this.renderSentences()}</div>
          </div>
        </div>
      </div>
    );
  }
}
