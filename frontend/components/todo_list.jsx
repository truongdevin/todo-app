var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var TodoListItem = require('./todo_list_item.jsx');
var TodoForm = require('./todo_form.jsx');

var TodoList = React.createClass({
  getInitialState: function() {
    return {
      list: TodoStore.all()
    };
  },
  componentDidMount: function() {
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },
  componentWillUnmount: function() {
    TodoStore.resetTodos([]);
  },
  todosChanged: function() {
    this.setState({list: TodoStore.all()});
  },
  render: function() {
    var todos = this.state.list.map(function(el) {
      return <TodoListItem item={el} key={el.id}/>;
    });
    return(
      <div>
        <ul>
          {todos}
        </ul>
        <TodoForm />
      </div>
    );
  }
});

module.exports = TodoList;
