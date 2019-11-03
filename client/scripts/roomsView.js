var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    //$('.addroom').on('click', function(){ Rooms.add(); });
    // RoomsView.$select.on('change', )

    if(Rooms.storage !== undefined) {
      setInterval(function() {
        RoomsView.render();
      }, 1000);
    }
  },

  render: function() {
    if( RoomsView.$select !== undefined ) {
      RoomsView.$select.empty();
    }
    for( var key in Rooms.storage ) {
      RoomsView.renderRoom(Rooms.storage[key]);
    }
  },

  renderRoom: function(roomname) {
    let room = RoomView.render(roomname);
    RoomsView.$select.append(room);
  }

};



var RoomView = {
  // render: function(roomname){
  // //_.template(`<option value="${roomname}">${roomname}</option>`)
  //   return `<option value="${roomname}">${roomname}</option>`;

  //   // _.template(`<option value="<%- roomname %>>"><%- roomname %></option>`)
  // }

  render: _.template(`
    <option value="<%-roomname%>"><%-roomname%></option>
  `)
};