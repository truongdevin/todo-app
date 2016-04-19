var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var DoneButton = React.createClass({
  handleDone: function() {
    TodoStore.toggleDone(this.props.item.id);
  },
  render: function() {
    var toggleState;
    toggleState = this.props.item.done === true ? "undo" : "done";
    return(
      <button type="button" onClick={this.handleDone}>
        {toggleState}</button>
    );
  }
});

module.exports = DoneButton;
