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

    setInterval( function() {
      App.fetch();
    }, 1000 );

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      // console.log(data);

      Messages = data.results;

      //if default room '(all messages)' has not been created, add '(all messages)' into room array
      if( !Rooms.storage.filter( function(element){
        return element.roomname === '(all messages)'}).length > 0 ){
        var roomObj = {'roomname': '(all messages)'};
        Rooms.storage.push(roomObj);
      }

      //iterate through all existing messages
      for( var key in Messages ) {
        var roomname = Messages[key].roomname;

        //if room does not exist in list yet, add room into array
        if( !Rooms.storage.filter( function(element){
          return element.roomname === roomname}).length > 0 ) {
          var roomObj = {'roomname': roomname};
          Rooms.storage.push(roomObj);
        }
      }

      RoomsView.render();
      MessagesView.render();

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
