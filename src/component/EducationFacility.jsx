import { memo, useContext, useState } from "react";
import { fileDownloadSvg, penSvg, WhiteADoubleRightSvg, xSvg } from "../assets";
import Button from "./designs/Button";
import Heading from "./designs/Heading";
import Section from "./designs/Section";
import { AppContext } from "../App";
import { Academics } from "./Constants";

const EducationFacility = ({ className }) => {
  const [downloadIndex, setDownloadIndex] = useState(2);
  const [toggleDownload, setToggleDownload] = useState(false);

  window.onscroll = () => setToggleDownload(false);

  return (
    <Section className={className}>
      <div
        className={`${
          toggleDownload ? "fixed" : "hidden"
        } inset-0 bg-color-5/80 z-[100] flex items-center justify-center`}
      >
        <div
          className="fixed z-20 top-0 right-0 h-16 w-16 flex items-end cursor-pointer justify-start"
          onClick={() => setToggleDownload(false)}
        >
          <img src={xSvg} alt="close" className="w-12 h-12" />
        </div>
        <div
          className={`${downloadIndex > 2 ? "" : "hidden"} ${
            downloadIndex % 2 === 0 ? "hidden" : ""
          } border md:w-[70%] w-full md:h-full h-max py-8 bg-color-5 flex flex-col items-center overflow-y-scroll`}
        >
          <h1 className="h1">{Academics[downloadIndex].title}</h1>
          <div className="grid grid-cols-2 gap-4">
            <li>
              <h4 className="md:h4 h6 pt-4">Mathematics</h4>
              <div>
                <a
                  href="#"
                  download={Academics[downloadIndex].MathBookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <span className="flex items-center gap-2 border-b">
                      <img src={fileDownloadSvg} className="w-3" />
                      Download Book
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  download={Academics[downloadIndex].MathSylabuskLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <span className="flex items-center gap-2 border-b">
                      <img src={fileDownloadSvg} className="w-3" />
                      Download Sylabus
                    </span>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <h4 className="md:h4 h6 pt-4">Computer Science</h4>
              <div>
                <a
                  href="#"
                  download={Academics[downloadIndex].ComputerBookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <span className="flex items-center gap-2 border-b">
                      <img src={fileDownloadSvg} className="w-3" />
                      Download Book
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  download={Academics[downloadIndex].ComputerSylabusLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <span className="flex items-center gap-2 border-b">
                      <img src={fileDownloadSvg} className="w-3" />
                      Download Sylabus
                    </span>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <h4 className="md:h4 h6 pt-4">Economics</h4>
              <div>
                <a
                  href="#"
                  download={Academics[downloadIndex].EconomicsBookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <span className="flex items-center gap-2 border-b">
                      <img src={fileDownloadSvg} className="w-3" />
                      Download Book
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  download={Academics[downloadIndex].EconomicsSylabusLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <span className="flex items-center gap-2 border-b">
                      <img src={fileDownloadSvg} className="w-3" />
                      Download Sylabus
                    </span>
                  </div>
                </a>
              </div>
            </li>
          </div>
        </div>

        <div
          className={`${downloadIndex > 2 ? "" : "hidden"} ${
            downloadIndex % 2 === 1 ? "hidden" : ""
          } border md:w-[70%] w-full md:h-full h-max py-8 bg-color-5 flex flex-col items-center overflow-y-scroll`}
        >
          <h1 className="h1">{Academics[downloadIndex].title}</h1>
          <div className="grid grid-cols-2 gap-4">
            <li>
              <h4 className="md:h4 h6 pt-4">Kinyarwanda</h4>
              <div>
                <a
                  href="#"
                  download={Academics[downloadIndex].kinyarwandaBookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <span className="flex items-center gap-2 border-b">
                      <img src={fileDownloadSvg} className="w-3" />
                      Download Book
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  download={Academics[downloadIndex].kinyarwandaSylabusLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <span className="flex items-center gap-2 border-b">
                      <img src={fileDownloadSvg} className="w-3" />
                      Download Sylabus
                    </span>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <h4 className="md:h4 h6 pt-4">French</h4>
              <div>
                <a
                  href="#"
                  download={Academics[downloadIndex].FrenchBookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <span className="flex items-center gap-2 border-b">
                      <img src={fileDownloadSvg} className="w-3" />
                      Download Book
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  download={Academics[downloadIndex].FrenchSylabusLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <span className="flex items-center gap-2 border-b">
                      <img src={fileDownloadSvg} className="w-3" />
                      Download Sylabus
                    </span>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <h4 className="md:h4 h6 pt-4">Literature in English</h4>
              <div>
                <a
                  href="#"
                  download={Academics[downloadIndex].LiteratureBookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <span className="flex items-center gap-2 border-b">
                      <img src={fileDownloadSvg} className="w-3" />
                      Download Book
                    </span>
                  </div>
                </a>
                <a
                  href="#"
                  download={Academics[downloadIndex].LiteratureSylabuskLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <span className="flex items-center gap-2 border-b">
                      <img src={fileDownloadSvg} className="w-3" />
                      Download Sylabus
                    </span>
                  </div>
                </a>
              </div>
            </li>
          </div>
        </div>

        {downloadIndex < 3 && (
          <div
            className={` border md:w-[70%] w-full md:h-full md:top-8 bottom-8 h-max py-8 bg-color-5 flex flex-col items-center overflow-y-scroll`}
          >
            <h1 className="h1">{Academics[downloadIndex].title}</h1>
            <div className="grid grid-cols-2 gap-4">
              <li>
                <h4 className="md:h4 h6 pt-4">Mathematics</h4>
                <div>
                  <a
                    href="#"
                    download={Academics[downloadIndex].MathBookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Book
                      </span>
                    </div>
                  </a>
                  <a
                    href="#"
                    download={Academics[downloadIndex].MathSylabuskLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Sylabus
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <h4 className="md:h4 h6 pt-4">Chemistry</h4>
                <div>
                  <a
                    href="#"
                    download={Academics[downloadIndex].ChemBookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Book
                      </span>
                    </div>
                  </a>
                  <a
                    href="#"
                    download={Academics[downloadIndex].ChemSylabusLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Sylabus
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <h4 className="md:h4 h6 pt-4">Biology</h4>
                <div>
                  <a
                    href="#"
                    download={Academics[downloadIndex].BioBookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Book
                      </span>
                    </div>
                  </a>
                  <a
                    href="#"
                    download={Academics[downloadIndex].BioSylabusLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Sylabus
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <h4 className="md:h4 h6 pt-4">Physics</h4>
                <div>
                  <a
                    href="#"
                    download={Academics[downloadIndex].PhysicsBookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Book
                      </span>
                    </div>
                  </a>
                  <a
                    href="#"
                    download={Academics[downloadIndex].PhysicsSylabuskLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Sylabus
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <h4 className="md:h4 h6 pt-4">Entreprenuership</h4>
                <div>
                  <a
                    href="#"
                    download={Academics[downloadIndex].EntBookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Book
                      </span>
                    </div>
                  </a>
                  <a
                    href="#"
                    download={Academics[downloadIndex].EntSylabuskLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Sylabus
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <h4 className="md:h4 h6 pt-4">Kinyarwanda</h4>
                <div>
                  <a
                    href="#"
                    download={Academics[downloadIndex].KinyarwandaBookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Book
                      </span>
                    </div>
                  </a>
                  <a
                    href="#"
                    download={Academics[downloadIndex].KinyarwandaSylabuskLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Sylabus
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <h4 className="md:h4 h6 pt-4">Geography</h4>
                <div>
                  <a
                    href="#"
                    download={Academics[downloadIndex].GeoBookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Book
                      </span>
                    </div>
                  </a>
                  <a
                    href="#"
                    download={Academics[downloadIndex].GeoSylabuskLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Sylabus
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <h4 className="md:h4 h6 pt-4">History</h4>
                <div>
                  <a
                    href="#"
                    download={Academics[downloadIndex].HistoryBookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Book
                      </span>
                    </div>
                  </a>
                  <a
                    href="#"
                    download={Academics[downloadIndex].HistorySylabuskLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Sylabus
                      </span>
                    </div>
                  </a>
                </div>
              </li>
              <li>
                <h4 className="md:h4 h6 pt-4">History</h4>
                <div>
                  <a
                    href="#"
                    download={Academics[downloadIndex].EnglishBookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Book
                      </span>
                    </div>
                  </a>
                  <a
                    href="#"
                    download={Academics[downloadIndex].EnglishSylabuskLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <span className="flex items-center gap-2 border-b">
                        <img src={fileDownloadSvg} className="w-3" />
                        Download Sylabus
                      </span>
                    </div>
                  </a>
                </div>
              </li>
            </div>
          </div>
        )}
      </div>

      <Heading
        title="Keep"
        span="Studying"
        text="Download Books & Sylabuses of your respective class to help you. Good Luck !"
      />

      <h2 className="h2 border w-full text-center bg-n-1/50">
        Downloads & Learn
      </h2>
      {Academics.map((item, index) => (
        <div
          className="grid md:grid-cols-2 w-full border relative max-md:grid-rows-2"
          key={index}
        >
          <div className={`h5 p-8 max-md:p-4 flex items-center gap-4 `}>
            <img className="h-4" src={penSvg} />
            {item.title}
          </div>

          <div className="h-full w-full pl-4 flex items-center">
            <Button
              onClick={() => {
                setDownloadIndex(item.id);
                setToggleDownload(true);
              }}
            >
              <img src={WhiteADoubleRightSvg} className="h-6" />
              Choose
            </Button>
          </div>
        </div>
      ))}
    </Section>
  );
};

export default EducationFacility;
