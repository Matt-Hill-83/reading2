import React from "react";
import { IconNames } from "@blueprintjs/icons";
import { Button, Icon, Intent, Tab, Tabs } from "@blueprintjs/core";
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

const wordsICanRead = [
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

export default class MyList extends React.Component {
  state = { activeTab: "a", favoriteWords: [] };

  async componentDidMount() {
    const words = [
      ...animalWords,
      ...actionWords,
      ...nameWords,
      ...emotionWords,
      ...locationWords
    ];

    this.setState({ words });
  }

  renderSentences = () => {
    const sentences = mySentences.map((sentence, i) => {
      return (
        <span key={i} className="sentence">{`${i + 1}. ${sentence}`}</span>
      );
    });
    return sentences;
  };

  favoriteWord = ({ word }) => {
    word.isFavorite = !word.isFavorite;
    console.log("word", word); // zzz
    const words = this.state.words;

    const favoriteWords = words.filter(word => word.isFavorite);

    this.setState({ words, favoriteWords });
  };

  renderFlashCards = ({ words }) => {
    const renderedFlashCards = words.map((word, i) => {
      const iconColor = word.isFavorite ? "purple" : "pink";
      return (
        <div key={i} className="word-tools-container">
          <Button
            className="favorite-button"
            onClick={() => this.favoriteWord({ word })}
          >
            <Icon color={iconColor} icon={IconNames.STAR} />
          </Button>
          <div className="word-container">
            {/* <span className="index">{`${i + 1}.`}</span> */}
            <span className="word">{` ${word.name}`}</span>
            {/* <span className="word">{` ${word.isFavorite}`}</span> */}
          </div>
        </div>
      );
    });

    return renderedFlashCards;
  };

  removeFavorites = words => words.filter(word => !word.isFavorite);

  render() {
    console.log("render");

    const panels = {
      animals: { name: "animals", content: this.removeFavorites(animalWords) },
      places: { name: "places", content: this.removeFavorites(locationWords) },
      feelings: {
        name: "feelings",
        content: this.removeFavorites(emotionWords)
      },
      wordsICanRead: {
        name: "Words I Can Read",
        content: this.removeFavorites(wordsICanRead)
      }
    };

    const selectedPanels = [
      panels.animals,
      panels.places,
      panels.feelings,
      panels.wordsICanRead
    ];

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

            <Tabs id="TabsExample">{renderedPanels}</Tabs>
          </div>
          <div className="left">
            <span className="header">Words I Can Read</span>

            {this.renderFlashCards({ words: this.state.favoriteWords })}
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
