import { useState } from "react";
import './App.css'
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {
  
  const [todos, setTodos] = useState(["Főzés","Mosogatás"]);
  const [newTodo, setNewTodo] = useState("");
  const addTodo = () => {
    if(newTodo.trim().length == 0){
      alert("Teendő megadása kötelező");
      return;
    }
    if(todos.includes(newTodo)){
      alert("Ez a teendő már fel lett véve");
      return;
    }
    setTodos([...todos,newTodo]);
    setNewTodo("");
  }
  return (
    <main>
      <h1>ToDo</h1>
      <ToDoForm newTodo={newTodo} setNewTodo={setNewTodo} addClick={addTodo}/>
      <ToDoList todos={todos}/>
    </main>
  );
}

export default App;
