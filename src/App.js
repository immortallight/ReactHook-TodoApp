import React, { useState } from "react";
import "./App.css";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

function App() {
  // state hook _ "useState"
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [display, setDisplay] = useState(false);

  // helper function
  function addItem() {
    if (!newItem) {
      alert("Press enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function removeItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function handleInputDisplay() {
    setDisplay(true);
  }

  return (
    <div className="App">
      {/* Header  */}
      <h1 className="header">My Todo</h1>

      {/* input  (input and button) */}

      <div className="addNew">
        <p className="intro">
          My Todo helps you stay organized and perform your tasks more faster
        </p>

        {display ? (
          <div className="input-and-button">
            <input
              type="text"
              placeholder="Add an item...."
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
            <button onClick={() => addItem()}>Add</button>
          </div>
        ) : null}

        {/* List of Items */}

        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                <MdOutlineCancel
                  className="delete-button"
                  onClick={() => removeItem(item.id)}
                />
              </li>
            );
          })}
        </ul>
        <button onClick={handleInputDisplay} className="plus">
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
}

export default App;
