import HttpService from './HttpService';

export default {
<<<<<<< HEAD
 add,
 query,
 remove
=======
    
 
>>>>>>> cb12bcb3ec05ce9a343367e7b761fa0f61fa870d
};

function query() {
    return HttpService.get('shop');
  }
  
  function remove(itemId) {
    return HttpService.delete(`shop/${itemId}`);
  }
  
  async function add(item) {
    const addeditem  = await HttpService.post(`shop`, item);
    return  addeditem
  }
  
