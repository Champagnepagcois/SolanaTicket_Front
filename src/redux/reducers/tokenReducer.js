import { ActionTypes } from "../constants/actions-types";

const initialState = {
  login: false,
  data: {
    user:{
      username:"",
    }
  },
  loading: false,
  error: null,
};

export const tokenReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.LOGIN_REQUEST:
      return { ...state, loading: true };
    case ActionTypes.LOGIN_SUCCESS:
      return { ...state, loading: false, login: true, data: payload || [] };
    case ActionTypes.LOGIN_FAILURE:
      return { ...state, loading: false, error: payload.mesage };
    case ActionTypes.LOGIN_LOGOUT:
      return { ...state, loading: false, login: false, data: [] };
    default:
      return state;
  }
};
