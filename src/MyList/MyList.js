import React from "react";
import { Button } from "@blueprintjs/core";
// import { SketchPicker } from "react-color";
// import { observer } from "mobx-react";

import Utils from "../Utils/Utils.js";
import Images from "../images/images.js";

import myWords from "../Models/words.js";
import mySentences from "../Models/sentences.js";

import FlashCards from "../FlashCards/FlashCards";

import "./MyList.css";

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
    const sentences = getNarrative({
      plot,
      activeScene: activeScene,
      nextSceneA: activeScene,
      nextSceneB: activeScene
    });

    const index = this.state.page % 2;
    return (
      sentences &&
      sentences[index].map((sentence, i) => {
        return (
          <span key={i} className="sentence">
            {sentence}
          </span>
        );
      })
    );
  };

  renderButtons = ({ activeScene }) => {
    const buttons = activeScene.buttons.map((button, i) => {
      const onClick = ({}) => {
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

  render() {
    const { activeScene } = this.state;

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

    console.log("this.state", this.state); // zzz

    return (
      <div className="main">
        <span className="header banner">
          {`Girls are good at...    ${goodAt}!`}
          {toggleButton}
        </span>

        <div className="body">
          {!this.state.showStory && <FlashCards />}
          {this.state.showStory && (
            <div className="story-box">
              <div className="text-page">
                <div className="page-number">{`Page ${this.state.page}`}</div>
                <div className="story">{this.renderScene({ activeScene })}</div>
                {this.renderButtons({ activeScene })}
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
