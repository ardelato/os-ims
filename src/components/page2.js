import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div>
      Page 2
      <div>
        <Link to="/">
          <button>back to landing</button>
        </Link>
      </div>
    </div>
  );
};

export default Page2;