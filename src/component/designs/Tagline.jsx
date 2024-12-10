import { memo } from "react";
import brackets from "../../assets/svgs/Brackets";

const Tagline = ({ className, children }) => {
  return (
    <div
      className={`tagline flex items-center -mt-4 justify-center ${
        className || ""
      }`}
    >
      {brackets("left") || "["}
      <div className="m-3 text-n-2 body-2">{children}</div>
      {brackets("right") || "]"}
    </div>
  );
};

export default Tagline;
