import jsonPlaceholder from "../apis/jsonPlaceholder";
import lotr from "../apis/lotr";

export const getPost = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/posts/${id}`);
  console.log(response);
  dispatch({ type: "GET_POST", payload: response.data });
};

export const getCharacters = () => async (dispatch) => {
  const response = await lotr.get(`/book`);
  // console.log(response);
  dispatch({ type: "GET_CHARACTERS", payload: response.data.docs });
};

// export const addFriend = friendsIndex => (
//   {
//     type: 'ADD_FRIEND',
//     payload: friendsIndex,
//   }
// );
