const INITIAL_STATE = {
  loggedInUser: {
      "_id" : "5e2364c31a0d5feaa843e505",
      "userName" : "roy",
      "fullName" : "roy amar",
      "email" : "roy@gmail.com",
      "password" : "123",
      "wishlist" : [],
      "shopId" : "5e230e471a0d5feaa843e503"
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