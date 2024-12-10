import { useContext, useState } from "react";
import {
  ADoubleRightSvg,
  copyRightSvg,
  header,
  S6Graduates,
  starFull,
  xSvg,
} from "../assets";
import Section from "./designs/Section";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { designerSacials } from "./Constants";

const Footer = () => {
  const context = useContext(AppContext);

  if (!context)
    return (
      <h1 className="h-screen flex items-center justify-center">Loading ...</h1>
    );
  const {
    aboutParagraph,
    courses,
    pages,
    pageIndex,
    setPageIndex,
    setSlideIndex,
  } = context;
  const [viewDesigner, setViewDesigner] = useState(false);

  return (
    <>
      <Section
        className="bg-cover border-t-[1rem] border-n-2 bg-center lg:h-[20rem] md:h-[18rem] h-[10rem]"
        style={{ backgroundImage: `url(${S6Graduates})` }}
      >
        <div className="absolute inset-0 bg-n-8/80 " />
        <h2
          className="absolute w-full h-full inset-0 m-0 bg-color-3/50 uppercase font-extrabold flex items-center justify-center xl:text-[15rem] lg:text-[13rem] md:text-[10rem] sm:text-[8rem] text-[18vw] bg-cover bg-center bg-clip-text text-transparent"
          style={{ backgroundImage: `url(${S6Graduates})` }}
        >
          Mukingi
        </h2>
      </Section>
      <Section className="bg-n-2 text-color-3">
        <div className="relative container w-full flex justify-between flex-wrap">
          <div className="md:w-[20rem] sm:w-1/2">
            <div className="flex item-center px-4">
              <img className="w-15 h-20" src={header} />
              <p className="border-l-2 border-n-8 pl-2 ml-4">
                Ecole secondaire
                <br />
                de mukingi
                <br />
                (E.S.M)
              </p>
            </div>
            {aboutParagraph}
          </div>
          <ul
            className="md:w-[12rem] sm:w-[40%] mx-auto mt-4"
            onClick={() => {
              setPageIndex(2);
              setSlideIndex(favSlide);
              goUp();
            }}
          >
            <Link to={"/education"}>
              <h5 className="h5">Our Courses</h5>
              {courses.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center gap-2">
                  <img className="h-full aspect-square" src={starFull} />
                  {item.name}
                </li>
              ))}
            </Link>
          </ul>
          <ul className="w-[10rem] max-md:mx-auto mt-4">
            <h5 className="h5">Quick Links</h5>
            {pages.map((item) => (
              <Link
                to={item.routerLink}
                key={item.id}
                onClick={() => {
                  setSlideIndex(item.favSlide);
                  setPageIndex(item.id);
                  goUp();
                }}
              >
                <li
                  className={` flex gap-2 items-center ${
                    item.id === pageIndex ? "text-fuchsia-500" : ""
                  }`}
                >
                  <img className="h-4" src={ADoubleRightSvg} />
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </Section>
      <div className="relative container p-6 grid md:grid-cols-2">
        <p className="body-2 text-n-3 h-10 flex items-center justify-center gap-2 p-2">
          <img
            className="relative h-full my-2 max-md:h-[80%]"
            src={copyRightSvg}
          />
          {new Date().getFullYear()}. All rights reserved.
        </p>
        <p className="relative flex items-center text-n-1/50 justify-center">
          Designed by&nbsp;
          <u
            onClick={() => setViewDesigner(true)}
            className="cursor-pointer text-n-1"
          >
            IBANZE Miracle
          </u>
        </p>
        {viewDesigner && (
          <div className="absolute lg:w-1/2 md:w-2/3 w-full py-2 h-[5rem] flex items-center justify-center bg-n-8 top-0 -translate-y-full right-0 gap-8">
            {designerSacials.map((item) => (
              <a href={item.linkUrl} key={item.id}>
                <img
                  src={item.iconUrl}
                  alt={item.name}
                  className="flex items-center justify center w-8 h-8"
                />
              </a>
            ))}
            <img
              src={xSvg}
              alt="close"
              className="absolute top-0 right-4 w-5 h-5"
              onClick={() => setViewDesigner(false)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
