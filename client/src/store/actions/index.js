import { LOADING, ERROR, FETCHINGCOVIDDATA, FETCHEDCOVIDDATA } from "./types";

export const fetchCovidData = () => async (dispatch) => {
  dispatch({ type: LOADING, payload: true });
  dispatch({ type: FETCHINGCOVIDDATA, payload: null });

  fetch(`/api/covid`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: FETCHEDCOVIDDATA, payload: data });
      dispatch({ type: LOADING, payload: false });
    })
    .catch((e) => {
      dispatch({ type: ERROR, payload: error });
      dispatch({ type: LOADING, payload: false });
    });
};
