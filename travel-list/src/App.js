import Logo from "./components/Logo";
import "./index.css";
import Form from "./components/Form";
import PackagingList from "./components/PackagingList";
import React, { useState } from "react";
import Stats from "./components/Stats";

export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeletedItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirm = window.confirm(
      "Are you sure you want to clear all the items from the list?"
    );
    if (confirm) {
      setItems([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeletedItems}
        onUpdateItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
