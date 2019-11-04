var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    RoomsView.$select.on('change', function(){
      console.log(RoomsView.$select.val());
      Rooms.currentRoom[0].roomname = RoomsView.$select.val();
    });

    $('button').on('click', Rooms.add);
    //$('.addRoom').on('click', Rooms.add);

  },

  render: function() {
    RoomsView.$select.empty();

    RoomsView.renderRoom(Rooms.currentRoom[0]);
    for( var key = 0; key < Rooms.storage.length; key++ ) {
      if( Rooms.storage[key].roomname !== Rooms.currentRoom[0].roomname ){
        RoomsView.renderRoom(Rooms.storage[key]);
      }
    }
  },

  renderRoom: function(roomval) {
    let room = RoomView.render(roomval);
    RoomsView.$select.append(room);
  }

};


