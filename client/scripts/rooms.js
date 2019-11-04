var Rooms = {

  storage: [],

  currentRoom: [{roomname: '(all messages)'}],

  add: function(){
    console.log('room add clicked');

    //let newRoom = $('#rooms roomname').val();
    //let newRoom = $('#rooms select').val()
    let newRoomName = $('#roomname').val()
    console.log('new room: "' + newRoomName + '"');
    var roomObj = {roomname: newRoomName};
    Rooms.storage.push(roomObj);
    Rooms.currentRoom[0].roomname = newRoomName;
    RoomsView.renderRoom(roomObj);

    //callback(Rooms.storage);
  }

};