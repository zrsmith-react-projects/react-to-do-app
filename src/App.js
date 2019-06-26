import React, { Component } from "react";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Do the dishes",
        completed: false
      },
      {
        id: 3,
        title: "Do homework",
        completed: false
      }
    ]
  };

  handleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  handleDelete = id => {
    console.log(`delete ${id}`);
  };

  render() {
    // console.log(this.state.todos);
    return (
      <Todos
        todos={this.state.todos}
        handleComplete={this.handleComplete}
        handleDelete={this.handleDelete}
      />
    );
  }
}

export default App;
