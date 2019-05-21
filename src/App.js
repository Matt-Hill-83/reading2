import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { useCookies } from "react-cookie";

import MainStory from "./components/MainStory/MainStory";
import "./App.module.scss";
import { UserConfigStore } from "./Stores/UserConfigStore";

// import { userConfig } from "./Stores/UserConfigStore";

function App() {
  const muiTheme = getMuiTheme();

  const [cookies, setCookie] = useCookies(["name"]);
  const newName = Math.floor(Math.random() * 1000 + 1);

  if (!cookies.name) {
    setCookie("name", newName, { path: "/" });
  }
  // setCookie("name", newName, { path: "/" });

  // console.log("UserConfigStore", UserConfigStore); // zzz

  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        <span>{UserConfigStore.docs}</span>
        {cookies.name && <h1>Hello {cookies.name}!</h1>}
        <MainStory />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
