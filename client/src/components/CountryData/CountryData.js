import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { convertToIndianNumberSystem } from "../../utilities";

const Card = styled.div`
  background: #9f7aea;
  color: #102a43;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  width: 250px;
  border-radius: 10px;
  & h2 {
    color: #f5f7fa;
    font-weight: 500;
  }
`;

function CountryData({ data }) {
  if (!data || !data.country) {
    return <p>Country data not availaible at the moment</p>;
  }

  const { active, recovered, deaths } = data.country;
  return (
    <div>
      <div
        className="d-flex flex-wrap w-100 justify-content-center"
        style={{ maxWidth: "900px", margin: "0 auto" }}
      >
        <div className="col-12 col-md-4 p-4 center">
          <Card back="#1DDECB">
            <h4>Recovered</h4>
            <h2>{convertToIndianNumberSystem(recovered)}</h2>
          </Card>
        </div>
        <div className="col-12 col-md-4 p-4 center">
          <Card back="#F48FB1">
            <h4>Active</h4>
            <h2>{convertToIndianNumberSystem(active)}</h2>
          </Card>
        </div>
        <div className="col-12 col-md-4 p-4 center">
          <Card back="#8f0031">
            <h4>Deaths</h4>
            <h2>{convertToIndianNumberSystem(deaths)}</h2>
          </Card>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.covidData,
});
export default connect(mapStateToProps, null)(CountryData);
