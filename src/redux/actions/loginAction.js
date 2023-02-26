import axios from "axios";
import { ActionTypes } from "../constants/actions-types";
import AxiosConfig from "../../axios/conf";
import { MirrorWorld, ClusterEnvironment } from "@mirrorworld/web3.js";

export const loadLogin = () => {
  const URLTokenMirror = "mw_U9w4i8sh6hALNUWBE89p0JNzQ2imgg4MfAX";

  const mirrorworld = new MirrorWorld({
    //apiKey: `${process.env.REACT_APP_MIRROR_WORLD_API_URL_KEY}`, // Replace this with the API Key for your project
    apiKey: URLTokenMirror,
    env: ClusterEnvironment.testnet, // Can be ClusterEnvionment.mainnet for mainnet
  });
  return (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_REQUEST });
    return mirrorworld.login().then(
      (response) => {
        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          payload: response,
        });
      },
      (err) =>
        dispatch({
          type: ActionTypes.LOGIN_FAILURE,
          payload: { error: err },
        })
    );
  };
};

export const loadLogout = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_LOGOUT });
  };
};
