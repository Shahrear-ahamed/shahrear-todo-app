import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Navbar from "../Shared/Navbar";
import TodoData from "./TodoData";

const Home = () => {
  const [user] = useAuthState(auth);
  const [noteBox, setNoteBox] = useState(true);

  // get all data
  const {
    data: todos,
    isLoading,
    refetch,
  } = useQuery(["todoData", user], () =>
    fetch(
      `https://shahrear-todo-app.herokuapp.com/todolists/${user?.email}`
    ).then((res) => res.json())
  );

  const handleTodo = (e) => {
    e.preventDefault();
    // data collect from here

    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const email = user.email;
    const complete = false;
    const todoData = { email, title, desc, complete };
    if (title || desc) {
      fetch("https://shahrear-todo-app.herokuapp.com/todolists", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(todoData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            // close todo app
            setNoteBox(true);
            refetch();
          }
        });
    }
  };
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl text-center my-5 font-semibold">Shopping Todo</h1>

      {/* todo data input from here */}
      <div className="shadow-2xl p-5 w-[450px] mt-16 mx-auto rounded-md">
        {noteBox ? (
          <div className="mx-auto flex flex-col items-center w-full max-w-lg">
            <button onClick={() => setNoteBox(false)} className="w-full">
              Add a task
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleTodo}
            className="mx-auto flex flex-col space-y-3 items-center w-full max-w-lg"
          >
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="input input-ghost border-0 w-full"
            />
            <textarea
              type="text"
              placeholder="Type here"
              name="desc"
              className="input input-ghost border-0 w-full"
            />
            <input className="btn btn-sm mt-4" type="submit" value="Add" />
          </form>
        )}
      </div>
      <div>
        <TodoData todos={todos} isLoading={isLoading} refetch={refetch} />
      </div>
    </div>
  );
};

export default Home;
