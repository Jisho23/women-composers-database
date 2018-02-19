import React, { Component } from "react";
import {
  Segment,
  Sidebar,
  Header,
  Menu,
  Icon,
  Checkbox,
  Form,
  Button
} from "semantic-ui-react";

class AdvancedFilterForm extends Component {
  state = {};

  handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
    this.props.setFilter(name, value);
  };

  render() {
    return (
      <div>
        <Header inverted>Filter By Race</Header>
        <Form inverted>
          <label>
            White
            <input
              name="Wh"
              type="checkbox"
              checked={this.state.wh}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Black
            <input
              name="Bl"
              type="checkbox"
              checked={this.state.bl}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            LatinX
            <input
              name="Lat"
              type="checkbox"
              checked={this.state.lat}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Asian
            <input
              name="Asn"
              type="checkbox"
              checked={this.state.asn}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            West Asian / North African
            <input
              name="WANA"
              type="checkbox"
              checked={this.state.wana}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            South Asian
            <input
              name="SoAs"
              type="checkbox"
              checked={this.state.soas}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            American Indian
            <input
              name="Amin"
              type="checkbox"
              checked={this.state.amin}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Other
            <input
              name="Oth"
              type="checkbox"
              checked={this.state.oth}
              onChange={this.handleInputChange}
            />
          </label>
        </Form>
      </div>
    );
  }
}

export default AdvancedFilterForm;
