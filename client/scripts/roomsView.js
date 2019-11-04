var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    //$('.addroom').on('click', function(){ Rooms.add(); });
    // RoomsView.$select.on('change', )

    //$('button').on('click', Rooms.add);
    $('.addRoom').on('click', Rooms.add);

    RoomsView.$select.on('change', function(){
      Rooms.currentRoom[0].roomname = RoomsView.$select.val();
    });
  },

  render: function() {
    //if( Rooms.currentRoom )

    // if( RoomsView.$select !== undefined ) {
    //   RoomsView.$select.empty();
    // }
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


