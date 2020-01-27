import HttpService from './HttpService';
import Login from '../pages/Login';
import StorageService from '../services/StorageService'


export default {
    login,
    signup,
    updateWishList,
    removeItemFromWishList,
    updateRecentlyViewd,
    getRecntlyViewd
};


async function login(userCred) {
    const user = await HttpService.post('auth/login', userCred)
    return _handleLogin(user)
}

async function signup(userCred) {
    console.log('check2-signup',userCred);

    const user = await HttpService.post('auth/signup', userCred)
    return  _handleLogin(user)
   
}


function _handleLogin(user) {
    console.log('login',user);
    
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

async function removeItemFromWishList(itemId, user) {
    const userWishList = user.wishlist
    const wishlist = userWishList.filter(item => item._id !== itemId)
    let updatedUser = { ...user, wishlist }
    const newUser = await HttpService.put(`user/${updatedUser._id}`, updatedUser)
    return newUser
}

async function updateRecentlyViewd(entitiy, item) {
    let recentlyViewd = ''
    const currData = await getRecntlyViewd()

    const found=currData.find(itemWatched=>itemWatched._id===item._id)
    if (found) return
    
    if (currData.length === 4) {

        currData.shift()
        currData.push(item)
        StorageService.clearStorage('recently')
        return recentlyViewd = await StorageService.postMany(entitiy, currData)
    }
    else return recentlyViewd = await StorageService.post(entitiy, item)

}

async function getRecntlyViewd() {
    const reventlyViewd = await StorageService.query('recently')
    return reventlyViewd


}