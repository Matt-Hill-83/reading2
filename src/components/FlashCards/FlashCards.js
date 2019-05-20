import React from "react";
import { IconNames } from "@blueprintjs/icons";
import { Button, Icon, Tab, Tabs } from "@blueprintjs/core";

import myWords from "../../Models/words.js";
import Utils from "../../Utils/Utils.js";

import css from "./FlashCards.module.css";

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
        <div key={i} className={css.wordToolsContainer}>
          <Button
            className={css.favoriteButton}
            onClick={() => this.favoriteWord({ word })}
          >
            <Icon color={iconColor} icon={IconNames.STAR} />
          </Button>
          <Button
            className={css.includeButton}
            onClick={() => this.favoriteWord({ word })}
          >
            <Icon color={iconColor} icon={IconNames.BADGE} />
          </Button>
          <div className={css.wordContainer}>
            <span className={css.word}>{word.name}</span>
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
      <div className={css.main}>
        <div className={css.left}>
          <span className={css.header}>Flash Cards</span>

          <Tabs className={css.tabs} id="TabsExample">
            {renderedPanels}
          </Tabs>
        </div>
        <div className={css.right}>
          <span className={css.header}>
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
