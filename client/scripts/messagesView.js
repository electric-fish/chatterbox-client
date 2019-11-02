var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // $( document ).ready(function() {
    //   console.log('test1');
    //   MessagesView.render();



    //   $( "#chats" ).load( MessagesView.render());
    // }

    setInterval(function() {
      MessagesView.render();
    }, 1000);
  },

  render: function() {

    //var html = "";
    for (var i = 0; i < Messages.results.length; i++) {
      console.log('messages: ', Messages)
      //html += MessageView.render(Messages.results[i]);
      MessagesView.renderMessage(Messages.results[i]);
    }

   // $('#chat').append(html);
  },

  renderMessage: function(message) {
    var $msg = MessageView.render(message);
    MessagesView.$chats.prepend($msg);
  }
};