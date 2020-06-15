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
    let items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items });
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
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
