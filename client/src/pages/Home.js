import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchCovidData } from "../store/actions";
import Spinner from "../components/UI/Spinner";
import CountryData from "../components/CountryData/CountryData";
import StateData from "../components/StateData/StateData";
const apiUrl = "https://data.covid19india.org/data.json";
function Home({ loading, fetchCovidData }) {
  const [src, setSrc] = useState(apiUrl);

  useEffect(() => {
    fetchCovidData(apiUrl);
  }, []);

  return (
    <div>
      <h1>Covid Tracker</h1>
      <div className="d-flex flex-wrap justify-content-center mt-3">
        <button
          onClick={() => {
            setSrc("https://www.mohfw.gov.in/");
            fetchCovidData();
          }}
          className="btn btn-secondary mx-3"
        >
          Scrape Data
        </button>
        <button
          onClick={() => {
            setSrc(apiUrl);
            fetchCovidData(apiUrl);
          }}
          className="btn btn-secondary mx-3"
        >
          Fetch Through API
        </button>
      </div>

      <br />
      {!loading ? (
        <div className="w-100 d-flex flex-column justify-content-center">
          <span
            className="badge bg-light"
            style={{ width: "fit-content", margin: "auto", fontSize: "14px" }}
          >
            <a href={src}>data source : {src}</a>
          </span>
          <CountryData />
          <StateData />
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
});
export default connect(mapStateToProps, { fetchCovidData })(Home);
