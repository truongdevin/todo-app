var React = require('react');
var TodoStore = require('../stores/todo_store.js');

var TodoForm = React.createClass({
  getInitialState: function () {
    return {
      title: "",
      body: "",
      done: false,
    };
  },

  updateTitle: function (e) {
    var title = e.currentTarget.value;
    this.setState({title: title});
  },

  updateBody: function (e) {
    var body = e.currentTarget.value;
    this.setState({body: body});
  },

  handleSubmit: function (e) {
    e.preventDefault();
    TodoStore.create(this.state);
    this.setState({
      title: "",
      body: "",
    });
  },

  render: function () {
    return(
      <div>
        <h1>Todo Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input type="text" value={this.state.title} onChange={this.updateTitle}/>
          </label>

          <label>Body
            <input type="text" value={this.state.body} onChange={this.updateBody}/>
          </label>

          <input type="submit" value="add todo" />
        </form>
      </div>
    );
  }
});

module.exports = TodoForm;
