import React, { Component } from "react";
import { Segment, Container, List, Divider } from "semantic-ui-react";

class PageFooter extends Component {
  render() {
    return (
      <Segment
        inverted
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
        vertical
      >
        <Container textAlign="center">
          <p>This is an rough draft and prototype. Please pardon our dust :)</p>
          <Divider inverted section />
          <List horizontal inverted divided link>
            <List.Item
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSdqfwwLofsdY9seniIKYLzyK22ycEOURJK2iqNLc951Ojhm8g/viewform"
            >
              Submit a new composer
            </List.Item>
            <List.Item
              as="a"
              href="https://docs.google.com/spreadsheets/d/1vD-hWsQYvi6j-6NP_HCLRtmLKdPX08IXmCOeAPV7ESY/edit#gid=0"
            >
              Original Database
            </List.Item>
            <Divider inverted section />
          </List>
        </Container>
      </Segment>
    );
  }
}

export default PageFooter;
