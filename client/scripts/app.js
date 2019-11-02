var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);

      //Messages = data;

      Messages = data.results;
      for( var key in Messages ) {
        var roomname = Messages[key].roomname;

        if(roomname==='{default}' || roomname==='add') {
          alert('room name invalid');
        } else if(roomname === undefined || roomname === null || roomname==='' ) {
          Rooms['{default}'] = '{default}';
        } else {
          Rooms[roomname] = roomname;
        }
      }
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
