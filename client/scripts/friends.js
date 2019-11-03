var Friends = {

  storage: {},

  toggleStatus: function(user) {
    if( Friends.storage[user] === undefined ) {
      Friends.storage[user] = true;
    } else {
      delete Friends.storage[user];
    }
  }
};