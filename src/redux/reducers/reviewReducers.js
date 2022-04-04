import { GET_EDITOR } from "../types";

const initialState = {
  reviews: false,
  loading: true
};

export const reviewReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_EDITOR:
      return {
        ...state,
        reviews: payload["latest review"],
        loading: false
      };

    default:
      return state;
  }
};
