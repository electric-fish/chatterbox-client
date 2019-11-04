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
      }
    });

  },

  render: function() {
    //if no room name selected || room (all messages)
    //    print all
    //else if
    //    print things with Messages.results[i].roomname matching

    MessagesView.$chats.empty();

    if( Rooms.currentRoom[0].roomname === '(all messages)' ) {
      for (var i = 0; i < Messages.length; i++) {
        if ( Messages[i].text !== undefined ) {
          MessagesView.renderMessage(Messages[i]);
        }
      }
    } else {
      for (var i = 0; i < Messages.length; i++) {
        if ( Messages[i].text !== undefined && Messages[i].roomname === Rooms.currentRoom[0].roomname ) {
          MessagesView.renderMessage(Messages[i]);
        }
      }

    }


    // MessagesView.$chats.empty();
    // for (var i = 0; i < Messages.length; i++) {
    //   if ( Messages[i].text !== undefined ) {
    //     MessagesView.renderMessage(Messages[i]);
    //   }
    // }
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