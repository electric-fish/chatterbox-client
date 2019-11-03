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
      var roomObj = {'roomname': '{default}'};
      Rooms.storage.push(roomObj);
      for( var key in Messages ) {
        var roomname = Messages[key].roomname;
        //console.log(Messages[key].roomname)

        if( roomname === undefined || roomname === null || roomname === '' ) {
          //Messages.[key].roomname = '{default}';
        } else {
          //Rooms.storage[roomname] = roomname;
          if( !Rooms.storage.filter( function(element){
            return element.roomname === roomname}).length > 0 ) {
              var roomObj = {'roomname': roomname};
              Rooms.storage.push(roomObj);
          }
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
