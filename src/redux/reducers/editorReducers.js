import { GET_EDITOR } from "../types";

const initialState = {
  editors: false,
  loading: true,
};

export const editorReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EDITOR:
      return {
        ...state,
        editors: payload["editor's choice"],
        loading: false,
      };

    default:
      return state;
  }
};
