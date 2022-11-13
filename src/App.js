import React, {useState} from "react";
import "./App.css"
// import cancelBt from "./cancel.png";
// import todoIcon from "./src/to-do.png";


 
function App(){

// state hook _ "useState"
const [newItem, setNewItem] = useState("");
const [items, setItems]= useState([]);

// helper function
function addItem(){
  if (!newItem) {
    alert("Press enter an item.");
    return;
  }

 const item = {
  id: Math.floor(Math.random() * 1000),
  value: newItem,
 };



 setItems((oldList) => [...oldList, item])
 setNewItem("");
}
function removeItem (id) {
  const newArray = items.filter((item) => item.id !== id);
  setItems(newArray);
}
return(
  <div className="App">
{/* Header  */}
<h1 className="header">
<img src={require( "./to-do.png")} height="40" width="40" alt="fdvfgf"/>
  
  Todo List App</h1>
{/* input  (input and button) */}
<input 
type="text"
placeholder="Add an item...."
value={newItem}
onChange={(e) => setNewItem(e.target.value)}

/>

<button onClick={() => addItem()}>Add</button>

{/* List of Items */}

<ul >
  {items.map(item => {
    return(
      <li key={item.id} >
        {item.value}
        <img src={require("./cancel.png")}
         height="18" width="18" alt="fgefb"
         className="delete-button" onClick={() => removeItem(item.id)}
         />
       
      </li>
    )
  })}

</ul>

  </div>
)

}





export default App;