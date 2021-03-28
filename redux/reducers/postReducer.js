export default (state = [], action) => {
  switch (action.type) {
    case "GET_POST":
      return [...state, action.payload];
    case "GET_CHARACTERS":
      return [...state, action.payload];
    default:
      return state;
  }
};
