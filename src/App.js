import React, { Component } from "react";
import TodoItems from "./components/TodoItems/TodoItem";
import AddItem from "./components/AddItem/AddItem";
class App extends Component {
  state = {
    items: [
      { id: 1, name: "pippi", age: 20 },
      { id: 2, name: "lucy", age: 26 },
      { id: 3, name: "james", age: 30 },
    ],
  };

  deleteItem = (id) => {
    this.setState({ items: this.state.items.filter((item) => {
      return item.id !== id;
    }) });
  };

  addItem = (item) => {
    item.id = Math.random();
    const { items } = this.state; // remember object destructuring?
    this.setState({ items: items.concat(item) });
  };
  render() {
    return (
      <div className="App container">
        <h1 className="text-center">Contactlist App</h1>

        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem AddItem={this.addItem} />
      </div>
    );
  }
}

export default App;
