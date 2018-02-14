import React, { Component } from "react";
import "./App.css";
import { Segment } from "semantic-ui-react";
import Navbar from "./components/Navbar.js";
import ComposerInfo from "./components/ComposerInfo";

class App extends Component {
  state = {
    composers: [],
    nameFilter: ""
  };

  componentDidMount() {
    const json = require("./data.json");
    const composerList = [];
    for (let composer in json["Women Composers Database"]) {
      composerList.push(composer);
    }
    this.setState({ composers: composerList });
  }

  searchByName = event => {
    this.setState({ nameFilter: event.target.value });
  };
  render() {
    const composerNames = this.state.composers.filter(name =>
      name.toLowerCase().includes(this.state.nameFilter.toLowerCase())
    );
    const json = require("./data.json");
    const composerInfo = json["Women Composers Database"];
    return (
      <div className="App">
        <Navbar
          nameFilter={this.state.nameFilter}
          searchByName={this.searchByName}
        />
        <Segment.Group compact className="Composer List">
          {composerNames.map(composer => (
            <ComposerInfo composerInfo={composerInfo[composer]} />
          ))}
        </Segment.Group>
      </div>
    );
  }
}

export default App;
