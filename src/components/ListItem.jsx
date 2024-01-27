import React from "react";

const ListItem = ({ data, item, setItem }) => {
  const handleClick = () => {
    const arr = item.filter((it) => it !== data);
    // console.log(item);
    // console.log(arr);
    setItem(arr);
  };
  return (
    <div>
      <span>{data}</span>
      <button
        className=" border border-black bg-green-200 m-2 px-2 w-8 rounded-lg"
        onClick={handleClick}
      >
        X
      </button>
    </div>
  );
};

export default ListItem;
