import React from "react";
import { Form, Header, Menu } from "semantic-ui-react";

export const createAdvancedFilterForm = (state, handleChange) => {
  return (
    <div>
      <Menu vertical inverted>
        <Menu.Item>
          <Header inverted>Filter By Race</Header>
        </Menu.Item>
        <Menu.Item>
          <Form inverted>
            <label>
              White
              <input
                name="Wh"
                type="checkbox"
                checked={state.wh}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Black
              <input
                name="Bl"
                type="checkbox"
                checked={state.bl}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              LatinX
              <input
                name="Lat"
                type="checkbox"
                checked={state.lat}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Asian
              <input
                name="Asn"
                type="checkbox"
                checked={state.asn}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              West Asian / North African
              <input
                name="WANA"
                type="checkbox"
                checked={state.wana}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              South Asian
              <input
                name="SoAs"
                type="checkbox"
                checked={state.soas}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              American Indian
              <input
                name="Amin"
                type="checkbox"
                checked={state.amin}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Other
              <input
                name="Oth"
                type="checkbox"
                checked={state.oth}
                onChange={handleChange}
              />
            </label>
          </Form>
        </Menu.Item>
      </Menu>
    </div>
  );
};
