import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTodos = () => {
    setTodos([...todos, { id: todos.length, value: input, complete: false }]);
    setInput("");
  };
const filterCheckBox=()=>{

}
  const handleCheckbox = (id) => {
    // const newTodos = [...todos];
    // const todo = newTodos.find((todo) => todo.id === id);
    // todo.complete = !todo.complete;
    // setTodos(newTodos);
    const index = todos.findIndex((todo) => todo.id === id);
    todos[index].complete = !todos[index].complete;
    setTodos([...todos]);
  };
  return (
    <div className="App">
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        {todos.map((todo) => {
          return (
            <div className="todo">
              <input 
                className="checkbox"
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleCheckbox(todo.id)}
              />
              <div key={todo.id} className="todo-label">
                {" "}
                {todo.value}{" "}
              </div>
            </div>
          );
        })}
     
      </div>

      <button className="button" onClick={handleTodos}>
        add new todo
      </button>
      <div style={{fontSize:'40px', color:'white',marginTop:'30px'}}>
            {todos.filter(todo=> !todo.complete).length} left to do
        </div>
    </div>
  );
}

export default App;
