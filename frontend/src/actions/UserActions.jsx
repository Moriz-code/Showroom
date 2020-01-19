import UserService from '../services/UserService';


export function login(userCreds) {
  return async dispatch => {
    try {
      const user = await UserService.login(userCreds);
      dispatch(setUser(user));
    } catch (err) {
      console.log('UserActions: err in login user', err);
    }
  }
}

export function setUser(user) {
  return {
    type: 'SET_USER',
    user
  };
}

export function addToWishList(item, user) {
  return async dispatch => {
   
    const miniItem = await { _id: item._id, title: item.title, price: item.price, imgs: [item.imgs[0]],itemOwner:{id:item.itemOwner.id,name:item.itemOwner.name} }
    const updatedUser = await UserService.updateWishList(miniItem, user);
    dispatch(_updateUser(updatedUser))

  }

}


export function removeFromWishList(itemId,user) {
  
  return async dispatch => {
    const updatedUser = await UserService.removeItemFromWishList(itemId, user);
    dispatch(_updateUser(updatedUser))
  }
}










function _updateUser(user) {
  return {
    type: 'UPDATE_USER',
    user
  }
}