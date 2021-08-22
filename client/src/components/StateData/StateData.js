import React, { useState } from "react";
import TabularData from "./Tabular/Tabular";
import CovidMap from "./CovidMap/CovidMap";
import { connect } from "react-redux";
import styled from "styled-components";

const Tabs = styled.div`
  background: black;
`;
const Tab = styled.h5`
  padding: 0.8rem;
  text-align: center;
  cursor: pointer;
  background: ${({ active }) => (active ? "#424242" : "transparent")};
  &:hover {
    background: #9e9b9b;
  }
`;

function StateData({ data }) {
  const [tab, setSelectedTab] = useState("table");

  if (!data || !data.states) {
    return <p>State Data Not Availaible at the Moment</p>;
  }
  return (
    <div className="m-3 text-center">
      <h3 className="mb-3">StateWise Covid Data</h3>
      <Tabs className="d-flex flex-wrap">
        <Tab
          onClick={() => setSelectedTab("table")}
          className="col-6"
          active={tab === "table"}
        >
          Tablular Data
        </Tab>
        <Tab
          onClick={() => setSelectedTab("map")}
          className="col-6"
          active={tab === "map"}
        >
          Interactive Map
        </Tab>
      </Tabs>
      {tab === "table" && <TabularData data={data.states} />}
      {tab === "map" && <CovidMap data={data.states} />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.covidData,
});
export default connect(mapStateToProps, null)(StateData);
