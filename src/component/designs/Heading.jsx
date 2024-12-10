import { memo } from "react";
import Tagline from "./Tagline";

const Heading = ({ className, title, title2, span, span2, tag, text }) => {
  return (
    <div
      className={`${
        className || "max-w-[50rem] mx-auto mb-12 lg:mb-20 text-center"
      }`}
    >
      {tag && <Tagline className="mb-4">{tag}</Tagline>}
      <div>
        {title && (
          <h2 className="h1 text-white">
            {title}&nbsp;
            <br className="md:hidden" />
            <span
              className={`h1 mt-4 ${
                span2 ? "text-color-2" : "text-color-1"
              } span`}
            >
              {span}
            </span>
          </h2>
        )}
        {title2 && (
          <h2 className="h1 text-white">
            {title2}&nbsp;
            <span className="h1 mt-4 text-color-1 span">{span2}</span>
          </h2>
        )}
        {text && (
          <p className="body-2 bg-gradient-to-r from-yellow-300 to-n-1 bg-clip-text text-transparent">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default Heading;
