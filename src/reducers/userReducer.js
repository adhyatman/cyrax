export default function reducer(state = {
  user: {
    id: null,
    name: null,
    age: null,
  },
  fetching: false, fetched: false, error: null
}, action) {
  switch (action.type) {
    case "FETCH_USERS_START":
      return {...state, fetching: true};

    case "RECEIVE_USERS":
      return {...state, fetching: false, fatched: true, users: action.payload};

    case "FETCH_USERS_ERROR":
      return {...state, fetching: false, error: action.payload};

    case "SET_USER_NAME":
      return {...state.user, name: action.payload};

      case "SET_USER_AGE":
        return {...state.user, age: action.payload};
  }
  return state;
}
