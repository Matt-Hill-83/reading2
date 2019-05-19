import React from "react";
import ReactDOM from "react-dom";
import firebase from "@firebase/app";
import "@firebase/firestore";
import { FirestoreProvider } from "react-firestore";

import App from "./App";
import Todos from "./components/Todos/Todos";

// firebase.initializeApp(config);

// ReactDOM.render(<Todos />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(
//   <FirestoreProvider firebase={firebase}>
//     <App />
//   </FirestoreProvider>,
//   document.getElementById("root")
// );
