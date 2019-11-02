var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    //$('.addroom').on('click', function(){ Rooms.add(); });
    // RoomsView.$select.on('change', )

    if(Rooms !== undefined) {
      setInterval(function() {
        RoomsView.render();
      }, 1000);
    }
  },

  render: function() {
    for( var key in Rooms ) {
      console.log(key);
      if( key !== 'add' ){
        RoomsView.renderRoom(Rooms[key]);
      }
    }
  },

  renderRoom: function(roomname) {
    let room = RoomView.render(roomname);
    RoomsView.$select.append(room);
  }

};



var RoomView = {
  render: function(roomname){
  //_.template(`<option value="${roomname}">${roomname}</option>`)
    return `<option value="${roomname}">${roomname}</option>`;
  }
};