import React from "react";
import { IconNames } from "@blueprintjs/icons";
import { Button, Icon, Tab, Tabs } from "@blueprintjs/core";
// import { SketchPicker } from "react-color";

import "./MyList.css";
import myWords from "./words.js";

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
  state = { activeTab: myWords.wordTypes["name"], favoriteWords: [] };

  async componentDidMount() {
    this.setState({ words: myWords.words });
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
            <span className="word">{` ${word.name}`}</span>
          </div>
        </div>
      );
    });

    return renderedFlashCards;
  };

  removeFavorites = words => words.filter(word => !word.isFavorite);

  getWordsByType = ({ words, type }) =>
    words.filter(word => word.type === type);

  getWordsByFavorite = ({ words, type }) =>
    words.filter(word => word.isFavorite === true);

  render() {
    const words = this.state.words;
    if (!words) {
      return null;
    }

    const renderedPanels = Object.keys(myWords.wordTypes).map((type, i) => {
      const content = this.removeFavorites(
        this.getWordsByType({ words, type })
      );

      return (
        <Tab
          key={i}
          id={type}
          title={type}
          panel={this.renderFlashCards({ words: content })}
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

            {this.renderFlashCards({
              words: this.getWordsByFavorite({ words })
            })}
          </div>

          <div className="right">
            {/* <SketchPicker /> */}
            <span className="header">Story</span>
            <div className="story">{this.renderSentences()}</div>
          </div>
        </div>
      </div>
    );
  }
}
