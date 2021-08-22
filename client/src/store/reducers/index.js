import { ERROR, LOADING, FETCHEDCOVIDDATA } from "../actions/types";

const initState = {
  loading: false,
  error: false,
  covidData: {},
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOADING:
      return {
        ...state,
        loading: payload,
      };
    case ERROR:
      return {
        ...state,
        error: payload,
      };
    case FETCHEDCOVIDDATA:
      return {
        ...state,
        covidData: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
