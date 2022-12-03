import React, {useState} from "react";
import "./App.css"



 
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
  
  My Todo</h1>

{/* input  (input and button) */}

<div className="addNew" >
<p className="intro">My Todo helps you stay organized and perform your tasks more faster</p>

  <div className="input-and-button">
  <input 
      type="text"
      placeholder="Add an item...."
      value={newItem}
      onChange={(e) => setNewItem(e.target.value)
      }

      />
      <button onClick={() => addItem()}>Add</button>
    </div>
    


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
<img src= {require("./plus.png")}height="40" width="40" alt="plus"  className="plus" />

</div>
  </div>
)

}





export default App;