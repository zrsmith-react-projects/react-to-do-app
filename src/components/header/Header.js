import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
    </header>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "1rem 0"
};

export default Header;
