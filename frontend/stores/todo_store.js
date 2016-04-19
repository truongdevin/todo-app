var _todos = [];
var _callbacks = [];

var TodoStore = {
  changed: function() {
    for (var i = 0; i < _callbacks.length; i++) {
      _callbacks[i]();
    }
  },
  addChangedHandler: function(cb) {
    _callbacks.push(cb);
  },
  removeChangedHandler: function(cb) {
    for (var i = 0; i < _callbacks.length; i++) {
      if (_callbacks[i] === cb) {
        _callbacks.splice(i, 1);
        return;
      }
    }
  },
  all: function() {
    return _todos.slice();
  },
  resetTodos: function(todos) {
    _todos = todos;
  },
  fetch: function() {
    var store = this;
    $.ajax({
      url: "/api/todos",
      method: "GET",
      success: function (todos) {
        store.resetTodos(todos);
        store.changed();
      }
    });
  },
  removeTodo: function(id) {
    for (var i = 0; i < _todos.length; i++) {
      if (_todos[i].id === id) {
        _todos.splice(i, 1);
        return;
      }
    }
  },
  create: function(data) {
    var store = this;

    $.ajax({
      url: "/api/todos",
      data: {todo: data},
      method: "POST",
      success: function (todo) {
        store.addTodo(todo);
        store.changed();
      }
    });
  },

  addTodo: function(todo) {
    _todos.push(todo);
  },

  destroy: function(id) {
    var store = this;
    $.ajax({
      url: "/api/todos/"+id,
      method: "DELETE",
      success: function (todo) {
        store.removeTodo(todo.id);
        store.changed();
      }
    });
  },

  toggleDone: function(id) {
    var store = this;
    var newDone;
    for (var i = 0; i < _todos.length; i++) {
      if (_todos[i].id === id) {
        newDone = !_todos[i].done;
        _todos[i].done = newDone;
      }
    }
    $.ajax({
      url: "/api/todos/"+id,
      data: {todo: {done: newDone}},
      method: "PATCH",
      success: function (todo) {
        store.changed();
      }
    });
  }

};

module.exports = TodoStore;
