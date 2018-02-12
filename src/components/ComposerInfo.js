import React, { Component } from "react";
import { Segment, Button } from "semantic-ui-react";

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
        {this.props.composerInfo["COMPOSER NAMES"]}
        <Button floated="right" onClick={this.hideShowInfo}>
          {this.state.revealed ? "Hide" : "Show"}
        </Button>
        {this.state.revealed ? null : null}
      </Segment>
    );
  }
}

export default ComposerInfo;
