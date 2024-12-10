import { memo, useState } from "react";
import Section from "./designs/Section";
import {
  ALeftSvg,
  ARightSvg,
  assemble,
  eyeSlash,
  eyeSvg,
  fileDownloadSvg,
  lunch,
  parental,
  refectory,
  schoolAttention,
  studentTalk,
  threeStudent,
  xSvg,
} from "../assets";
import Heading from "./designs/Heading";

const NewsPictureHighlight = ({ className }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [toggleZoom, setToggleZoom] = useState(false);

  const handleZoom = () => {
    setToggleZoom(!toggleZoom);
  };

  const image = [
    {
      url: assemble,
      title: "Ready to attend 'ITORERO'",
    },
    {
      url: studentTalk,
      title: "Getting Information about Genocide",
    },
    {
      url: threeStudent,
      title: "Students who created innovation & creativity club",
    },
    {
      url: schoolAttention,
      title: "students in a meeting with headMaster",
    },
    {
      url: lunch,
      title: "Students in refectory at Lunch time",
    },
    {
      url: refectory,
      title: "Getting Short notifications in hall ",
    },
    {
      url: parental,
      title: "Parental meeting",
    },
    {
      url: eyeSlash,
      title: "----",
    },
    {
      url: eyeSlash,
      title: "----",
    },
  ];

  window.onscroll = () => {
    setToggleZoom(false);
  };

  const zoomContent = (
    <>
      <div className="fixed z-[100] inset-0 bg-color-3">
        <div className="h-full w-full">
          <img
            src={image[imageIndex].url}
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className="fixed z-20 top-0 right-0 h-16 w-16 flex items-end cursor-pointer justify-start"
          onClick={() => handleZoom()}
        >
          <img src={xSvg} alt="close" className="w-12 h-12" />
        </div>
        <a
          href={image[imageIndex].url}
          download
          className="fixed z-20 bottom-4 right-0 h-16 w-16 flex items-end cursor-pointer justify-start"
        >
          <img src={fileDownloadSvg} alt="download" className="w-12 h-12" />
        </a>
        <div className="fixed z-10 top-0 right-0 h-full w-16 flex items-center justify-start">
          <img
            src={ARightSvg}
            alt="close"
            className="w-12 h-12 cursor-pointer backdrop-blur-lg"
            onClick={() => nextImage()}
          />
        </div>
        <div className="fixed z-10 top-0 left-0 h-full w-16 flex items-center justify-end">
          <img
            src={ALeftSvg}
            alt="close"
            className="w-12 h-12 cursor-pointer backdrop-blur-lg"
            onClick={() => prevImage()}
          />
        </div>
        <div className="absolute bottom-4 flex justify-center right-0 left-0">
          <p className="bg-n-8/80 text-center body-1 py-2 px-8">
            {image[imageIndex].title}
          </p>
        </div>
      </div>
    </>
  );

  const prevImage = () => {
    const isFirstImage = imageIndex === 0;
    const newImageIndex = isFirstImage ? image.length - 1 : imageIndex - 1;
    setImageIndex(newImageIndex);
  };
  const nextImage = () => {
    const isLastImage = imageIndex === image.length - 1;
    const newImageIndex = isLastImage ? 0 : imageIndex + 1;
    setImageIndex(newImageIndex);
  };

  return (
    <>
      <Section className={className}>
        <Heading
          title="Picture"
          span="Highlights"
          tag="Visualy watch in our school by"
        />
        <div className="container grid md:grid-cols-2">
          {image.map((item, itemIndex) => (
            <div className="relative flex lg:h-[20rem] w-full" key={itemIndex}>
              <img
                className="h-full w-full object-cover cursor-pointer object-center"
                src={item.url}
                onClick={() => {
                  setToggleZoom(true);
                  setImageIndex(itemIndex);
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 flex justify-center h-8">
                <img
                  src={eyeSvg}
                  alt="Zoom"
                  className="h-full py-1 px-3 rounded-md border bg-n-8/90 hover:bg-color-1 border-color-1"
                  onClick={() => {
                    setToggleZoom(true);
                    setImageIndex(itemIndex);
                  }}
                />
              </div>
              <p className="absolute bottom-4 right-0 left-0 bg-n-8/80 text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </Section>
      {toggleZoom && zoomContent}
    </>
  );
};

export default NewsPictureHighlight;
