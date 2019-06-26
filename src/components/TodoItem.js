import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "1rem",
      borderBottom: "1px #aaa dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  handleComplete = e => {
    console.log(this.props);
  };

  // getStyle = () => {
  //   if (this.props.todo.completed) {
  //     return {
  //       textDecoration: "line-through"
  //     };
  //   } else {
  //     return {
  //       textDecoration: "none"
  //     };
  //   }
  // };

  render() {
    // console.log(this.props.todo);
    const { id, title } = this.props.todo;
    return (
      <article style={this.getStyle()}>
        <p>
          {" "}
          <input
            type="checkbox"
            onChange={this.props.handleComplete.bind(this, id)}
          />
          {title}
          <button
            onClick={this.props.handleDelete.bind(this, id)}
            style={btnStyle}
          >
            X
          </button>
        </p>
      </article>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 7px",
  borderRadius: "50%",
  float: "right",
  cursor: "pointer"
};
export default TodoItem;
