// import { observable, action, computed, runInAction } from "mobx";
import { extendObservable } from "mobx";

export class WordsStore {
  constructor() {
    // this.activeScene = activeScene;

    extendObservable(this, {
      activeScene: {}
    });
  }

  // @action
  getActiveScene() {
    return this.activeScene;
  }

  // @action
  setActiveScene(activeScene) {
    this.activeScene = activeScene;
  }
}
