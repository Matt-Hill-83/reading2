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

const { makeStory, plot } = mySentences;
const { words, wordTypes } = myWords;

export default class MyList extends React.Component {
  state = {
    activeTab: wordTypes.name,
    showStory: true,
    activeScene: undefined
  };

  async componentWillMount() {
    console.log("plot", plot); // zzz

    this.setState({ activeScene: plot.activeScene });
  }

  renderScene = ({ activeScene }) => {
    const sentences = makeStory({
      plot,
      activeScene: activeScene,
      nextSceneA: activeScene,
      nextSceneB: activeScene
    });

    return (
      sentences &&
      sentences[0].map((sentence, i) => {
        return (
          <span key={i} className="word sentence">
            {sentence}
          </span>
        );
      })
    );
  };

  renderButtons = ({ activeScene }) => {
    return activeScene.buttons.map((button, i) => {
      console.log(
        "this.state.plot.scenes[button.nextScene",
        plot.scenes[button.nextScene]
      ); // zzz

      const onClick = ({}) => {
        this.setState({
          activeScene: plot.scenes[button.nextScene]
        });
      };

      return (
        <Button key={i} onClick={onClick} className="choice-button">{`Go To ${
          button.nextScene
        }`}</Button>
      );
    });
  };

  newStory = () => {
    this.setState({ showStory: !this.state.showStory });
  };

  render() {
    console.log("render MyList"); // zzz

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
            <div className="right">
              {/* <SketchPicker /> */}
              <div className="story-box">
                <div className="story">{this.renderScene({ activeScene })}</div>
                <div xxx-className="story">
                  {this.renderButtons({ activeScene })}
                </div>
                <div className="image-container">
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
            </div>
          )}
        </div>
      </div>
    );
  }
}
