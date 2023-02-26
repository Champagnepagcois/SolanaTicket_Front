import axios from "axios";
import {ActionTypes} from "../constants/actions-types";
import AxiosConfig from "../../axios/conf";
export const loadEvents = ({nameArtist}) => {
    return (dispatch) => {
      dispatch({ type: ActionTypes.LOAD_TEAMS_REQUEST });
      return AxiosConfig.configApiRapidapi.get(`artist?name=${nameArtist}&page=1`).then(
        (response) => {
          dispatch({
            type: ActionTypes.LOAD_SEARCH_EVENTS_SUCCESS,
            payload: response.data.data,
          });
        },
        (err) =>
          dispatch({
            type: ActionTypes.LOAD_SEARCH_EVENTS_FAILURE,
            payload: { error: err.message },
          })
      );
    };
  };