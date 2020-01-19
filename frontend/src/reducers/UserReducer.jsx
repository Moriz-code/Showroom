const INITIAL_STATE = {
  loggedInUser: {
  
  }
};

export default function UserReducer(state = INITIAL_STATE, action = {}) {

  switch (action.type) {
    case 'SET_USER':
      return { ...state, loggedInUser: action.user };
    case 'UPDATE_USER':
      return { ...state, loggedInUser: action.user }
    default:
      return state;
  }
}