var React = require('react');
// var TodoStore = require('../stores/todo_store.js');
// var DoneButton = require('./done_button.jsx');

var TodoDetailView = React.createClass({

  render: function() {
    return(
      <div>
        <p>{this.props.body}</p>
          {this.props.deleter}
      </div>
    );
  }
});

module.exports = TodoDetailView;
