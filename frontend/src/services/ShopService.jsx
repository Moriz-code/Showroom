import HttpService from './HttpService';

export default {
 add,
 query,
 remove
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
  
