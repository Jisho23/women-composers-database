import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { List } from "semantic-ui-react";

class App extends Component {
  state = {
    composers: {},
    filters: {
      name: ""
    }
  };
  componentDidMount() {
    const json = require("./data.json");
    const composerList = json["Women Composers Database"];
    this.setState({ composers: composerList });
    debugger;
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Women Composers Database</h1>
        </header>
        <List className="App-intro">
          {Object.keys(this.state.composers).map(composer => (
            <List.Item>{composer}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
