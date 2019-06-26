import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/header/Header";
import "./App.css";
import AddTodo from "./components/AddTodo";

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
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
    // this.setState({
    //   todos: [...this.state.todos.filter(todo => todo.id !== id)]
    // });
  };

  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        <section className="container">
          <Header />
          <AddTodo />
          <Todos
            todos={this.state.todos}
            handleComplete={this.handleComplete}
            handleDelete={this.handleDelete}
          />
        </section>
      </div>
    );
  }
}

export default App;
