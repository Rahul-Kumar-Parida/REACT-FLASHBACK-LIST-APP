import NavBar from "./Components/NavBar";
import "./App.css";

import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import HeadingItem from "./Components/HeadingItem";
import AddSection from "./Components/AddSection";
function App() {
  const [todoitems, setTodoItems] = useState([]);
  const handleNewItem = (
    itemNames,
    itemAmount,
    itemQuantity,
    itemDate,
    itemTime
  ) => {
    const newTodoItems = [
      ...todoitems,
      {
        Name: itemNames,
        Amount: itemAmount,
        Quantity: itemQuantity,
        Date: itemDate,
        Time: itemTime,
      },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoitems.filter((item) => item.Name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <>
      <NavBar></NavBar>
      <AddSection onNewItem={handleNewItem}></AddSection>
      <HeadingItem></HeadingItem>
      <TodoItems
        TodoItems={todoitems}
        onDeleteClick={handleDeleteItem}
      ></TodoItems>
    </>
  );
}

export default App;
