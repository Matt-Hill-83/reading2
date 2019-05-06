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
    console.log("plot", plot); // zzz

    this.setState({ activeScene: plot.activeScene });
  }

  renderScene = ({ activeScene }) => {
    // TODO
    // TODO
    // TODO
    // TODO
    // choose next scenes from freshScenes list and assign them to buttons
    // create map that shows visited places
    // create an image for each scene

    // generate 2 random scenes here.
    // note, scene is different from narrative
    //  scene is who and where
    // narrative is events
    // const nextSceneA =

    return (
      <React.Fragment>
        {this.renderNarrative({ activeScene })}
        {this.renderButtons({ activeScene })}
        {this.renderSceneList({ activeScene })}
      </React.Fragment>
    );
  };

  renderNarrative = ({ activeScene }) => {
    const narrative = getNarrative({
      plot,
      activeScene: activeScene,
      nextSceneA: activeScene,
      nextSceneB: activeScene
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
    const sceneNames = Object.keys(plot.scenes);
    const scenesList = sceneNames.map(name => plot.scenes[name]);

    const freshScenes = scenesList.map((scene, index) => {
      const iconColor = scene.isVisited ? "purple" : "blue";
      return (
        <div key={index}>
          <Icon color={iconColor} icon={IconNames.WALK} />
          {scene.location}
        </div>
      );
    });
    return <div className="scene-list">{freshScenes}</div> || null;
  };

  // buttons should be randomly derived from the nextScenes
  renderButtons = ({ activeScene }) => {
    const buttons = activeScene.buttons.map((button, i) => {
      const onClick = () => {
        this.setState({
          activeScene: plot.scenes[button.nextScene],
          page: this.state.page + 1
        });
      };

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

  renderGirlsAreGoodAt = () => {
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

  render() {
    const { activeScene } = this.state;

    console.log("this.state", this.state); // zzz

    return (
      // <div className={css.test}>
      <div className="main">
        {this.renderGirlsAreGoodAt()}
        <div className="body">
          {!this.state.showStory && <FlashCards />}
          {this.state.showStory && (
            <div className="story-box">
              <div className="text-page">
                <div className="page-number">{`Page ${this.state.page}`}</div>
                <div className="story">{this.renderScene({ activeScene })}</div>
              </div>
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
            </div>
          )}
        </div>
      </div>
    );
  }
}
