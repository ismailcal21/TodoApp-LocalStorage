import React from "react";

const TodoForm = (props) => {
  const { handleSubmit, todoText, setTodoText, isEdit } = props;
  return (
    <form
      onSubmit={handleSubmit}
      className="  d-flex justify-content-center align-items-center"
    >
      <div className="input-group mb-3 w-75 ">
        <input
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
          type="text"
          className="form-control"
          placeholder="Todos.."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <button
          className={`btn btn-${isEdit === false ? "primary" : "success"} `}
          type="submit"
        >
          {isEdit === false ? "Save" : "Edit"}
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
