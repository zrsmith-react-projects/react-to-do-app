import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export default class Todos extends Component {
  handleComplete = () => {
    console.log("handle complete working in Todos");
  };
  render() {
    // const { id, title, completed } = this.props.todos;
    console.log(this.props.todos);
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleComplete={this.props.handleComplete}
        handleDelete={this.props.handleDelete}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};
