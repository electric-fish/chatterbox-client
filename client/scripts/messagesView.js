var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    $('submit').on('click', function() {
      MessagesView.render();
    });

    MessagesView.$chats.on('click', function(event) {
      //console.log(event.target.className)
      if( event.target.className==='username' ) {
        var user = $(event.target).text();
        Friends.toggleStatus(user);
        MessagesView.render();
      }
    });

  },

  render: function() {

    MessagesView.$chats.empty();

    //if no room name selected === room (all messages)
    //    print all
    if( Rooms.currentRoom[0].roomname === '(all messages)' ) {
      for (var i = 0; i < Messages.length; i++) {
        if ( Messages[i].text !== undefined ) {
          MessagesView.renderMessage(Messages[i]);
        }
      }
    //else if
    //    print things with Messages.results[i].roomname matching
    } else {
      for (var i = 0; i < Messages.length; i++) {
        if ( Messages[i].text !== undefined && Messages[i].roomname === Rooms.currentRoom[0].roomname ) {
          MessagesView.renderMessage(Messages[i]);
        }
      }
    }
  },

  renderMessage: function(message) {
    var user = message.username;
    if( Friends.storage[user] === true ) {
      let msg = MessageView.renderFriend(message);
      MessagesView.$chats.append(msg);
    } else {
      let msg = MessageView.render(message);
      MessagesView.$chats.append(msg);
    }
  }
};