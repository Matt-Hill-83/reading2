import firebase from "@firebase/app";
import "@firebase/firestore";
import { initFirestorter, Collection, Document } from "firestorter";
import { struct } from "superstruct";

firebase.initializeApp({
  // apiKey: "AIzaSyAslt8cmAwctNGvaf6BZLRwxINbtycf78I90210",
  // authDomain: "happy-reader-4.firebaseapp.com",
  // databaseURL: "https://happy-reader-4.firebaseio.com",
  projectId: "happy-reader-4"
  // storageBucket: "happy-reader-4.appspot.com"
});

const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

initFirestorter({ firebase: firebase });

class Word extends Document {
  constructor(source, options) {
    super(source, {
      ...(options || {}),
      schema: struct({
        text: "string?",
        isFavorite: "boolean?",
        name: "string?",
        type: "string?",
        image: "string?"
      })
    });
  }
}

const words2 = new Collection("words", {
  DocumentClass: Word
});

export { words2 };
