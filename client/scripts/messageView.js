var MessageView = {

  render: _.template( `
    <div class="chats">
      <div class="username"><%- username %></div>
      <div class"text"><%- text %></div>
    </div>
  `),

  renderFriend: _.template(`
    <div class="chats friend">
      <div class="username"><%- username %></div>
      <div class"text"><%- text %></div>
    </div>
  `)

};

