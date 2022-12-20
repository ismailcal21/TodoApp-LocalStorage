import React from "react";

const Todo = (props) => {
  const {
    item,
    changeIsDone,
    setIsEdit,
    setWillUpdateTodo,
    setTodoText,
    deleteTodo,
  } = props;

  return (
    <div class=" d-flex justify-content-center align-items-center ">
      <div
        class={`alert alert-${
          item.isDone === false ? "primary" : "success"
        } d-flex justify-content-between align-items-center w-75`}
        role="alert"
      >
        <p> {item.text}</p>
        <div>
          <button
            onClick={() => changeIsDone(item.id)}
            //parametre gönderecegimiz zaman böyle yazariz aksi haöde on submitteki gibi yazariz
            className="btn btn-sm btn-secondary"
          >
            {item.isDone === false ? "Done" : "Undone"}
          </button>
          <button
            className="btn btn-sm btn-success mx-1"
            onClick={() => {
              {
                setIsEdit(true);
                setWillUpdateTodo(item.id);
                setTodoText(item.text);
              }
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-danger mx-1"
            onClick={() => {
              deleteTodo(item.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
