import React from "react";
import { Form, Header, Menu } from "semantic-ui-react";

export const createAdvancedFilterForm = (state, handleChange) => {
  return (
    <div>
      <Menu
        vertical
        inverted
        color="blue"
        style={{ marginTop: "4em", minHeight: 700 }}
      >
        <Menu.Item>
          <Header inverted>Filter By Race</Header>
        </Menu.Item>
        <Menu.Item>
          <Form inverted>
            <label>
              White{" "}
              <input
                name="Wh"
                type="checkbox"
                checked={state.wh}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Black{" "}
              <input
                name="Bl"
                type="checkbox"
                checked={state.bl}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              LatinX{" "}
              <input
                name="Lat"
                type="checkbox"
                checked={state.lat}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Asian{" "}
              <input
                name="Asn"
                type="checkbox"
                checked={state.asn}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              West Asian / North African{" "}
              <input
                name="WANA"
                type="checkbox"
                checked={state.wana}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              South Asian{" "}
              <input
                name="SoAs"
                type="checkbox"
                checked={state.soas}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              American Indian{" "}
              <input
                name="Amin"
                type="checkbox"
                checked={state.amin}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Other{" "}
              <input
                name="Oth"
                type="checkbox"
                checked={state.oth}
                onChange={handleChange}
              />
            </label>
          </Form>
        </Menu.Item>
        <Menu.Item>
          <Header inverted>Filter by genre</Header>
        </Menu.Item>
        <Menu.Item>
          <Form inverted>
            <label>
              Orchestral{" "}
              <input
                name="Or"
                type="checkbox"
                checked={state.or}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Wind Band{" "}
              <input
                name="W"
                type="checkbox"
                checked={state.w}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Choral{" "}
              <input
                name="Cho"
                type="checkbox"
                checked={state.cho}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Chamber{" "}
              <input
                name="Cha"
                type="checkbox"
                checked={state.cha}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Voice{" "}
              <input
                name="V"
                type="checkbox"
                checked={state.v}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Opera{" "}
              <input
                name="Op"
                type="checkbox"
                checked={state.op}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Jazz or Improv{" "}
              <input
                name="J/I"
                type="checkbox"
                checked={state["J/I"]}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Video Games{" "}
              <input
                name="VG"
                type="checkbox"
                checked={state.vg}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Musical Theatre{" "}
              <input
                name="MT"
                type="checkbox"
                checked={state.mt}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Song Writing{" "}
              <input
                name="SW"
                type="checkbox"
                checked={state.sw}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Electroacoustic & Installation{" "}
              <input
                name="E/A"
                type="checkbox"
                checked={state["E/A"]}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Folk or Traditional{" "}
              <input
                name="F/Tr"
                type="checkbox"
                checked={state["F/Tr"]}
                onChange={handleChange}
              />
            </label>
          </Form>
        </Menu.Item>
        <Menu.Item>
          <label>
            Search by Country{" "}
            <input
              name="COUNTRY (of residence)"
              type="text"
              value={state["COUNTRY (of residence)"]}
              onChange={handleChange}
            />
          </label>
        </Menu.Item>
        <Menu.Item>
          <label>
            Search by City of Residence{" "}
            <input
              name="CITY/STATE (of residence)"
              type="text"
              value={state["CITY/STATE (of residence)"]}
              onChange={handleChange}
            />
          </label>
        </Menu.Item>
      </Menu>
    </div>
  );
};
