var MessagesView = {

  $chats: $('#chat'),

  initialize: function() {


  },

  render: function() {
    var html = "";
    for (var i = 0; i < Messages.results; i++) {
      html += MessageView.render(Messages.results[i]);
    }
    $('#chat').append(html);
  }

};