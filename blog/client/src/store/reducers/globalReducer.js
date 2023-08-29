const initialState = {
  success: "",
  error: "",
  loading: false,
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "ERROR":
      return {
        ...state,
        error: action.payload,
        success: "",
        loading: false,
      };

    case "SUCCESS":
      return {
        ...state,
        success: action.payload,
        error: "",
        loading: false,
      };

    default:
      return state;
  }
};
