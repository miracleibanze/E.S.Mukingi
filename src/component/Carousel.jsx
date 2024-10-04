import { useContext } from "react";
import { ADoubleRightSvg, ALeftSvg, ARightSvg, dot } from "./../assets";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const {
    pageIndex,
    pages,
    slides,
    prevSlide,
    nextSlide,
    goToIndex,
    slideIndex,
  } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className="w-full h-[780px] max-md:h-[425px]">
      <div
        className={`w-full h-[700px] max-md:h-[400px] bg-center bg-cover duration-500 relative`}
        style={{ backgroundImage: `url(${slides[slideIndex].url.imgBg})` }}
      >
        <img
          src={slides[slideIndex].url.img}
          className="absolute min-h-full max-h-full min-w-full object-cover object-center"
          height={slides[slideIndex].height}
          width={slides[slideIndex].width}
        />
        <div className="w-full h-full absolute z-2 group">
          <div
            className="absolute flex items-center pl-8 h-full md:w-32 max-md:max-w-16 bg-gradient-to-l from-n-8/10 to-n-8/90 cursor-pointer"
            onClick={prevSlide}
          >
            <img
              className="h-32 w-8 group-hover:block hidden max-md:block"
              src={ALeftSvg}
            />
          </div>
          <div className="absolute top-4 fromWhite left-0 py-4 px-8  h-12 z-[90] flex items-center gap-2">
            {pageIndex != 0 && (
              <h3 className="h3 text-n-8" onClick={() => navigate("/")}>
                Home&nbsp;
              </h3>
            )}
            <img
              className={`w-8 h-8 ${pageIndex != "0" ? "block" : "hidden"} `}
              src={ADoubleRightSvg}
            />
            <h3 className="h3 text-n-8">{pages[pageIndex].name}</h3>
          </div>
          <div
            className="absolute flex items-center right-0 pr-8 h-full w-32 justify-end  bg-gradient-to-r from-n-8/10 to-n-8/90 cursor-pointer"
            onClick={nextSlide}
          >
            <img
              className="w-8 h-32 group-hover:block hidden max-md:block"
              src={ARightSvg}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full h-[50px] max-md:h-[25px] flex items-center justify-center gap-4 max-md:gap-3 bg-slate-900 -top-4">
        {slides.map((item, itemIndex) => (
          <div key={itemIndex}>
            <img
              src={dot}
              className={`w-4 h-4 max-md:w-3 max-md:h-3 cursor-pointer rounded-full ${
                slideIndex != itemIndex ? "" : "bg-white"
              }`}
              onClick={() => goToIndex(itemIndex)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
