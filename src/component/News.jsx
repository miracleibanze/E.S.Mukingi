import Section from "./designs/Section";
import Heading from "./designs/Heading";
import {
  assemble,
  grid,
  headMaster,
  schoolBoys,
  starFull,
  studentTalk,
} from "./../assets";
import Tagline from "./designs/Tagline";
import NewsPictureHighlight from "./NewsPictureHighlight";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import { memo, useContext, useEffect } from "react";
import { AppContext } from "../App";

const News = () => {
  const context = useContext(AppContext);

  if (!context)
    return (
      <h1 className="h-screen flex items-center justify-center">Loading ...</h1>
    );
  const { newsType, setNewsType } = context;
  const { type } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (type === "picture-highlight") {
      setNewsType(1);
    } else if (type === "news") {
      setNewsType(0);
    } else {
      navigate("/");
    }
  }, [newsType]);
  const newTypeTitle = [
    {
      title: "News & Events",
      span: "latest news from school",
    },
    {
      title: "Picture Highlight",
      span: "Click here and follow with images",
    },
  ];

  const news = [
    {
      Date: "14 November, 2024",
      name: "Meeting with parents",
      poster: headMaster,
      content:
        "In this parental meeting on 14 November, 2024, School headMaster anounced that who ever student who will not come below a half of conduct marks, he/ she won't have another chance of staying in this school. Along with other decisions acording to finances, living health of students and other updates.",
    },
    {
      Date: "08 October, 2024",
      name: "Creative student",
      poster: schoolBoys,
      content: `Some students in creative and innovation club has shown their skills and cooperated with SBC ('students Bussines Club) to make a soap and some foods that are found in school canteen. this is significant stage in innovativity in students found in this school.
      These students says that it is their skills they are developing with help of school which provides better environment for their opinion, they can achieve more in the out side world.`,
    },
    {
      Date: "24 September, 2024",
      name: "Talk with elders",
      poster: studentTalk,
      content: `Students got an explaination about 1994 jenocide against tutsi, advises on prevention of ideology and how can build a better future starting on history of Rwanda.
      Speech was delivered by Mr. NTURO Chaste, who was a teacher of history of citizenship in ordinary level and general studies and communication skills in advanced level.`,
    },
    {
      Date: "17 December, 2024",
      name: "ITORERO",
      poster: assemble,
      content: `As student of Rwanda, in Itorero program, where they learn different culture ways of life that was Rwandan tradition.
      On friday assemble in which was assigned to 'Itorero', Student are announced about upcaming event called 'Gushyira intore mu zindi'(Welcoming new students in 'Itorero'),It is Annually activity, students were happy to be announced with that upcoming event.`,
    },
  ];

  return (
    <>
      <div className="flex justify-center w-full">
        {newTypeTitle.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className={`relative h3 font-bold flex flex-col items-center justify-center cursor-pointer w-1/2 p-8 ${
              newsType != itemIndex ? "" : "text-n-8/90 bg-n-1/50"
            }`}
            onClick={() => {
              setNewsType(itemIndex);
              navigate(
                newsType === 0
                  ? "/news&events/picture-highlight"
                  : "/news&events/news"
              );
            }}
          >
            {item.title}

            {item.span && (
              <Tagline
                className={`body-2 text-n-1/80 ${
                  !newsType != itemIndex ? "hidden" : ""
                }`}
              >
                {item.span}
              </Tagline>
            )}
          </div>
        ))}
      </div>
      <NewsPictureHighlight
        className={`${newsType != 0 ? "block" : "hidden"}`}
      />
      <Section className={`${newsType != 1 ? "block" : "hidden"}`}>
        <div className="container relative">
          <Heading
            title="latest News"
            span="& Events"
            text="Here you can read and follow what happened in school that you might need to know"
          />
          <h1>{type}</h1>
          <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
            {news.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="md:flex even:md:translate-y-[7rem] p-[0.065rem] rounded-[2.5rem] bg-conic-gradient"
              >
                <div className="relative p-8 bg-color-5 rounded-[2.5rem] overflow-hidden xl:p-15 w-full h-full">
                  <div className="absolute inset-0">
                    <img
                      src={grid}
                      width={550}
                      height={550}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="relative z-1 ">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 lg:mb-20">
                      <Tagline>{item.Date}</Tagline>

                      <div className="px-4 py-1 ">
                        <img src={starFull} width={16} height={16} />
                      </div>
                    </div>

                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={item.poster}
                        className="w-full h-auto object-cover max-h-[20rem]"
                        width={630}
                        height={420}
                        alt={item.name}
                      />
                    </div>
                    <h4 className="h4 mb-4 flex items-center justify-between">
                      {item.name}
                    </h4>
                    <p className="body-1 text-n-3 text-justify">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default News;
