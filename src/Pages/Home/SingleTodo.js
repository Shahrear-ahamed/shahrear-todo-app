import React from "react";

const SingleTodo = ({ todo, refetch }) => {
  const { _id, email, title, desc, complete } = todo;

  const updatedData = { email, title, desc, complete: true };
  const handleComplete = () => {
    fetch(`https://shahrear-todo-app.herokuapp.com/todolists/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
        }
      });
  };
  const handleDelete = () => {
    fetch(`https://shahrear-todo-app.herokuapp.com/todolists/${_id}`, {
      method: "Delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
        }
      });
  };
  // ui shownd here
  return (
    <div className="my-3 px-5 shadow-md w-full border-2 rounded-md mx-auto py-3">
      <h2 className="text-right">
        {complete ? (
          <span className="badge bg-green-500 border-0">Complete</span>
        ) : (
          <span className="badge bg-red-500 border-none">Pending</span>
        )}
      </h2>
      <h2 className="text-3xl font-semibold my-3">{title}</h2>
      <p>{desc}</p>
      <div className="space-x-4 my-4">
        <button
          onClick={() => handleComplete()}
          className="btn btn-xs modal-button bg-green-500 border-none"
        >
          Complete
        </button>
        <label
          htmlFor="todoModal"
          onClick={() => handleDelete()}
          className="btn btn-xs modal-button bg-red-500 border-none"
        >
          Delete
        </label>
      </div>
    </div>
  );
};

export default SingleTodo;
