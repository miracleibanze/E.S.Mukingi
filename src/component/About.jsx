import Section from "./designs/Section";
import Heading from "./designs/Heading";
import { headMaster, WhiteADoubleRightSvg } from "../assets";
import Button from "./designs/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import { administration, iframes } from "./Constants";

const About = () => {
  const context = useContext(AppContext);
  if (!context)
    return (
      <h1 className="h-screen flex items-center justify-center">Loading ...</h1>
    );
  const { aboutParagraph, Motto_Vission, vission, setPageIndex, goUp } =
    context;

  const navigate = useNavigate();

  return (
    <>
      <Section>
        <Heading title="About" span="Us" tag="what you should know about us" />

        <div className="container relative body-1 mb-16">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
            <div className="w-full h-full relative">
              <img
                src={headMaster}
                alt="Head Master"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 bg-n-8/60 left-0 right-0">
                <p className="px-4 py-2  mx-auto">HeadMaster of E.S Mukingi</p>
              </div>
            </div>
            <div className="w-full h-full flex flex-col justify-between ">
              <p className="">
                You are proudly welcomed to a choose our school where there is
                no exclusion to preparing the better future, you are at right
                place. As staff of works well with parents day-to-day connection
                for the wellbeing of students, we always make sure to upgrade
                every facility to meet with the requirements of the new
                generation.
              </p>
              <p className="">
                {" "}
                we upgrade to the way of studies hence its your chance to take
                up with the changes and be in the number of lucky people who
                will lead the national success. may you children be under our
                care too
              </p>
            </div>
            <div className="relative md:col-span-2">{aboutParagraph}</div>
            <div className="relative">
              {Motto_Vission}
              <div className="relative mt-4">
                <Button
                  top
                  onClick={() => {
                    setPageIndex(2);
                    goUp();
                    navigate("/education/about-education");
                  }}
                >
                  About our Education
                </Button>
              </div>
            </div>
            <div className="relative">{vission}</div>
          </div>
        </div>
      </Section>
      <Section light>
        <h2 className="h2 font-bold">Video history</h2>
        <div className="grid md:grid-cols-2 md:gap-10 mb-16">
          {iframes.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="w-full h-full flex flex-col items-center justify-center p-8"
            >
              <iframe
                src={item.iframeUrl}
                title="Youtube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full aspect-video border border-color-1"
              ></iframe>
              <div>
                <h4 className="mt-[1.3rem] h4">{item.title}</h4>
                <p>{item.description}</p>
                <p className="body-1 text-n-1/80 text-end">4 apir, 2016</p>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </Section>
      <Section>
        <Heading title="Our" span="Administration" />
        <div className="container relative">
          <div className="flex flex-wrap items-center justify-center lg:gap-16 md:gap-10 gap-4">
            {administration.map((item, itemIndex) => (
              <div
                className="relative sm:w-[25rem] blueShadow h-[32rem] w-full overflow-hidden"
                key={itemIndex}
              >
                <div
                  className="relative w-full h-[25rem] bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.imgUrl})` }}
                >
                  <div className="absolute bg-gradient-to-b from-transparent to-n-8/90 h-[5rem]  z-[100] bottom-0 right-0 left-0" />
                  <div className="absolute bg-gradient-to-t from-transparent to-n-8/90 h-8  z-[100] top-0 right-0 left-0" />
                </div>
                <div className="relative w-full h-[7rem] pl-4 bg-n-1">
                  <p className="body-1 font-bold flex items-center text-n-8 underline">
                    Names: {item.name}
                  </p>

                  <p className="body-2 flex-items-center  text-n-8">
                    Title: {item.title}
                  </p>

                  <p className="body-2 flex items-center text-n-8">
                    Tel: {item.tel}
                  </p>
                  <p className="body-2 flex items-center text-n-8">
                    E-mail: {item.email}
                  </p>

                  <div className="absolute bg-gradient-to-l from-transparent to-n-8/90 w-1  z-[100] bottom-0 top-0 left-1" />
                  <div className="absolute bg-gradient-to-l from-transparent to-n-8/90 w-1  z-[100] bottom-0 top-0 left-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-center mb-8 mt-32">
          <Button
            onClick={() => {
              setPageIndex(4);
              goUp();
              navigate("/contact");
            }}
          >
            For more details
            <img src={WhiteADoubleRightSvg} className="h-4" />
          </Button>
        </div>
      </Section>
    </>
  );
};

export default About;
