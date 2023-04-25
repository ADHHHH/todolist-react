import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./styles.css"




function App() {
  const [items, setItems] = useState([]);

  let input = null;

  let inputRef = useRef()




  let inputTodo = function (event) {
     
     input = event.target.value;
  }

  let submitTodo = function (){
    setItems([...items, input]);
     inputRef.current.value = "";
  }
  let deleteTodo = function (indexToDelete) {
     let deletedItem = items.filter((_,index) => index != indexToDelete);
     setItems(deletedItem);
  };

let editTodo = function (index) {
   
}

  return (
    <div className="App">
      <div class="container">
        <h1>Create your Todo-list</h1>
        <input ref={inputRef} onChange={inputTodo}
        placeholder="What are your tasks for today.."/>

        <button onClick={submitTodo}>Submit</button>
        {items.map((item, i) => (<div class="todos"><div class="item">{item}</div><div class="buttons"><button class="edit-button" onClick =  { () => editTodo(i)}>Edit</button>
      <button class="delete-button" onClick =  { () => deleteTodo(i)}>Delete</button>
     </div>
     </div>
     ))}
     </div>
     

     
     <div>
      
     </div>
     </div>

  )
}

  
 

export default App
