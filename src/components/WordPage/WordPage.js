import React from "react";
import { observer } from "mobx-react";
import { IconNames } from "@blueprintjs/icons";
import { Button, Icon, Position, Tooltip } from "@blueprintjs/core";

import myWords from "../../Models/words.js";
import mySentences from "../../Models/sentences.js";

import { WordsStore } from "../../Stores/WordsStore";
import Sounds from "../../Sounds/Sounds";
import Utils from "../../Utils/Utils.js";

import css from "./WordPage.module.scss";

const { getNarrative, plot } = mySentences;
const { wordTypes } = myWords;

class WordPage extends React.Component {
  state = {
    activeTab: wordTypes.name,
    showStory: true,
    activeScene: undefined,
    pageNum: 0,
    sound: null
  };

  wordsStore = new WordsStore();

  async componentWillMount() {
    // const activeScene = plot.activeScene;

    this.updateActiveScene({ activeScene: this.props.activeScene });
  }

  updateActiveScene = ({ activeScene }) => {
    // TODO - create all random story elements when activeScene is updated.
    activeScene.isUsed = true;

    const scenes = plot.scenes;
    const scenesList = Object.values(scenes) || [];

    Utils.unreserveItems({ items: scenesList });

    const sceneOptionA = Utils.reserveRandomItem({ items: scenesList });
    const sceneOptionB = Utils.reserveRandomItem({ items: scenesList });

    const story = Utils.getRandomItem({ items: plot.stories });

    this.setState({
      activeScene,
      sceneOptionA,
      sceneOptionB,
      pageNum: this.state.pageNum + 1,
      story
    });
  };

  playWordSound = (event, { word }) => {
    word = word.replace(/[.|,|/?]/, "");
    this.setState({ sound: Sounds[word] });
  };

  renderNarrative = () => {
    const { activeScene, sceneOptionA, sceneOptionB, story } = this.state;

    const narrative = getNarrative({
      plot,
      activeScene,
      sceneOptionA,
      sceneOptionB,
      story
    });

    const renderedNarrative =
      narrative &&
      narrative.map((sentence, sentenceIndex) => {
        const parsedSentence = sentence.split(/\s/);

        const renderedSentence = parsedSentence.map((word, wordIndex) => {
          const tabIndex = 100 * sentenceIndex + (wordIndex + 1);

          // TODO - fix autofocus
          const autofocus = tabIndex === 1 ? { autoFocus: true } : { test: 3 };

          return (
            <span
              key={wordIndex}
              {...autofocus}
              autoFocus
              tabIndex={tabIndex}
              className={css.sentenceWord}
              onClick={event => this.playWordSound(event, { word })}
              onFocus={event => this.playWordSound(event, { word })}
            >
              {word}
            </span>
          );
        });

        return (
          <span key={sentenceIndex} className={css.sentence}>
            {renderedSentence}
          </span>
        );
      });

    return <div className={css.narrative}>{renderedNarrative}</div>;
  };

  changeScene = ({ scene }) => {
    this.updateActiveScene({ activeScene: scene });
  };

  renderButtons = () => {
    const options = [this.state.sceneOptionA, this.state.sceneOptionB];
    const buttons = options.map((scene, i) => {
      if (!scene) {
        return null;
      }

      const onClick = () => this.changeScene({ scene });

      return (
        <Button key={i} onClick={onClick} className={css.choiceButton}>
          {scene.location}
        </Button>
      );
    });
    return <div className={css.decisionButtonRow}>{buttons}</div>;
  };

  render() {
    return (
      <div className={css.textPage}>
        <audio src={this.state.sound} autoPlay />
        <div className={css.story}>
          {this.renderNarrative()}
          {this.renderButtons({ activeScene: this.state.activeScene })}
        </div>
      </div>
    );
  }
}
export default observer(WordPage);
