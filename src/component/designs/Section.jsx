import { memo } from "react";

const Section = ({ className, id, light, style, children }) => {
  return (
    <div
      id={id}
      className={`relative px-[3rem] max-md:px-[2rem] max-lg:mt-4 flex flex-col items-center text-start -z-1 py-10 lg:py-16 xl:py-20 ${
        className || ""
      }  ${light ? "bg-n-1/20" : ""} `}
      style={style}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10 z-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10 z-10" />
    </div>
  );
};

export default Section;
