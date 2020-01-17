import UserService from '../services/UserService';


export function login(userCreds) {
    return async dispatch => {
      const user = await UserService.login(userCreds);
      dispatch(setUser(user));
    };
  }

  export function setUser(user) {
    return {
      type: 'SET_USER',
      user
    };
  }

  export   function addToWishList(item,user){
    
    return async dispatch=>{
      const miniItem= await {id:item._id,title:item.title,price:item.price,imgs:[item.imgs[0]]}
      const updatedUser  = await UserService.updateWishList(miniItem,user);
     
      dispatch({
        type: 'UPDATE_USER',
        updatedUser 
      });
    }


  }