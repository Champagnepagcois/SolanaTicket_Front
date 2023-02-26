import { ActionTypes } from "../constants/actions-types";

const initialState = {
  top: [],
  search: [],
  loading: false,
  error: null,
};

export const PEventsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOAD_PRINCIPAL_EVENTS_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.LOAD_PRINCIPAL_EVENTS_SUCCESS:
      return { ...state, loading: false, top: payload || [] };
    case ActionTypes.LOAD_PRINCIPAL_EVENTS_FAILURE:
      return { ...state, loading: false, error: payload.mesage };

    case ActionTypes.LOAD_SEARCH_EVENTS_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.LOAD_SEARCH_EVENTS_SUCCESS:
      return { ...state, loading: false, search: payload || [] };
    case ActionTypes.LOAD_SEARCH_EVENTS_FAILURE:
      return { ...state, loading: false, error: payload.message };
    default:
      return state;
  }
};
