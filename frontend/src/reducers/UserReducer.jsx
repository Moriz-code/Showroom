const INITIAL_STATE = {
  loggedInUser: {
    "_id": "123456",
    "userName": "roy",
    "fullName": "roy amar",
    "password": "123",
    "wishlist": [
      {
        "id": "",
        "title": "",
        "price": 12,
        "imgs": []
      }
    ],
    "shopId": "111"
  }
};

export default function UserReducer(state = INITIAL_STATE, action = {}) {

  switch (action.type) {
    case 'SET_USER':
      return { ...state, loggedInUser: action.user };
    case 'UPDATE_USER':
      return { ...state, loggedInUser: action.updatedUser }
    default:
      return state;
  }
}