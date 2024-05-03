const intialState = {
  isAuthenticated: false,
};
export const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {...state , isAuthenticated : true};
    default:
      return state;
  }
};
