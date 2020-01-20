const INITIAL_STATE = {
  loggedInUser: {
      "_id" : "5e2364c31a0d5feaa843e505",
      "userName" : "roy",
      "fullName" : "roy amar",
      "email" : "roy@gmail.com",
      "password" : "123",
      "wishlist" : [ 
          {
              "_id" : "5e22e7d51a0d5feaa843e501",
              "title" : "grenn-hat!!!!",
              "price" : "200",
              "imgs" : [ 
                  "https://res-2.cloudinary.com/adikastyle/image/upload/c_fit,dpr_1.0,f_auto,q_90/media/catalog/product/0/i/0i4a0475_2.jpg"
              ],
              "itemOwner" : {
                  "id" : "5e230e471a0d5feaa843e503",
                  "name" : "MyBrand"
              }
          }
      ],
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