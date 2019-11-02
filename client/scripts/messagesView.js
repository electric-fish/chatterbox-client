var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    if(MessagesView !== undefined) {
      setInterval(function() {
        MessagesView.render();
        MessagesView.$chats.load(MessagesView.$chats);
        //window.location = location.href;
      }, 1000);
    }

  },

  render: function() {
    //if no room name selected
    //    print all
    //else if
    //    print things with Messages.results[i].roomname matching

    for (var i = 0; i < Messages.results.length; i++) {
      /*let msg = {
        username: Messages.results[i].username,
        text: Messages.results[i].text,
        roomname: Messages.results[i].roomname
      }*/
      if ( Messages.results[i].text !== undefined ) {
        MessagesView.renderMessage(Messages.results[i]);
      }
    }

   // MessagesView.$chats.append(html);
  },

  renderMessage: function(message) {
    let msg = MessageView.render(message);
    MessagesView.$chats.append(msg);
  }
};