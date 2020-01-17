import HttpService from './HttpService';

export default {
    login,
    updateWishList
};


async function login(userCred) {
    const user = await HttpService.post('auth/login', userCred)

    return _handleLogin(user)
}


function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}


async function updateWishList(item, user) {
    const userWishList = user.wishlist
    const wishlist = [...userWishList, item]
    let updatedUser = { ...user, wishlist }
    const newUser = await HttpService.put(`user/${updatedUser._id}`, updatedUser)
    return newUser
}

