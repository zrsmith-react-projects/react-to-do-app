import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class Todos extends Component {
  render() {
    // const { id, title, completed } = this.props.todos;
    console.log(this.props.todos);
    return this.props.todos.map(todo => <TodoItem todo={todo} />);
  }
}
