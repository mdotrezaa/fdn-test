import { ERROR_REVIEW, GET_REVIEW } from "../types";

export const getAllReview = () => async (dispatch) => {
  try {
    fetch("https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp")
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: GET_REVIEW,
          payload: res,
        }),
      );
  } catch (e) {
    dispatch({
      type: ERROR_REVIEW,
      payload: console.log(e),
    });
  }
};
