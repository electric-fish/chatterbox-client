var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    if(MessagesView !== undefined) {
      setInterval(function() {
        //try to call fetch from
        //App.fetch(App.stopSpinner);
        MessagesView.render();
        //MessagesView.$chats.load(MessagesView.$chats);
        //window.location = location.href;
      }, 1000);
    }

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
    for (var i = 0; i < Messages.length; i++) {
      if ( Messages[i].text !== undefined ) {
        MessagesView.renderMessage(Messages[i]);
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