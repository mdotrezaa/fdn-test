import { ERROR_ARTICLE, GET_ARTICLE } from "../types";

export const getAllArticle = () => async (dispatch) => {
  try {
    fetch("https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp")
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: GET_ARTICLE,
          payload: res,
        }),
      );
  } catch (e) {
    dispatch({
      type: ERROR_ARTICLE,
      payload: console.log(e),
    });
  }
};
