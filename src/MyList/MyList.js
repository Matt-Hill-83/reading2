import React from "react";
import { IconNames } from "@blueprintjs/icons";
import { Button, Icon, Tab, Tabs } from "@blueprintjs/core";
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
    activeTab: wordTypes["name"],
    sentences: [],
    showStory: true,
    activeScene: undefined
  };

  async componentDidMount() {
    this.setState({ words, activeScene: plot.activeScene });
  }

  renderSentences = () => {
    const sentences = makeStory({ words, plot });
    return sentences[0].map((sentence, i) => {
      return <span key={i} className="word sentence">{`${sentence}`}</span>;
    });
  };

  // renderButtons = () => {
  //   const buttons = this.state.buttons[0].map((sentence, i) => {
  //     return <span key={i} className="word sentence">{`${sentence}`}</span>;
  //   });
  //   return buttons;
  // };

  newStory = () => {
    makeStory({ words: this.state.words });
    this.setState({ showStory: !this.state.showStory });
  };

  render() {
    const words = this.state.words;
    if (!words) {
      return null;
    }

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
                <div className="story">{this.renderSentences()}</div>
                {/* <div className="story">{this.renderButtons()}</div> */}
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
