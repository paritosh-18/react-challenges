import React, { useState } from "react";
import ListItem from "./ListItem";

const Todo = () => {
  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);

  const handleClick = () => {
    const arr = [...item, input];
    setItem(arr);
    // console.log(arr);
    setInput("");
  };
  return (
    <div>
      <h1 className="m-2 p-2 font-bold text-2xl">
        Description: Create a "todo" app with the following criteria. The user
        should able to add and remove todo items.
      </h1>
      <div className="flex ml-6 mt-10 justify-center">
        <input
          type="text"
          placeholder="type here.."
          value={input}
          className="border p-2 rounded-xl w-1/5"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          className=" border border-black bg-green-200 m-2 px-2 py-1 rounded-lg"
          onClick={handleClick}
        >
          ADD
        </button>
      </div>
      <div className="text-center">
        {item.length !== 0 ? (
          item.map((it) => <ListItem data={it} item={item} setItem={setItem} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Todo;
