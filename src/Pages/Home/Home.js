import React, { useState } from "react";

const Home = () => {
  const [noteBox, setNoteBox] = useState(true);
  const handleTodo = (e) => {
    e.preventDefault();
    // data collect from here

    const title = e.target.title.value
    const desc = e.target.desc.value
    const todoData = {title, desc}
    console.log(todoData);



    // close todo app
    setNoteBox(true);
  };
  return (
    <div>
      <h1 className="text-4xl text-center my-5 font-semibold">Shopping Keep</h1>

      {/* todo data input from here */}
      <div className="shadow-2xl p-5 w-[450px] mt-16 mx-auto rounded-md">
        {noteBox ? (
          <div className="mx-auto flex flex-col items-center w-full max-w-lg">
            <input
              type="text"
              onClick={() => setNoteBox(false)}
              placeholder="Take a note"
              className="input input-bordered w-full"
            />
          </div>
        ) : (
          <form
            onSubmit={handleTodo}
            className="mx-auto flex flex-col items-center w-full max-w-lg"
          >
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="input input-ghost w-full"
            />
            <textarea
              type="text"
              placeholder="Type here"
              name="desc"
              className="input input-ghost w-full"
            />
            <input className="btn btn-sm mt-4" type="submit" value="Close" />
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;
