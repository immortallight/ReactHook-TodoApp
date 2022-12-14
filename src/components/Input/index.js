import React from "react";


const Input = ({newItem, addItem, setNewItem}) => {
  return (
    <div className="input-and-button">
      <input
        type="text"
        placeholder="Add an item...."
        value={newItem}
        onChange={setNewItem}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default Input;
