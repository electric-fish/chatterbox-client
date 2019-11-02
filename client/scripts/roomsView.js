var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {
    for (var i = 0; i < Messages.results.length; i++) {
      console.log('messages: ', Messages)
      //html += MessageView.render(Messages.results[i]);
      //  MessagesView.renderMessage(Messages.results[i]);
    }
  }

};
