import Heading from "./designs/Heading";
import Section from "./designs/Section";
import {
  WhiteLocationIcon,
  currentLocationArrow,
  emailSvg,
  homeSvg1,
  location,
  penSvg,
  phoneSvg,
  xSvg,
} from "./../assets";
import { memo, useState } from "react";
import Button from "./designs/Button";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Contact = () => {
  const [locationShow, setLocationShow] = useState(false);

  window.onscroll = () => {
    setLocationShow(false);
  };
  return (
    <>
      <Section>
        {locationShow && (
          <div className="fixed z-[100] inset-0 bg-color-5/90">
            <div className="relative w-full h-full flex items-center">
              <div
                className="fixed z-20 top-0 right-0 h-16 w-16 flex items-end cursor-pointer justify-start"
                onClick={() => setLocationShow(false)}
              >
                <img src={xSvg} alt="close" className="w-12 h-12" />
              </div>
              <div className="w-full h-auto">
                <img
                  className="w-full h-auto object-cover object-bottom"
                  src={location}
                />
              </div>
            </div>
          </div>
        )}
        <Heading title="Get in touch" span="with Us" className="mb-8" />
        <div className="w-full relative flex flex-wrap items-center justify-center md:flex-row px-8 flex-col ">
          <div className="md:w-[38%] m-full h-full p-8 flex flex-col justify-between gap-4 w-full ">
            <div>
              <p className="lg:h4 md:h5 h4">
                Physical <span className="text-color-1">Location</span>
              </p>
              <ul className="body-2">
                <li className="flex items-center gap-2 mb-4">
                  <img src={homeSvg1} alt="-" className="h-4" />
                  Rwanda, Southern province, Ruhango District, Byimana Sector,
                  Kamusenyi Cell
                </li>
                <button
                  className="py-1 flex gap-2 items-center hover:bg-color-1 hover:text-n-8 px-4 border hover:scale-[1.1] border-color-1 "
                  onClick={() => {
                    setLocationShow(true);
                  }}
                >
                  <img src={WhiteLocationIcon} className="h-4" />
                  See area
                </button>
              </ul>
            </div>
            <div>
              <div className="lg:h4 md:h5 h4">
                Phone <span className="text-color-1">Contact</span> :
              </div>
              <p className="body-2 flex items-center gap-2">
                <img src={phoneSvg} className="h-4" />
                +250788870169
              </p>
              <p className="body-2 flex items-center gap-2">
                <img src={phoneSvg} className="h-4" />
                +250788591045
              </p>
              <p className="body-2 flex items-center gap-2">
                <img src={phoneSvg} className="h-4" />
                +2507*******
              </p>
            </div>
            <div>
              <div className="body-1">Get Support :</div>
              <p className="body-2 flex items-center gap-2 -py-2">
                <img src={emailSvg} className="h-4" />
                esmikungi1996@yahoo.com
              </p>
            </div>
          </div>
          <div className="md:w-[60%] relative h-full group">
            <div className="group-hover:flex  bg-n-1 hidden absolute h-12 right-0 text-n-8 font-code rounded-t-md rounded-br-md">
              <div className="relative flex items-center h-full px-2 z-10">
                Not availble at the moment...
                <div className="absolute bg-n-1 left-0 h-6 -translate-y-4 w-4 top-full -skew-y-[45deg] -z-[1]"></div>
              </div>
            </div>
            <div className="w-full h-full rounded-3xl bg-color-1/20 p-8">
              <div className="grid pointer-events-none grid-cols-2 w-full gap-4">
                <div className="col-span-2">
                  <div className="h4 font-bold">Let's connect</div>
                  <p className="body-2">
                    fill the form and share with us your opinion, question,
                    suggestion or request to us.
                  </p>
                </div>
                <div className="bg-n-1 p-2 rounded-2xl">
                  <input
                    type="text"
                    name="names"
                    id="names"
                    placeholder="Your names"
                    className="w-full h-full py-4 px-2 outline-none bg-transparent text-n-8 "
                  />
                </div>
                <div className="bg-n-1 p-2 rounded-2xl">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full h-full py-4 px-2 outline-none bg-transparent text-n-8 "
                  />
                </div>
                <div className="rounded-2xl p-2 bg-n-1 col-span-2">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    className="h-full w-full bg-transparent outline-none text-n-8 py-4 px-2"
                  />
                </div>
                <div className="rounded-2xl p-2 bg-n-1 col-span-2">
                  <textarea
                    name="message"
                    id="message"
                    className="w-full min-h-[8rem] bg-transparent outline-none"
                    placeholder="How can we help you ..."
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <Button>Send message</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
