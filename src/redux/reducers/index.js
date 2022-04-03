import { combineReducers } from "redux";
import { articleReducers } from "./articleReducers";
import { editorReducers } from "./editorReducers";

export default combineReducers({
  editors: editorReducers,
  articles: articleReducers,
});
