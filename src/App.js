import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { List } from "semantic-ui-react";

class App extends Component {
  state = {
    composers: [],
    filters: {
      name: ""
    }
  };
  
  componentDidMount() {
    const json = require("./data.json");
    const composerList = [];
    for (let composer in json["Women Composers Database"]) {
      composerList.push(composer);
    }
    this.setState({ composers: composerList });
  }

  render() {
    const composerNames = this.state.composers.filter(name =>
      name.toLowerCase().includes(this.state.filters.name.toLowerCase())
    );

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Women Composers Database</h1>
        </header>
        <List className="App-intro">
          {composerNames.map(composer => <List.Item>{composer}</List.Item>)}
        </List>
      </div>
    );
  }
}

export default App;
