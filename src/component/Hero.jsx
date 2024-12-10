import Section from "./designs/Section";
import Heading from "./designs/Heading";
import Button from "./designs/Button";
import {
  ADoubleLeftSvg,
  ADoubleRightSvg,
  ALeftSvg,
  ARightSvg,
  arrowRight,
  assemble,
  DOD,
  eyeSlash,
  headMaster,
  parental,
  person1,
  refectory,
  S6Graduates,
  schoolBoys,
  schoolGate,
} from "../assets";
import { memo, useContext, useState } from "react";
import Tagline from "./designs/Tagline";
import About from "./About";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { AppContext } from "../App";
import { activities, Highlights, testimonies, weHave } from "./Constants";

export const AboutSection = () => {
  const context = useContext(AppContext);
  if (!context)
    return (
      <h1 className="h-screen flex items-center justify-center">Loading ...</h1>
    );
  const {
    setPageIndex,
    aboutParagraph,
    setSlideIndex,
    Motto_Vission,
    vission,
  } = context;
  const navigate = useNavigate();
  return (
    <Section light id="about">
      <div className="relative flex justify-center flex-wrap gap-12">
        <div className=" md:w-[20rem] sm:w-[20rem] lg:w-[20rem] h-[40rem] flex flex-col justify-between item">
          <Tagline>What you should know</Tagline>
          <div className="h1 text-white mt-0 mb-4">
            About <span className="text-color-1 relative">Us</span>
          </div>
          <img
            src={schoolGate}
            className="w-full aspect-video rounded-lg border border-color-4 -translate-y-8"
          />
          <p className="body-2 text-justify">{aboutParagraph}</p>
          <Button
            onClick={() => {
              setSlideIndex(3);
              setPageIndex(3);
              navigate("/about");
            }}
          >
            About Us
          </Button>
        </div>
        <div className="lg:w-[20rem] md:w-[18rem] h-[32rem] sm:max-w-[20rem]  translate-y-[10rem] max-[1200px]:translate-y-12 max-md:translate-y-0 flex flex-col justify-between">
          {Motto_Vission}
        </div>
        <div className="lg:w-[20rem] max-[1155px]:md:min-w-[35rem]  sm:w-[70%] w-full flex flex-col justify-between translate-y-[8rem] max-[1200px]:translate-y-0">
          {vission}
        </div>
      </div>
    </Section>
  );
};

export const CoursesSection = () => {
  const context = useContext(AppContext);
  if (!context)
    return (
      <h1 className="h-screen flex items-center justify-center">Loading ...</h1>
    );
  const { courses, setPageIndex, setSlideIndex } = context;
  const navigate = useNavigate();
  return (
    <Section id="courses" className="p-2">
      <Heading
        tag="welcome To our school"
        title="Ecole"
        span="Secondaire"
        title2="De"
        span2="Mukingi"
      />
      <div className="container relative">
        <div className="flex flex-wrap items-center justify-center gap-8 content-evenly max-[880px]:gap-4">
          {courses.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`w-[20rem] max-[695px]:w-[25rem] h-[28rem] p-[.0625rem] rounded-3xl max-[880px]:w-[18rem] border border-n-1/30 ${
                item.colorful ? "bg-conic-gradient" : ""
              }`}
            >
              <div
                className="w-full h-full bg-n-8/95 rounded-3xl bg-cover bg-center "
                style={{
                  backgroundImage: `url(${item.bgUrl ? item.bgUrl : ""})`,
                }}
              >
                <div className="w-full relative h-full p-4 pb-6 bg-n-7/80 rounded-3xl flex flex-col justify-between">
                  <img
                    className="h-[6rem] mx-auto bg-cyan-bottom p-2"
                    src={item.coverUrl}
                  />
                  <h3 className="h3 ">{item.name}</h3>
                  <div className="body-1 text-n-2">
                    {item.full || item.content}
                  </div>
                  <div className="w-full flex justify-center">
                    <Button
                      onClick={() => {
                        setSlideIndex(2);
                        setPageIndex(2);
                        navigate("/education/about-education");
                      }}
                    >
                      Read about ...
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export const ActivitiesSection = () => {
  const context = useContext(AppContext);

  if (!context)
    return (
      <h1 className="h-screen flex items-center justify-center">Loading ...</h1>
    );
  const { setPageIndex, setSlideIndex } = context;
  const navigate = useNavigate();
  return (
    <Section id="activities">
      <Heading
        title="Activities"
        span="highlight"
        tag="Why choose our school"
      />

      <div className="container relative">
        <div className="w-full h-full flex flex-wrap items-center justify-center gap-12">
          {activities.map((item) => (
            <div
              key={item.id}
              className="w-[20rem] h-[30rem] relative bg-conic-gradient p-[0.0625rem]"
            >
              <div className="w-full h-full bg-slate-900 p-4 flex flex-col justify-between">
                <div>
                  <h5 className="h5 text-center">{item.name}</h5>
                  <img
                    className="w-full object-cover h-[13rem] border mt-4"
                    src={item.imageUrl}
                  />
                </div>
                <p className="body-2 text-justify pb-8">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full text-end pt-8 px-8">
          <Button
            onClick={() => {
              setPageIndex(2);
              setSlideIndex(1);
              navigate("/news&events/news");
            }}
          >
            Read in News & Events
          </Button>
        </div>
      </div>
    </Section>
  );
};

export const WeHaveSection = () => {
  return (
    <Section
      id="we-have"
      className=" bg-cover h-[700px] bg-center relative"
      style={{ backgroundImage: `url(${headMaster})` }}
    >
      <div className="container absolute w-full h-full flex flex-col justify-center gap-4 items-center bg-gradient-to-b from-n-6/0 to-n-6/70">
        <h3 className="h3 -translate-y-32 lg:-translate-y-1/2">We have :</h3>
        <div className="flex gap-8 flex-wrap justify-evenly w-full">
          {weHave.map((item) => (
            <div
              key={item.id}
              className="w-[10rem] text-center overflow-visible "
            >
              <h1 className="h1 text-[5rem] border-t-8 font-code border-red-600 pt-8">
                {item.Number}
              </h1>
              <h2 className="h2">{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export const PictureSection = () => {
  const context = useContext(AppContext);

  if (!context)
    return (
      <h1 className="h-screen flex items-center justify-center">Loading ...</h1>
    );
  const { setPageIndex, setSlideIndex } = context;
  const navigate = useNavigate();
  const [highlightIndex, setHIghlightIndex] = useState(0);

  const nextHighlight = () => {
    const isLastHightlight = highlightIndex === Highlights.length - 1;
    const newHightlightIndex = isLastHightlight ? 0 : highlightIndex + 1;
    setHIghlightIndex(newHightlightIndex);
  };

  const prevHighlight = () => {
    const isFirstHightlight = highlightIndex === 0;
    const newHightlightIndex = isFirstHightlight
      ? Highlights.length - 1
      : highlightIndex - 1;
    setHIghlightIndex(newHightlightIndex);
  };

  return (
    <Section id="picture-highlight" light>
      <div className="container flex flex-col items-center justify-center xl:px-[10rem] lg:px-[6rem] md:px-[3rem] px-[1rem]">
        <Heading
          title="Picture"
          span="Highlights"
          tag="our everyday activities in pictures"
        />
        <div
          className="relative w-full xl:h-[550px] lg:h-[500px] md:h-[400px] h-[300px] blueShadow border border-color-1 bg-cover"
          style={{
            backgroundImage: `url(${Highlights[highlightIndex].url})`,
          }}
        >
          <Tagline className="absolute top-4 left-0 bg-n-8/60 px-4">
            {Highlights[highlightIndex].Date}
          </Tagline>

          <div className="body-2 absolute bottom-4 right-32 left-32 py-8 text-center bg-n-8/50">
            {Highlights[highlightIndex].caption}
          </div>

          <div className="absolute z-1  bottom-0 left-0">
            <Button blue onClick={() => prevHighlight()}>
              <img src={ADoubleLeftSvg} className="w-8 h-8" />
            </Button>
          </div>
          <div className="absolute z-1  bottom-0 right-0">
            <Button blue onClick={() => nextHighlight()}>
              <img src={ADoubleRightSvg} className="w-8 h-8" />
            </Button>
          </div>
        </div>
        <div className="relative w-full py-4 mt-4">
          <Button
            onClick={() => {
              setPageIndex(1);
              setSlideIndex(2);
              navigate("./news&events/picture-highlight");
            }}
          >
            See more
          </Button>
        </div>
      </div>
    </Section>
  );
};

export const TestimonialsSection = () => {
  const [testimonyIndex, setTestmonyIndex] = useState(0);

  const prevTestimonial = () => {
    const isFirsTestmonial = testimonyIndex === 0;
    const newTestimonyIndex = isFirsTestmonial
      ? testimonies.length - 1
      : testimonyIndex - 1;
    setTestmonyIndex(newTestimonyIndex);
  };
  const nextTestimonial = () => {
    const isLastTestimony = testimonyIndex === testimonies.length - 1;
    const newTestimonyIndex = isLastTestimony ? 0 : testimonyIndex + 1;
    setTestmonyIndex(newTestimonyIndex);
  };
  return (
    <Section id="testimonials">
      <div className="container relative">
        <Heading
          title="Our"
          span="Testimony"
          text="This is why Our school is the best choise, Read experiences from students, parents and Staff"
        />
        <div className="grid w-full md:grid-cols-2 gap-8 max-lg:md:pt-[6rem]">
          <div className="w-[25rem] h-full flex flex-col items-end max-md:w-max max-md:mx-auto max-lg:md:-translate-y-[6rem]">
            <div className="w-full h-auto flex md:gap-2 gap-8 md:flex-row flex-col items-center justify-start relative left-0">
              <img
                className="w-[10rem] h-[10rem] rounded-full bg-n-7 border-8 border-color-1 object-cover object-center relative z-10"
                src={testimonies[testimonyIndex].avatar}
              />
              <div className="md:bg-color-1 md:text-n-8 text-n-1 md:translate-x-[5rem] absolute max-md:relative top-0 px-[5rem] h-[5rem] md:pr-4 rounded-br-[3rem] ">
                <div className="h5 font-bold">
                  {testimonies[testimonyIndex].names}
                </div>
                <div className="body-2">{testimonies[testimonyIndex].year}</div>
              </div>
            </div>
          </div>
          <div className="flex-1 h5 text-center">
            "{testimonies[testimonyIndex].content}"
          </div>
        </div>
        <div className="pt-12 flex justify-between">
          <Button className="rounded-full" onClick={() => prevTestimonial()}>
            <img className="w-8 h-8" src={ALeftSvg} />
          </Button>
          <Button className="rounded-full" onClick={() => nextTestimonial()}>
            <img className="w-8 h-8" src={ARightSvg} />
          </Button>
        </div>
      </div>
    </Section>
  );
};

const Hero = () => {
  return (
    <>
      <CoursesSection />
      <AboutSection />
      <ActivitiesSection />
      <WeHaveSection />
      <PictureSection />
      <TestimonialsSection />
    </>
  );
};

export default Hero;
