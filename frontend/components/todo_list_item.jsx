var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var TodoListItem = React.createClass({
  destroyer: function() {
    TodoStore.destroy(this.props.item.id);
  },
  render: function() {
    return(
      <li>
        {this.props.item.title}
        <button type="button" onClick={this.destroyer}>
          Delete</button>
      </li>
    );
  }
});

module.exports = TodoListItem;
