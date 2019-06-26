import React, { Component } from "react";
import each from "jest-each";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  /*
  using the [e.target.name]: e.target.value will allow you to have many input fields,
  and will enter the information using the name attribute that is associated with each
  input field. 
  */
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <form style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          placeholder="Add Todo ..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
