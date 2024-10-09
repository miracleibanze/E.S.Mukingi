import {
  children,
  childSvg,
  classView,
  computer,
  Cultural,
  fileSvg,
  homeSvg,
  languageSvg,
  laptopCodeSvg,
  newspaperSvg,
  phoneSvg,
  prayingSvg,
  schoolAttention,
  schoolBoys,
  schoolGate,
  usersSvg,
  S6ComputerScienceBook,
  S6ComputerScienceSylabus,
  S6EconomicsBook,
  S6MathBook,
  S6MathSylabus,
  facebookSvg,
  githubSvg,
  linkedInSvg,
  eyeSlash,
  DOD,
  DOS,
  headMaster,
  parental,
  assemble,
  refectory,
  S6Graduates,
  person1,
  schoolAttentionSmall,
  schoolBoysSmall,
  classViewSmall,
  school_gateSmall,
} from "../assets";

export const pages = [
  {
    id: "0",
    name: "Home",
    favSlide: 0,
    iconUrl: homeSvg,
    routerLink: "/",
  },
  {
    id: "1",
    name: "News&Events",
    favSlide: 1,
    iconUrl: newspaperSvg,
    routerLink: "/news&events/news",
  },
  {
    id: "2",
    name: "Education",
    favSlide: 2,
    iconUrl: usersSvg,
    routerLink: "/education/about-education",
  },
  {
    id: "3",
    name: "About",
    favSlide: 3,
    iconUrl: fileSvg,
    routerLink: "/about",
  },
  {
    id: "4",
    name: "Contact",
    favSlide: 0,
    iconUrl: phoneSvg,
    routerLink: "/contact",
  },
];

export const designerSacials = [
  {
    id: "0",
    name: "Github",
    iconUrl: githubSvg,
    linkUrl: "https://github.com/miracleibanze/",
  },
  {
    id: "0",
    name: "Facebook",
    iconUrl: facebookSvg,
    linkUrl: "https://facebook.com/MiracleCode/",
  },
  {
    id: "0",
    name: "LinkedIn",
    iconUrl: linkedInSvg,
    linkUrl: "https://www.linkedin.com/in/ibanze-miracle",
  },
];

export const slides = [
  {
    url: { img: schoolAttention, imgBg: schoolAttentionSmall },
    height: 6015,
    width: 3383,
  },
  {
    url: { img: schoolBoys, imgBg: schoolBoysSmall },
    height: 4970,
    width: 2796,
  },
  {
    url: { img: classView, imgBg: classViewSmall },
    height: 691,
    width: 390,
  },
  {
    url: { img: schoolGate, imgBg: school_gateSmall },
    height: 800,
    width: 553,
  },
];

export const activities = [
  {
    id: "0",
    name: "Hands-On Electronics",
    description:
      "In Computer Science, Students does not only engage in theory learning but also get to experience in practical knowledge like electronic disassembly.",
    imageUrl: eyeSlash,
  },
  {
    id: "1",
    name: "Laboratory activities",
    description:
      "In Ordinary, Students starts experimenting what they learn in sciences, the get chance to understand what they face in upcoming lessons.",
    imageUrl: eyeSlash,
  },
  {
    id: "2",
    name: "Community work",
    description:
      "As Mukingi Secondary school base on true Rwandan culture students are trained with the passion of national services, that our priority.",
    imageUrl: DOD,
  },
];

export const weHave = [
  {
    id: "0",
    name: "Learners",
    Number: "684",
  },
  {
    id: "1",
    name: "Teachers",
    Number: "45",
  },
  {
    id: "2",
    name: "Computer rooms",
    Number: "3",
  },
];

export const Highlights = [
  {
    url: parental,
    caption: "In Meeting with parents",
    Date: "12 June, 2024",
  },
  {
    url: assemble,
    caption: "Preparing to go for upcoming 'ITORERO' Festival",
    Date: "02 February, 2024",
  },
  {
    url: refectory,
    caption:
      "Following the notification from Director Of Displine about Lunch time ",
    Date: "24 june, 2024",
  },
  {
    url: S6Graduates,
    caption: "Students who have just finished their studies in Senior Six",
    Date: "31 August, 2024",
  },
];
export const goToIndex = (index) => {
  setSlideIndex(index);
};

export const goUp = () => {
  window.scrollTo(top);
};

export const testimonies = [
  {
    id: "0",
    year: "Student, 2024",
    names: "IBANZE Miracle",
    avatar: person1,
    content:
      "I found that E.S Mukingi was the best in all aspect, When I got myself compared to other, I was proud of this school because I found I was the first, and now I am still the best thank to E.S Mukingi.",
  },
  {
    id: "1",
    year: "Student 2023",
    names: "MUGISHA Fabrice",
    avatar: eyeSlash,
    content:
      "When I remember how there was all I needed to prepare my future dreams, I can't hestate to send my relatives to get that too, I think it is the best for any child.",
  },
  {
    id: "2",
    year: "Student 2023",
    names: "ISHIMWE Emelyne",
    avatar: eyeSlash,
    content:
      "I am a business woman thanks to Mukingi secondary school in which I found opportunities to experience outdoor activities that equiped me with enhanced skills of this world, hope it's the choice you deserve.",
  },
  {
    id: "3",
    year: "Staff",
    names: "MUKAMANA Emerance",
    avatar: eyeSlash,
    content:
      "I like working on this school because there is always happy mood, care we give students keeps them friendly to us, this is the most thing I like on them as they turn out to be generous everyday more.",
  },
];
export const aboutParagraph =
  "Mukingi Secondary school is mixed (boys and girls) secondary school for quality education in advanced level and ordinary level, and its academic program is entirely based on Rwandan National Carriculum, also enhancing science and culture.";

export const iframes = [
  {
    title: "Itorero Activities",
    description:
      "We are testified by those who have experienced the ability and work at our school, uniqueness, Displine & intimidation for excellence.",
    iframeUrl: "https://www.youtube.com/embed/1xrVCQ8IblE",
  },
  {
    title: "Welcoming Visitors",
    description:
      "As culture is one of our priorities, here we have testimony from students who passed in hands about 2016, and they did experienced that as it is visible to anyone watching it.",
    iframeUrl: "https://www.youtube.com/embed/SfI2TNW79qI?si=Oze0YH0uTPjliek0",
  },
];

export const administration = [
  {
    name: "NSHIMYUMUREMYI Jérôme",
    title: "headMaster",
    email: "-----------@gmail.com",
    tel: "+250788870169",
    imgUrl: headMaster,
  },
  {
    name: "NDAYISABA Edison",
    title: "Director of Studies",
    email: "-----------@gmail.com",
    tel: "+2507*********",
    imgUrl: DOS,
  },
  {
    name: "NSHIMIYE Isaac",
    title: "Director of Discipline",
    email: "-----------@gmail.com",
    tel: "+250788591045 / 0728591046",
    imgUrl: DOD,
  },
  {
    name: "MUKANTAGANDA Sophie",
    title: "Bursar",
    email: "-----------@gmail.com",
    tel: "+2507*********",
    imgUrl: eyeSlash,
  },
  {
    name: "MUKASHYAKA Angelique",
    title: "headMaster",
    email: "-----------@gmail.com",
    tel: "+250726682169",
    imgUrl: eyeSlash,
  },
];

export const Academics = [
  {
    id: 0,
    title: "Senior 1",
    ChemBookLink: "#",
    ChemSylabusLink: "#",
    BioBookLink: "#",
    BioSylabusLink: "#",
    PhysicsBookLink: "#",
    PhysicsSylabuskLink: "#",
    MathBookLink: "#",
    MathSylabuskLink: "#",
    EntBookLink: "#",
    EntSylabuskLink: "#",
    KinyarwandaBookLink: "#",
    KinyarwandaSylabuskLink: "#",
    GeoBookLink: "#",
    GeoSylabuskLink: "#",
    HistoryBookLink: "#",
    HistorySylabuskLink: "#",
    EnglishBookLink: "#",
    EnglishSylabuskLink: "#",
  },
  {
    id: 1,
    title: "Senior 2",
    ChemBookLink: "#",
    ChemSylabusLink: "#",
    BioBookLink: "#",
    BioSylabusLink: "#",
    PhysicsBookLink: "#",
    PhysicsSylabuskLink: "#",
    MathBookLink: "#",
    MathSylabuskLink: "#",
    EntBookLink: "#",
    EntSylabuskLink: "#",
    KinyarwandaBookLink: "#",
    KinyarwandaSylabuskLink: "#",
    GeoBookLink: "#",
    GeoSylabuskLink: "#",
    HistoryBookLink: "#",
    HistorySylabuskLink: "#",
    EnglishBookLink: "#",
    EnglishSylabuskLink: "#",
  },
  {
    id: 2,
    title: "Senior 3",
    ChemBookLink: "#",
    ChemSylabusLink: "#",
    BioBookLink: "#",
    BioSylabusLink: "#",
    PhysicsBookLink: "#",
    PhysicsSylabuskLink: "#",
    MathBookLink: "#",
    MathSylabuskLink: "#",
    EntBookLink: "#",
    EntSylabuskLink: "#",
    KinyarwandaBookLink: "#",
    KinyarwandaSylabuskLink: "#",
    GeoBookLink: "#",
    GeoSylabuskLink: "#",
    HistoryBookLink: "#",
    HistorySylabuskLink: "#",
    EnglishBookLink: "#",
    EnglishSylabuskLink: "#",
  },
  {
    id: 3,
    title: "Senior 4 MCE",
    ComputerBookLink: "#",
    ComputerSylabusLink: "#",
    EconomicsBookLink: "#",
    EconomicsSylabusLink: "#",
    MathBookLink: "#",
    MathSylabuskLink: "#",
  },
  {
    id: 4,
    title: "Senior 4 LFK",
    kinyarwandaBookLink: "#",
    kinyarwandaSylabusLink: "#",
    FrenchBookLink: "#",
    FrenchSylabusLink: "#",
    LiteratureBookLink: "#",
    LiteratureSylabuskLink: "#",
  },
  {
    id: 5,
    title: "Senior 5 MCE",
    ComputerBookLink: "#",
    ComputerSylabusLink: "#",
    EconomicsBookLink: "#",
    EconomicsSylabusLink: "#",
    MathBookLink: "#",
    MathSylabuskLink: "#",
  },
  {
    id: 6,
    title: "Senior 5 LFK",
    kinyarwandaBookLink: "#",
    kinyarwandaSylabusLink: "#",
    FrenchBookLink: "#",
    FrenchSylabusLink: "#",
    LiteratureBookLink: "#",
    LiteratureSylabuskLink: "#",
  },
  {
    id: 7,
    title: "Senior 6 MCE",
    ComputerBookLink: S6ComputerScienceBook,
    ComputerSylabusLink: S6ComputerScienceSylabus,
    EconomicsBookLink: S6EconomicsBook,
    EconomicsSylabusLink: "#",
    MathBookLink: S6MathBook,
    MathSylabuskLink: S6MathSylabus,
  },
  {
    id: 8,
    title: "Senior 6 LFK",
    kinyarwandaBookLink: "#",
    kinyarwandaSylabusLink: "#",
    FrenchBookLink: "#",
    FrenchSylabusLink: "#",
    LiteratureBookLink: "#",
    LiteratureSylabuskLink: "#",
  },
];
