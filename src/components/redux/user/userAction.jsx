import axios from "axios";

export function fetchUsers() {
  return (dispatch) => {
    dispatch({ type: "FETCH_USERS_REQUEST" });

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) =>
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: res.data })
      )
      .catch((err) =>
        dispatch({ type: "FETCH_USERS_FAILURE", payload: err.message })
      );
  };
}

// think => past tense (thought) => delay(middleware)
