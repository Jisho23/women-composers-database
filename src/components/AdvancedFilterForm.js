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

import * as FormHelper from "./helpers/FilterForm.js";

class AdvancedFilterForm extends Component {
  state = {};

  handleInputChange = event => {
    debugger;
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
    this.props.setFilter(name, value);
  };

  render() {
    return (
      <div>
        {FormHelper.createAdvancedFilterForm(
          this.state,
          this.handleInputChange
        )}
      </div>
    );
  }
}

export default AdvancedFilterForm;
