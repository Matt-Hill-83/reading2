import React from "react";
import { IconNames } from "@blueprintjs/icons";
import { Button, Icon } from "@blueprintjs/core";
// import { SketchPicker } from "react-color";
import { observer } from "mobx-react";

import Utils from "../Utils/Utils.js";
import Images from "../images/images.js";

import myWords from "../Models/words.js";
import mySentences from "../Models/sentences.js";

import FlashCards from "../FlashCards/FlashCards";

import { WordsStore } from "../Stores/WordsStore";

// import css from "./MyList.scss";
import "./MyList.scss";

const { getNarrative, plot } = mySentences;
const { wordTypes } = myWords;

class MyList extends React.Component {
  state = {
    activeTab: wordTypes.name,
    showStory: true,
    activeScene: undefined,
    page: 0
  };

  wordsStore = new WordsStore({ activeScene: plot.activeScene });
  async componentWillMount() {
    console.log("WordsStore", WordsStore); // zzz

    const activeScene = plot.activeScene;

    this.updateActiveScene({ activeScene });
  }

  updateActiveScene = ({ activeScene }) => {
    activeScene.isUsed = true;

    const scenes = plot.scenes;
    const scenesList = Object.values(scenes) || [];

    Utils.unreserveItems({ items: scenesList });

    const sceneOptionA = Utils.reserveRandomItem({ items: scenesList });
    const sceneOptionB = Utils.reserveRandomItem({ items: scenesList });

    this.wordsStore.setActiveScene(activeScene);
    this.setState({
      // activeScene,
      sceneOptionA,
      sceneOptionB,
      page: this.state.page + 1
    });
  };

  renderScene = () => {
    console.log(
      "render scene --------------------------------------------------"
    ); // zzz

    return (
      <React.Fragment>
        {this.renderSceneList()}
        {this.renderNarrative({
          activeScene: this.wordsStore.getActiveScene()
        })}
        {this.renderButtons({ activeScene: this.wordsStore.getActiveScene() })}
      </React.Fragment>
    );
  };

  renderNarrative = ({ activeScene }) => {
    const narrative = getNarrative({
      plot,
      activeScene: activeScene,
      sceneOptionA: activeScene,
      sceneOptionB: activeScene
    });

    const renderedNarrative =
      narrative &&
      narrative.map((sentence, i) => {
        return (
          <span key={i} className="sentence">
            {sentence}
          </span>
        );
      });

    return <div className="narrative">{renderedNarrative}</div>;
  };

  renderSceneList = () => {
    const scenesList = Object.values(plot.scenes);

    const renderedScenes = scenesList.map((scene, index) => {
      const iconColor = scene.isUsed ? "purple" : "blue";
      return (
        <div key={index}>
          <Icon color={iconColor} icon={IconNames.WALK} />
          {scene.location}
        </div>
      );
    });
    return <div className="scene-list">{renderedScenes}</div> || null;
  };

  changeScene = ({ scene }) => {
    this.updateActiveScene({ activeScene: scene });
  };

  // buttons should be randomly derived from the nextScenes
  renderButtons = () => {
    const options = [this.state.sceneOptionA, this.state.sceneOptionB];
    const buttons = options.map((scene, i) => {
      if (!scene) {
        return null;
      }

      const onClick = () => this.changeScene({ scene });

      return (
        <Button key={i} onClick={onClick} className="choice-button">{`Go To ${
          scene.location
        }`}</Button>
      );
    });
    return <div className="decision-button-row">{buttons}</div>;
  };

  newStory = () => {
    this.setState({ showStory: !this.state.showStory });
  };

  renderHeader = () => {
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
        Toggle
      </Button>
    );

    return (
      <span className="header banner">
        {`Girls are good at...    ${goodAt}!`}
        {toggleButton}
      </span>
    );
  };

  renderPicturePage = () => {
    const activeScene = this.wordsStore.getActiveScene();
    const defaultImage = "waterfall";
    const renderedImage = Images[activeScene.location] || Images[defaultImage];

    const youImage = plot.you.creature;
    const friendImage = Images[activeScene.newFriend.type];

    return (
      <div className="image-container">
        <div className="location-header">{`${activeScene.location}`}</div>
        <div className="background-image">
          <img className="background-image" src={renderedImage} alt={"image"} />
          <img
            className="character-image character1"
            src={Images[youImage]}
            alt={youImage}
          />
          {friendImage && (
            <img
              className="character-image character2"
              src={friendImage}
              alt="friend"
            />
          )}
        </div>
      </div>
    );
  };

  renderWordPage = () => {
    return (
      <div className="text-page">
        <div className="page-number">{`Page ${this.state.page}`}</div>
        <div className="story">{this.renderScene()}</div>
      </div>
    );
  };

  renderStory = () => {
    return (
      <div className="story-box">
        {this.renderWordPage()}
        {this.renderPicturePage()}
      </div>
    );
  };

  render() {
    return (
      // <div className={css.test}>
      <div className="main">
        {this.renderHeader()}
        <div className="body">
          {!this.state.showStory && <FlashCards />}
          {this.state.showStory && this.renderStory()}
        </div>
      </div>
    );
  }
}
export default observer(MyList);
