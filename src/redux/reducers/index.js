import { combineReducers } from "redux";
import { articleReducers } from "./articleReducers";
import { editorReducers } from "./editorReducers";
import { reviewReducers } from "./reviewReducers";

export default combineReducers({
  editors: editorReducers,
  articles: articleReducers,
  reviews: reviewReducers
});
