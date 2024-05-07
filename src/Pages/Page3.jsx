/*
full -> full Stack Apps
front -> Front End Apps
xi -> ui/ux
*/

import { useState } from "react";

const PROJECTS = [
  {
    tittle: "The Wild Oasis",
    description:
      "This project simplifies internal hotel operations by providing a user-friendly platform for staff members. With this system, staff can efficiently manage guest check-in/out, breakfast options, room bookings, and other hotel-related tasks. By centralizing these functions, the project enhances staff productivity and ensures a seamless experience for both employees and guests",
    tech_stack: ["react , react-router , context-API , supabase, react-charts"],
    deployment_link: "https://the-wild-oasis-ashen-alpha.vercel.app/",
    github_link: "https://github.com/16gsanket/the-wild-oasis",
    type: "full",
  },
  {
    tittle: "Property Broker",
    description:
      "The Property Broker App offers a streamlined solution for real estate agencies, digitizing their operations and enhancing customer convenience. Designed to simplify property searches, this user-friendly app provides easy access to listings, revolutionizing the way clients find their ideal properties.",
    tech_stack: [
      "react",
      "react-router@6",
      "React Hook Form",
      "React Redux Toolkit",
      "supabase",
      "react-charts",
    ],
    deployment_link: "https://property-broker-one.vercel.app/",
    github_link: "https://github.com/16gsanket/PropertyBroker",
    type: "full",
  },
  {
    tittle: "Fast React Pizza Co",
    description:
      "A Application Catering to the business need of the Pizza Company , for the users to order pizza where we already have a ready made API",
    tech_stack: ["react", "react-router", "React Redux Toolkit,"],
    deployment_link: "https://fast-react-pizza-gules.vercel.app/",
    github_link: "https://github.com/16gsanket/fast-react-pizza",
    type: "front",
  },
  {
    tittle: "World Wise App",
    description:
      "A Application for keeping a track of the location where you go .. bifercating your locations into cities and countries",
    tech_stack: ["react", "react-router"],
    deployment_link: "https://world-wide-delta.vercel.app/",
    github_link: "https://github.com/16gsanket/WorldWide",
    type: "front",
  },
  // https://snlet.github.io/SpainCollectionClone/
  {
    tittle: "Spain Collection",
    description: "A travel website for the advertisment of Spain ",
    tech_stack: ["html", "css", "javascript", "GSAP", "Scroll-Trigger"],
    deployment_link: "https://snlet.github.io/SpainCollectionClone/",
    github_link: "https://github.com/Snlet/SpainCollectionClone/",
    type: "xi",
  },
  {
    tittle: "Wednesday",
    description: "A travel website for the advertisment of Spain ",
    tech_stack: ["html", "css", "javascript", "GSAP", "Scroll-Trigger"],
    deployment_link: "https://snlet.github.io/Wednesday/",
    github_link: "https://github.com/Snlet/Wednesday/",
    type: "xi",
  },
];

function Page3() {
  const [typeHolder, setTypeHolder] = useState("all");

  let filtered_list = [];

  if (typeHolder === "all") filtered_list = PROJECTS;

  if (typeHolder === "full") {
    filtered_list = PROJECTS.filter((project) => project.type === "full");
  }
  if (typeHolder === "front") {
    filtered_list = PROJECTS.filter((project) => project.type === "front");
  }
  if (typeHolder === "xi") {
    filtered_list = PROJECTS.filter((project) => project.type === "xi");
  }

  console.log(filtered_list);

  return (
    <div className="h-[120dvh] w-full bg-bk_black flex flex-col gap-2 align-middle justify-around items-center ">
      <div className="w-8/12 h-fit py -5  text-center flex flex-col gap-4">
        <h2 className="text-md text-orange_text font-semibold tracking-wider ">
          PORTFOLIO
        </h2>
        <p className="text-2xl text-text_color font-bold tracking-wide ">
          My Masterpiece Collection
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupida non
          proident, sunt in culpa qui officia
        </p>
      </div>
      <div className="h-4/6 w-10/12  flex flex-col gap-10">
        <div className="h-1/6 w-full text-senter p-2">
          <ul className=" flex align-middle justify-center items-center">
            <button
              className="sections font-bold"
              onClick={() => setTypeHolder("all")}
            >
              ALL
            </button>
            <button
              className="sections font-bold"
              onClick={() => setTypeHolder("front")}
            >
              FRONTEND <br /> DEVELOPMENT
            </button>
            <button
              className="sections font-bold"
              onClick={() => setTypeHolder("full")}
            >
              BACKEND <br /> DEVELOPMENT
            </button>
            <button
              className="sections font-bold"
              onClick={() => setTypeHolder("xi")}
            >
              UI/UX
            </button>
          </ul>
        </div>
        <div className="h-5/6 w-full bg-green-400"></div>
      </div>
    </div>
  );
}

export default Page3;
