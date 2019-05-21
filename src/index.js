import React from "react";
import ReactDOM from "react-dom";
import "@firebase/firestore";
import "@blueprintjs/core/lib/css/blueprint.css";

import App from "./App";
import Words from "./components/Words/Words";

import firebase from "@firebase/app";
import "@firebase/firestore";
import { initFirestorter, Collection, Document } from "firestorter";
import { struct } from "superstruct";

// firebase.initializeApp({
//   // apiKey: "AIzaSyAslt8cmAwctNGvaf6BZLRwxINbtycf78I90210",
//   // authDomain: "happy-reader-4.firebaseapp.com",
//   // databaseURL: "https://happy-reader-4.firebaseio.com",
//   projectId: "happy-reader-4"
//   // storageBucket: "happy-reader-4.appspot.com"
// });

// initFirestorter({ firebase: firebase });

console.log("index"); // zzz

// Use this file to add words to the db in bulk.
// ReactDOM.render(<Words />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
