import React from "react";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <ul className="m-2 p-2">
        <Link to={"/show_hide_title"} className="font-bold">
          Challenge 1
        </Link>
        : Implement a button to show/hide the text content
      </ul>
      <ul className="m-2 p-2">
        <Link to={"/stopwatch"} className="font-bold">
          Challenge 2
        </Link>
        : Implement a Stopwatch/timer with start ,stop and reset button.
      </ul>
      <ul className="m-2 p-2">
        <Link to={"/todo"} className="font-bold">
          Challenge 3
        </Link>
        : Create a "todo" app with the following criteria. The user should able
        to add and remove todo items.
      </ul>
      <ul className="m-2 p-2">Challenge 4</ul>
      <ul className="m-2 p-2">Challenge 5</ul>
      <ul className="m-2 p-2">Challenge 6</ul>
    </div>
  );
};

export default Body;
