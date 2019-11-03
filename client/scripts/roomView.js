var RoomView = {

  render: _.template(`
    <option value="<%-roomname%>"><%-roomname%></option>
  `)


  // render: function(roomname){
  // //_.template(`<option value="${roomname}">${roomname}</option>`)
  //   return `<option value="${roomname}">${roomname}</option>`;

  //   // _.template(`<option value="<%- roomname %>>"><%- roomname %></option>`)
  // }

};