import React from "react";
import Loading from "../Shared/Loading";
import SingleTodo from "./SingleTodo";

const TodoData = ({ todos, isLoading, refetch }) => {
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto">
      <h2 className="text-right text-2xl ">My total {todos.length} todos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
        {todos.map((todo) => (
          <SingleTodo key={todo._id} todo={todo} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default TodoData;
