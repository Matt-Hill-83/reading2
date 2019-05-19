import React from "react";
import "./App.module.scss";
import { FirestoreCollection, FirestoreDocument } from "react-firestore";
import MainStory from "./components/MainStory/MainStory";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

function App() {
  const muiTheme = getMuiTheme();

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        {/* <FirestoreCollection
          path="stories"
          // sort="publishedDate:desc,authorName"
          render={({ isLoading, data }) => {
            console.log("data", data); // zzz

            return isLoading ? (
              <div>loading</div>
            ) : (
              <div>
                <h1>Stories</h1>
                <ul>
                  {data.map(story => (
                    <li key={story.id}>
                      {story.title} - {story.authorName}
                    </li>
                  ))}
                </ul>
              </div>
            );
          }}
        />

        <FirestoreDocument
          path="stories/oSU49KDEgxbkZr1ZAfN7"
          render={({ isLoading, data }) => {
            return isLoading ? (
              <div>loading</div>
            ) : (
              <div>
                <span>--------------------------------------------------</span>
                <h1>{data.title}</h1>
                <h2>
                  {data.authorName} - {data.publishedDate}
                </h2>
                <p>{data.description}</p>
              </div>
            );
          }}
        />
      */}
        <MainStory />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
