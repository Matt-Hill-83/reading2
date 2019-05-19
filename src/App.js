import React from "react";
import "./App.module.scss";
import MainStory from "./components/MainStory/MainStory";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

function App() {
  const muiTheme = getMuiTheme();

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        <MainStory />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
