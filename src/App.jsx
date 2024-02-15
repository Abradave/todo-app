import { useState } from "react";
import './App.css'
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';
import { useRef } from "react";

function App() {
  
  const [todos, setTodos] = useState(["Főzés","Mosogatás"]);
  const newTodoRef = useRef(null);
  const addTodo = () => {
    const newTodo = newTodoRef.current.value;
    if(newTodo.trim().length == 0){
      alert("Teendő megadása kötelező");
      return;
    }
    if(todos.includes(newTodo)){
      alert("Ez a teendő már fel lett véve");
      return;
    }
    setTodos([...todos,newTodo]);
    newTodoRef.current.value = "";
  }
  return (
    <main>
      <h1>ToDo</h1>
      <ToDoForm newTodoRef={newTodoRef} addClick={addTodo}/>
      <ToDoList todos={todos}/>
    </main>
  );
}

export default App;
