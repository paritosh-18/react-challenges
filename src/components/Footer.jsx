import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" border border-black m-2 p-2 shadow-xl flex justify-between">
      <Link
        className=" m-2 p-2"
        to={"https://github.com/paritosh-18"}
        target="_blank"
      >
        Github
      </Link>
      <Link
        className=" m-2 p-2"
        to={"https://www.linkedin.com/in/paritosh-chauhan-32681b15a/"}
        target="_blank"
      >
        LinkedIn
      </Link>
    </div>
  );
};

export default Footer;
