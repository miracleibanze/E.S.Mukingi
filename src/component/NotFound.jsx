import { memo } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <h3 className="h3">Error! Page not found.</h3>
        <Link to={"/"}>
          Go back to <u>Home</u>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
