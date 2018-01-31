import React, { Component } from "react";
import {
  List,
  Container,
  Menu,
  Input,
  Segment,
  Header,
  Button
} from "semantic-ui-react";

class Navbar extends Component {
  render() {
    return (
      <Segment inverted>
        <Menu inverted>
          <Menu.Item>
            <Input
              icon="search"
              placeholder="Search by name"
              onChange={this.props.searchByName}
              value={this.props.nameFilter}
            />
          </Menu.Item>{" "}
          <Menu.Item>
            <Header as="h4" inverted color="teal">
              Welcome to the Women Composers Database Project
            </Header>
          </Menu.Item>
          <Menu.Item position="right">
            <Button>More filters</Button>
          </Menu.Item>
        </Menu>
      </Segment>
    );
  }
}

export default Navbar;
