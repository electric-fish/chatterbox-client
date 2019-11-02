var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {

    $('.addroom').on('click', function(){ Rooms.add(); });
    // RoomsView.$select.on('change', )

  },

  render: function() {
  },

  renderRoom: function(roomname) {
    RoomsView.$select.append(RoomView.renderRoom({roomName: roomname}));
  }

};



var RoomView = {
  renderRoom: _.template(`
    <option value=<%- roomName %>>
      <%- roomName %>
    </option>
  `)
};