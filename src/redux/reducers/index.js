import { combineReducers } from "redux";
import { tokenReducer } from "./tokenReducer";
import { artistReducer } from "./artistReducer";
import { PEventsReducer } from "./PEventsReducer";

const reducers = combineReducers({
  allArtist: artistReducer,
  allEvents: PEventsReducer,
  token: tokenReducer,
});

export default reducers;
