import HttpService from './HttpService';

export default {
 add,
 query,
 remove,
 get
};

function query() {
  console.log('query');

    return HttpService.get('shop');
  }
  
  function remove(itemId) {
    return HttpService.delete(`shop/${itemId}`);
  }
  
  async function add(item) {
    const addeditem  = await HttpService.post(`shop`, item);
    return  addeditem
  }
  
    
  async function get(itemId) {
    
    const item  = await HttpService.get(`item/${itemId}`);
console.log(item,'itemmm');

    //  return  item
  }
  
