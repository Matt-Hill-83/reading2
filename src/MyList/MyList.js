import React from "react";
import { IconNames } from "@blueprintjs/icons";
import { Button, Icon, Tab, Tabs } from "@blueprintjs/core";
// import { SketchPicker } from "react-color";

// import { observer } from "mobx-react";
import meadow from "./meadow.jpg";
// import meadow from "../images/meadow.jpg";

import Utils from "./utils.js";

import myWords from "./words.js";
import mySentences from "./sentences.js";

import "./MyList.css";

export default class MyList extends React.Component {
  state = {
    activeTab: myWords.wordTypes["name"],
    sentences: [],
    showStory: true
  };

  async componentDidMount() {
    const words = myWords.words;
    const sentences = mySentences.makeStory({ words });
    this.setState({ words, sentences });
  }

  renderSentences = () => {
    const sentences = this.state.sentences.map((sentence, i) => {
      return <span key={i} className="word sentence">{`${sentence}`}</span>;
    });
    return sentences;
  };

  favoriteWord = ({ word }) => {
    word.isFavorite = !word.isFavorite;
    const words = this.state.words;

    this.setState({ words });
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
          <Button
            className="include-button"
            onClick={() => this.favoriteWord({ word })}
          >
            <Icon color={iconColor} icon={IconNames.BADGE} />
          </Button>
          <div className="word-container">
            <span className="word">{` ${word.name}`}</span>
          </div>
        </div>
      );
    });

    return renderedFlashCards;
  };

  newStory = () => {
    mySentences.makeStory({ words: this.state.words });
    this.setState({ showStory: !this.state.showStory });
  };

  render() {
    const words = this.state.words;
    if (!words) {
      return null;
    }

    const renderedPanels = Object.keys(myWords.wordTypes).map((type, i) => {
      const wordsNoFavorites = Utils.removeFavorites(
        Utils.getWordsByType({ words, type })
      );

      return (
        <Tab
          key={i}
          id={type}
          title={type}
          panel={this.renderFlashCards({ words: wordsNoFavorites })}
        />
      );
    });

    const goodAtList = [
      "math",
      "reading",
      "art",
      "sports",
      "school",
      "jumping"
    ];
    const goodAt = Utils.getRandomItem({ items: goodAtList });

    const toggleButton = (
      <Button className={"new-story-btn"} onClick={this.newStory}>
        New Story
      </Button>
    );

    return (
      <div className="main">
        <span className="header banner">
          {`Girls are good at...    ${goodAt}!`}

          {toggleButton}
        </span>
        <div className="body">
          {!this.state.showStory && (
            <div className="left">
              <span className="header">Flash Cards</span>

              <Tabs id="TabsExample">{renderedPanels}</Tabs>
            </div>
          )}
          {!this.state.showStory && (
            <div className="center">
              <span className="header">
                {`Words I Can Read --- ${
                  Utils.getWordsByFavorite({ words }).length
                }`}
              </span>

              {this.renderFlashCards({
                words: Utils.getWordsByFavorite({ words })
              })}
            </div>
          )}

          {this.state.showStory && (
            <div className="right">
              {/* <SketchPicker /> */}
              <span className="header">Story</span>
              <div className="story-box">
                <div className="story">{this.renderSentences()}</div>
                <div className="background-image">
                  <img src={meadow} alt="meadow" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
