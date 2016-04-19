var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var DoneButton = require('./done_button.jsx');
var TodoDetailView = require('./todo_detail_view.jsx');


var TodoListItem = React.createClass({
  destroyer: function() {
    TodoStore.destroy(this.props.item.id);
  },
  render: function() {
    var deleteButton = <button type="button"
      onClick={this.destroyer}>
      Delete</button>;
    return(
      <li>
        {this.props.item.title}
        <DoneButton item={this.props.item}/>
        <TodoDetailView deleter={deleteButton} body={this.props.item.body}/>
      </li>
    );
  }
});

module.exports = TodoListItem;
