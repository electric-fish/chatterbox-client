var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    //$('.addroom').on('click', function(){ Rooms.add(); });
    // RoomsView.$select.on('change', )

    //$('button').on('click', Rooms.add);

    RoomsView.$select.on('change', function(){
      console.log(RoomsView.$select.val());
    });
  },

  render: function() {
    // if( RoomsView.$select !== undefined ) {
    //   RoomsView.$select.empty();
    // }
    RoomsView.$select.empty();
    for( var key in Rooms.storage ) {
      RoomsView.renderRoom(Rooms.storage[key]);
    }
  },

  renderRoom: function(roomval) {
    let room = RoomView.render(roomval);
    RoomsView.$select.append(room);
  }

};


