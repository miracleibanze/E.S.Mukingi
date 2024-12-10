import { useNavigate, useParams } from "react-router-dom";
import {
  award,
  awardSvg,
  bookReaderSvg,
  chalkboardSvg,
  clockSvg,
  clockTicking,
  graduated,
  keyGraduation,
} from "../assets";
import Button from "./designs/Button";
import Heading from "./designs/Heading";
import Section from "./designs/Section";
import Tagline from "./designs/Tagline";
import EducationFacility from "./EducationFacility";
import { memo, useContext, useEffect } from "react";
import { AppContext } from "../App";

const Education = () => {
  const context = useContext(AppContext);
  if (!context)
    return (
      <h1 className="h-screen flex items-center justify-center">Loading ...</h1>
    );
  const {
    educationPartIndex,
    setEducationPartIndex,
    courses,
    setPageIndex,
    goUp,
  } = context;

  const { type } = useParams();
  const navigate = useNavigate();

  const part = [
    {
      title: "About Education",
      span: "about studies we provide",
    },
    {
      title: "Learning Facilities",
      span: "Click here and follow your studies",
    },
  ];

  useEffect(() => {
    if (type === "about-education") {
      setEducationPartIndex(0);
    } else if (type === "education-facilities") {
      setEducationPartIndex(1);
    } else {
      navigate("/");
    }
  }, [type]);

  const features = [
    {
      title: "professional teachers",
      content:
        "Since we prioritize our student' learning, we can't afford to have teachers who can't meet the demand of our students' perfection. That's our first goal.",
      iconUrl: chalkboardSvg,
      bgUrl: graduated,
    },
    {
      title: "Quality education",
      content:
        "We improve qaulity education by providing all of the necessities to students; time space and provision in both aspects.",
      iconUrl: bookReaderSvg,
      bgUrl: keyGraduation,
    },
    {
      title: "Always on time",
      content:
        "Before succeding, one is mastering to work on time which is the best thing on ave to know to be called smart. so we all become 'SMART'",
      iconUrl: clockSvg,
      bgUrl: clockTicking,
    },
    {
      title: "we are pacionates",
      content:
        "Education isn't a thing that we try to do, we just do it because it's our passion and abouve it comes with love for student.",
      iconUrl: awardSvg,
      bgUrl: award,
    },
  ];

  return (
    <div>
      <div className="flex justify-center w-full">
        {part.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className={`relative h3 cursor-pointer flex flex-col justify-center items-center font-bold w-1/2 p-8 ${
              educationPartIndex != itemIndex ? "" : "text-n-8/90 bg-n-1/50"
            }`}
            onClick={() => {
              navigate(
                educationPartIndex === 0
                  ? "/education/education-facilities"
                  : "/education/about-education"
              );
            }}
          >
            {item.title}
            {item.span && (
              <Tagline
                className={`body-2 text-n-1/80 ${
                  !educationPartIndex != itemIndex ? "hidden" : ""
                }`}
              >
                {item.span}
              </Tagline>
            )}
          </div>
        ))}
      </div>

      <Section
        id="courses"
        className={`${educationPartIndex != 1 ? "block" : "hidden"}`}
      >
        <Heading tag="Our way of education" title="Our best" span="Features" />
        <div className="container relative">
          <div className="relative grid md:grid-cols-2">
            {features.map((item, itemIndex) => (
              <div
                className="flex flex-col w-full h-[20rem] bg-cover bg-center "
                key={itemIndex}
              >
                <div className="bg-color-2 m-4 text-center rounded-badly h-14 w-14 flex items-center justify-center ">
                  <img src={item.iconUrl} className="w-8" />
                </div>
                <h5 className="h5 font-bold px-2">{item.title}</h5>
                <div className="h-1/2 body-2 p-4">{item.content}</div>
              </div>
            ))}
          </div>
          <Heading title="About our" span="key Courses" />
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((item, itemIndex) => (
              <div
                className="flex items-start flex-col justify-between"
                key={itemIndex}
              >
                <h3 className="h3 font-bold flex items-center gap-2">
                  <img
                    src={item.coverUrl}
                    alt="-"
                    className=" md:h-[2rem] h-[1.5rem] bg-cyan-bottom"
                  />
                  {item.name}
                </h3>
                <div className="body-1 text-white mb-4">
                  {item.full || item.content}
                </div>
                <div>{item.description}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <Button
            onClick={() => {
              setPageIndex(4);
              goUp();
              navigate("/contact");
            }}
            top
          >
            Join Our Journey
          </Button>
        </div>
      </Section>
      <EducationFacility
        className={`${type === "education-facilities" ? "flex" : "hidden"}`}
      />
    </div>
  );
};

export default Education;
