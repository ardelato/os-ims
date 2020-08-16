import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      Landing page
      <div>
        <Link to="/page2">
          <button>to page2 </button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
