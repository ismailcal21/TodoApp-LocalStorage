import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App(props) {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [willUpdateTodo, setWillUpdateTodo] = useState("");

  useEffect(() => {
    const todosFromLocalStorage = localStorage.getItem("todos");
    console.log("todosFrom", todosFromLocalStorage);
    if (todosFromLocalStorage === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(todosFromLocalStorage));
    }
  }, []);

  const deleteTodo = (id) => {
    console.log(id);
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  const changeIsDone = (id) => {
    const searchedTodo = todos.find((item) => item.id === id);
    const updatedTodo = {
      ...searchedTodo,
      isDone: !searchedTodo.isDone,
    };
    const filteredTodo = todos.filter((item) => item.id !== id);
    setTodos([updatedTodo, ...filteredTodo]);
    localStorage.setItem(
      "todos",
      JSON.stringify([updatedTodo, ...filteredTodo])
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todoText === "") {
      alert("Burasi Bos birakilamaz");
      return;
    }
    const hasTodo = todos.find((item) => item.text === todoText);
    console.log(hasTodo);
    if (hasTodo !== undefined) {
      alert("You have the same todo already");
      return;
    }
    if (isEdit === true) {
      const searchedTodo = todos.find((item) => item.id === willUpdateTodo);
      const updatedTodo = {
        ...searchedTodo,
        text: todoText,
      };
      const filteredTodo = todos.filter((item) => item.id !== willUpdateTodo);
      setTodos([...filteredTodo, updatedTodo]);
      localStorage.setItem(
        "todos",
        JSON.stringify([...filteredTodo, updatedTodo])
      );
      setTodoText("");
      setIsEdit(false);
      setWillUpdateTodo("");
    } else {
      const newTodo = {
        id: new Date().getTime(),
        isDone: false,
        text: todoText,
        date: new Date(),
      };
      setTodos([...todos, newTodo]);
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      setTodoText("");
    }
  };
  return (
    <div>
      <h1 className="text-center my-5">Todo App</h1>
      <TodoForm
        handleSubmit={handleSubmit}
        todoText={todoText}
        setTodoText={setTodoText}
        isEdit={isEdit}
      />
      {todos.length <= 0 ? (
        <p className="text-center my-4">You dont have any todos yet</p>
      ) : (
        <div>
          {todos.map((item) => {
            return (
              <Todo
                item={item}
                changeIsDone={changeIsDone}
                setIsEdit={setIsEdit}
                setWillUpdateTodo={setWillUpdateTodo}
                setTodoText={setTodoText}
                deleteTodo={deleteTodo}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
