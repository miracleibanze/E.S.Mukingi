import { useContext, useState } from "react";
import { hamburgerSvg, header, phoneSvg, xSvg } from "../assets";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../App";

const Header = () => {
  const { setPageIndex, setSlideIndex, pages } = useContext(AppContext);

  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setClick(!click);
  };

  window.onscroll = () => {
    setClick(false);
  };

  const content = (
    <>
      <div className=" md:hidden flex items-center justify-center h-screen fixed top-0 w-full left-0 right-0 bg-slate-800 transition-all z-[999] animate-slide-down">
        <ul className="text-center text-xl p-20 min-w-[300px] w-[90%]">
          {pages.map((page) => (
            <li
              key={page.id}
              className="relative flex items-center my-2 cursor-pointer py-2 border-b border-slate-300 hover:bg-slate-300 hover:text-n-8"
              onClick={() => {
                setSlideIndex(page.favSlide);
                setPageIndex(page.id);
                handleClick();
                navigate(page.routerLink);
              }}
            >
              <img src={page.iconUrl} className="h-12 p-[0.8rem] w-12" />
              {page.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
  return (
    <>
      <div>
        <nav className="max-w-full overflow-x-hidden" id="page">
          <div className="relative w-full h-[7rem] max-md:h-[5rem] flex bg-n-1 px-16 py-4 max-md:px-4 max-md:py-2 items-center justify-between text-n-8/90">
            <Link
              to={"/"}
              onClick={() => setPageIndex(0)}
              className="flex items-center relative"
            >
              <img
                src={header}
                width={1000}
                height={1400}
                className="w-[5rem] z-1 aspect-[6/7] max-md:w-12"
              />
              <h4 className="text-start pl-2 ml-2 max-md:pl-1 max-md:ml-1 max-md:h-[3rem] max-md:leading-none border-l-2 border-color-3 text-lg max-md:text-[1rem] leading-5 font-bold h-[5rem] flex flex-col justify-center items-start">
                Ecole
                <br />
                Secondaire&nbsp;De
                <br />
                <font color="green">Mukingi</font>
              </h4>
            </Link>
            <div className="h-[4rem] flex items-center max-md:hidden">
              <img
                src={phoneSvg}
                className="w-12 h-12 flex items-center justify-center p-[0.8rem] bg-color-3"
              />
              <div className="h-16 flex flex-col justify-center items-start ml-2 pl-2 uppercase">
                <p className="font-bold">call us :</p>
                <p>+250788870169 / +250788591045</p>
              </div>
            </div>
          </div>
          <div className="h-[10vh] w-full flex justify-between z-50 lg:py-5 px-20 max-md:px-10 py-4">
            <div className="lg:flex md:flex flex-1 items-center font-normal">
              <div className="flex-10 max-md:hidden">
                <ul className="flex gap-8 mr-16 text-[18px]">
                  {pages.map((page) => (
                    <Link to={page.routerLink} key={page.id}>
                      <li
                        className="hover:text-fuchsia-600 transition hover:border-b-2 hover:border-fuchsia-600 cursor-pointer flex items-center"
                        onClick={() => {
                          setSlideIndex(page.favSlide);
                          setPageIndex(page.id);
                        }}
                      >
                        <img
                          src={page.iconUrl}
                          className="h-12 p-[0.8rem] w-12"
                        />
                        {page.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div>{click && content}</div>
            <button
              className={`w-12 h-12 z-[9999] hidden ${
                click
                  ? "fixed top-4 cursor-pointer right-8 hover:rounded-2xl"
                  : ""
              } max-md:block text-slate-400 transition`}
              onClick={handleClick}
            >
              <img
                src={!click ? hamburgerSvg : xSvg}
                className="w-full h-full"
              />
            </button>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
