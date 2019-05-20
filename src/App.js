import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

import MainStory from "./components/MainStory/MainStory";
import "./App.module.scss";

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
