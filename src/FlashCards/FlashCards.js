import React from "react";
import { IconNames } from "@blueprintjs/icons";
import { Button, Icon, Tab, Tabs } from "@blueprintjs/core";

import Utils from "../Utils/Utils.js";
import Images from "../images/images.js";

import myWords from "../Models/words.js";

import "./FlashCards.css";

const { words, wordTypes } = myWords;

export default class FlashCards extends React.Component {
  state = {
    words: []
  };

  async componentDidMount() {
    this.setState({ words });
  }

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

  render() {
    const words = this.state.words;
    if (!words) {
      return null;
    }

    const renderedPanels = Object.keys(wordTypes).map((type, i) => {
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

    return (
      <div className="center">
        <div className="left">
          <span className="header">Flash Cards</span>

          <Tabs id="TabsExample">{renderedPanels}</Tabs>
        </div>
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
      </div>
    );
  }
}
