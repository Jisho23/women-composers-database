import React, { Component } from "react";
import { Segment, Header, Button } from "semantic-ui-react";

class ComposerInfo extends Component {
  state = {
    revealed: false
  };

  hideShowInfo = () => {
    this.setState({ revealed: !this.state.revealed });
  };

  render() {
    return (
      <Segment id={this.props.composerName}>
        {this.props.composerName}
        <Button floated="right" onClick={this.hideShowInfo}>
          {this.state.revealed ? "Hide" : "Show"}
        </Button>
      </Segment>
    );
  }
}

export default ComposerInfo;
