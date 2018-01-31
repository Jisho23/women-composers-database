import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  List,
  Container,
  Menu,
  Input,
  Segment,
  Header,
  Button
} from "semantic-ui-react";
import Navbar from "./components/Navbar.js";

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
    debugger;
    this.setState({ nameFilter: event.target.value });
  };
  render() {
    const composerNames = this.state.composers.filter(name =>
      name.toLowerCase().includes(this.state.nameFilter.toLowerCase())
    );
    let index = 0;

    return (
      <div className="App">
        <Navbar
          nameFilter={this.state.nameFilter}
          searchByName={this.searchByName}
        />
        <List className="App-intro">
          {composerNames.map(composer => (
            <List.Item id={index++}>{composer}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
