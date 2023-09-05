import axios from "axios";

export const login = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING", payload: true });

    const res = await axios.post("http://localhost:5000/api/login", userData);

    if (res.data) {
      dispatch({
        type: "AUTH",
        payload: {
          user: res.data.user,
          token: res.data.access_token,
        },
      });
      dispatch({ type: "LOADING", payload: false });
      dispatch({ type: "SUCCESS", payload: "Успешное авторизация!" });

      return res.data;
    }
  } catch (err) {
    console.log(err.response.data.msg);
    dispatch({ type: "ERROR", payload: err.response.data.msg });
    dispatch({ type: "LOADING", payload: false });
  }
};
