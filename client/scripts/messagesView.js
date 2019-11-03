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
      console.log('submit button clicked');
      MessagesView.render();
    });

    MessagesView.$chats.on('click', function(event) {
    //$('.username').on('click', function(event) {
    //$('.username').click( function(event) {
      //console.log(event.target.className)
      if( event.target.className==='username' ) {
        //////////DO THE FRIEND THING
        console.log( $(event.target).text() );
      }
    });

  },

  render: function() {
    //if no room name selected
    //    print all
    //else if
    //    print things with Messages.results[i].roomname matching

    //for (var i = 0; i < Messages.results.length; i++) {
    if( Messages.$chats !== undefined ) {
      MessagesView.$chats.empty();
    }
    for (var i = 0; i < Messages.length; i++) {
      /*let msg = {
        username: Messages.results[i].username,
        text: Messages.results[i].text,
        roomname: Messages.results[i].roomname
      }*/
      //if ( Messages.results[i].text !== undefined ) {
      //  MessagesView.renderMessage(Messages.results[i]);
      //}
      if ( Messages[i].text !== undefined ) {
        MessagesView.renderMessage(Messages[i]);
      }
    }
  },

  renderMessage: function(message) {
    let msg = MessageView.render(message);
    MessagesView.$chats.append(msg);
  }
};