import { ActionTypes } from "../constants/actions-types";

const initialState = {
  artist: [],
  loading: false,
  error: null,
};

export const tokenReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOAD_TOP_ARTIST_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.LOAD_TOP_ARTIST_SUCCESS:
      return { ...state, loading: false, artist: payload || [] };
    case ActionTypes.LOAD_TOP_ARTIST_FAILURE:
      return { ...state, loading: false, error: payload.mesage };
    default:
      return state;
  }
};
