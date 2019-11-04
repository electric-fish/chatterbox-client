var Rooms = {

  storage: [],

  currentRoom: [{roomname: '(all messages)'}],

  add: function(){
    console.log('room add clicked');

    let newRoom = $('roomname').text();
    console.log('new room:' + newRoom);
    Rooms.storage.push(newRoom);
    Rooms.currentRoom = newRoom;
    RoomsView.renderRoom(newRoom);
  }

};