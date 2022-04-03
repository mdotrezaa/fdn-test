import { GET_EDITOR } from "../types";

const initialState = {
  articles: false,
  loading: true,
};

export const articleReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EDITOR:
      return {
        ...state,
        articles: payload["latest articles"],
        loading: false,
      };

    default:
      return state;
  }
};
