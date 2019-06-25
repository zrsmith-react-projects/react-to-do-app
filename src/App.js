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
  render() {
    // console.log(this.state.todos);
    return <Todos todos={this.state.todos} />;
  }
}

export default App;
