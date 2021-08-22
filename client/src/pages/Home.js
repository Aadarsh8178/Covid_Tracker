import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCovidData } from "../store/actions";
import Spinner from "../components/UI/Spinner";
import CountryData from "../components/CountryData/CountryData";
import StateData from "../components/StateData/StateData";

function Home({ loading, fetchCovidData }) {
  useEffect(() => {
    fetchCovidData();
  }, []);

  return (
    <div>
      <h1>Covid Tracker</h1>
      <button onClick={fetchCovidData} className="btn btn-secondary mt-3">
        Fetch New Data
      </button>
      <br />
      {!loading ? (
        <div className="w-100 d-flex flex-column justify-content-center">
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
