import { ERROR_EDITOR, GET_EDITOR } from "../types";

export const getAllEditors = () => async (dispatch) => {
  try {
    fetch("https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp")
      .then((res) => res.json())
      .then((res) =>
        dispatch({
          type: GET_EDITOR,
          payload: res,
        }),
      );
  } catch (e) {
    dispatch({
      type: ERROR_EDITOR,
      payload: console.log(e),
    });
  }
};
