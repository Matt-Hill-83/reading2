import React from "react";
import { IconNames } from "@blueprintjs/icons";
import { Button, Icon } from "@blueprintjs/core";
// import { SketchPicker } from "react-color";
// import { observer } from "mobx-react";

import Utils from "../Utils/Utils.js";
import Images from "../images/images.js";

import myWords from "../Models/words.js";
import mySentences from "../Models/sentences.js";

import FlashCards from "../FlashCards/FlashCards";

// import css from "./MyList.scss";
import "./MyList.scss";

const { getNarrative, plot } = mySentences;
const { words, wordTypes } = myWords;

export default class MyList extends React.Component {
  state = {
    activeTab: wordTypes.name,
    showStory: true,
    activeScene: undefined,
    page: 0
  };

  async componentWillMount() {
    const activeScene = plot.activeScene;

    this.updateActiveScene({ activeScene });
  }

  updateActiveScene = ({ activeScene }) => {
    activeScene.isUsed = true;

    const scenes = plot.scenes;
    const scenesList = Object.values(scenes) || [];

    Utils.unreserveItems({ items: scenesList });

    const sceneOptionA = Utils.reserveRandomItem({ items: scenesList });
    console.log("sceneOptionA+++++++++++++++++", sceneOptionA.location); // zzz
    const sceneOptionB = Utils.reserveRandomItem({ items: scenesList });
    console.log("sceneOptionB", sceneOptionB.location); // zzz

    this.setState({
      activeScene,
      sceneOptionA,
      sceneOptionB,
      page: this.state.page + 1
    });
  };

  renderScene = ({ activeScene }) => {
    console.log(
      "render scene --------------------------------------------------"
    ); // zzz

    return (
      <React.Fragment>
        {this.renderSceneList({ activeScene: this.state.activeScene })}
        {this.renderNarrative({ activeScene: this.state.activeScene })}
        {this.renderButtons({ activeScene: this.state.activeScene })}
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

  renderSceneList = ({}) => {
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

  changeScene = ({ button }) => {
    const activeScene = plot.scenes[button.nextScene];
    this.updateActiveScene({ activeScene });

    // this.setState({
    //   activeScene,
    //   page: this.state.page + 1
    // });
  };

  // buttons should be randomly derived from the nextScenes
  renderButtons = ({ activeScene }) => {
    const buttons = activeScene.buttons.map((button, i) => {
      const onClick = () => this.changeScene({ button });
      // const onClick = () => {
      //   this.setState({
      //     activeScene: plot.scenes[button.nextScene],
      //     page: this.state.page + 1
      //   });
      // };

      return (
        <Button key={i} onClick={onClick} className="choice-button">{`Go To ${
          button.nextScene
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
    return (
      <div className="image-container">
        <div className="location-header">
          {`${this.state.activeScene.location}`}
        </div>
        <div className="background-image">
          <img src={Images.meadow} alt="meadow" />
          <img
            className="character-image character1"
            src={Images.unicorn}
            alt="unicorn"
          />
          <img
            className="character-image character2"
            src={Images.fairy}
            alt="fairy"
          />
        </div>
      </div>
    );
  };

  renderWordPage = () => {
    const { activeScene } = this.state;
    return (
      <div className="text-page">
        <div className="page-number">{`Page ${this.state.page}`}</div>
        <div className="story">{this.renderScene({ activeScene })}</div>
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
    // console.log("this.state", this.state); // zzz
    console.log("renderMain"); // zzz

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
