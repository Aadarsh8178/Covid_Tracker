import { LOADING, ERROR, FETCHINGCOVIDDATA, FETCHEDCOVIDDATA } from "./types";

export const fetchCovidData =
  (path = "/api/covid") =>
  async (dispatch) => {
    dispatch({ type: LOADING, payload: true });
    dispatch({ type: FETCHINGCOVIDDATA, payload: null });
    fetch(path)
      .then((res) => res.json())
      .then((data) => {
        let convertedData = data;
        if (path !== "/api/covid") {
          let states = {};
          let country = {
            active: 0,
            recovered: 0,
            deaths: 0,
          };
          data.statewise
            .filter((state) => state.state !== "State Unassigned")
            .forEach((state) => {
              if (state.state === "Total") country = { ...state };
              else states[state.state] = { ...state, name: state.state };
            });
          convertedData = { states, country };
        }

        dispatch({ type: FETCHEDCOVIDDATA, payload: convertedData });
      })
      .catch((e) => {
        dispatch({ type: ERROR, payload: e });
      })
      .finally(() => {
        dispatch({ type: LOADING, payload: false });
      });
  };
