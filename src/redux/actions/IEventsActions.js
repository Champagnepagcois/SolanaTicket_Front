import { ActionTypes } from "../constants/actions-types";
import AxiosConfig from "../../axios/conf";

export const loadIncomingEventsbyPlace = (minDate, maxDate) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.LOAD_PRINCIPAL_EVENTS_REQUEST });
    return AxiosConfig.configApiRapidapi
      .get(`location?name=Mexico&minDate=${minDate}&maxDate=${maxDate}`)
      .then(
        (response) => {
          dispatch({
            type: ActionTypes.LOAD_PRINCIPAL_EVENTS_SUCCESS,
            payload: response.data.data,
          });
        },
        (err) =>
          dispatch({
            type: ActionTypes.LOAD_PRINCIPAL_EVENTS_FAILURE,
            payload: { error: err.message },
          })
      );
  };
};
