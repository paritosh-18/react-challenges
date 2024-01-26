import React from "react";

const Todo = () => {
  return (
    <div>
      <h1 className="m-2 p-2 font-bold text-2xl">
        Description: Create a "todo" app with the following criteria. The user
        should able to add and remove todo items.
      </h1>
      <div className="flex ml-6 mt-10">
        <button className=" border border-black bg-green-200 m-2 px-2 rounded-lg">
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
