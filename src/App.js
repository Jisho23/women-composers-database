import React, { Component } from "react";
import "./App.css";
import { Segment, Sidebar, Menu, Container } from "semantic-ui-react";
import Navbar from "./components/Navbar.js";
import ComposerInfo from "./components/ComposerInfo";
import SidebarFilter from "./components/Sidebar.js";
import AdvancedFilterForm from "./components/AdvancedFilterForm.js";

class App extends Component {
  state = {
    nameFilter: "",
    advancedFilters: false,
    filters: {}
  };

  componentDidMount() {}

  searchByName = event => {
    this.setState({ nameFilter: event.target.value });
  };
  showAdvancedFilters = event => {
    this.setState({ advancedFilters: !this.state.advancedFilters });
    console.log(this.state.advancedFilters);
  };

  setAdvancedFilter = (name, value) => {
    debugger;
    let advancedFilters = this.state.filters;
    advancedFilters[name] = value;
    this.setState({ filters: advancedFilters });
  };

  render() {
    const json = require("./data.json");
    const composerInfo = json["Women Composers Database"];
    let composerNames = [];
    for (let composer in json["Women Composers Database"]) {
      composerNames.push(composer);
    }

    composerNames = composerNames.filter(name =>
      name.toLowerCase().includes(this.state.nameFilter.toLowerCase())
    );

    for (let attribute in this.state.filters) {
      if (
        typeof this.state.filters[attribute] === "string" ||
        this.state.filters[attribute] instanceof String
      ) {
        composerNames = composerNames.filter(name => {
          return composerInfo[name][attribute]
            .toLowerCase()
            .includes(this.state.filters[attribute].toLowerCase());
        });
      } else if (this.state.filters[attribute] === true) {
        composerNames = composerNames.filter(name => {
          return composerInfo[name][attribute] === "X";
        });
      }
    }

    // if (this.state.filters[attribute]) {
    //   composerNames = composerNames.filter(name => {
    //     return composerInfo[name][attribute] === "X";
    //   });
    // }

    return (
      <div>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="uncover"
            direction="left"
            visible={this.state.advancedFilters}
            width={"wide"}
            vertical
            inverted
          >
            <AdvancedFilterForm setFilter={this.setAdvancedFilter} />
          </Sidebar>
          <Sidebar.Pusher>
            <div className="App" style={{ minHeight: 700 }}>
              <Navbar
                nameFilter={this.state.nameFilter}
                searchByName={this.searchByName}
                showAdvancedFilters={this.showAdvancedFilters}
              />

              <Segment.Group compact className="Composer List">
                {composerNames.map(composer => (
                  <ComposerInfo composerInfo={composerInfo[composer]} />
                ))}
              </Segment.Group>
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default App;
