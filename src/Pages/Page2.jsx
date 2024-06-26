import React from "react";
import { CiPen, CiServer  } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
// import { CiServer } from "react-icons/ci";



const services = [
  { title: "Front End Development" ,icon:<FaReact /> ,projects: 6, experience: 2 ,  },
  { title: "Back End Development",icon:<CiServer />, projects: 2, experience: 1 },
  { title: "UI/UX Design",icon:<CiPen />, projects: 2, experience: 0.4 },

];

export default function () {
  return (
    <div className="h-[80dvh] w-full bg-page2_color flex flex-col align-middle justify-around items-center ">
      <div className="w-8/12 h-fit py -5  text-center flex flex-col gap-4">
        <h2 className="text-md text-orange_text font-semibold tracking-wider ">SERVICES</h2>
        <p className="text-2xl text-text_color font-bold tracking-wide ">What I am Great At</p>
        <p>
          I design  modern Website with modern UI designs for seamless UX , Developing Front End Application using dvance Library like <span className="text-blue-400">React.js</span> and Robust , Scalable Frameworks like Express.js , <span className="text-red-600">Node.js</span> , <span className="text-yellow-600">MongoDB</span> and <span className="text-green-700">Supabase</span> for BackEnd
        </p>
      </div>
      <div className="h-[40vh] w-11/12 flex align-middle justify-around gap-1 items-center">
        
        {services.map(service=>{
          return <div className="w-4/12 h-3/4 bg-bk_black flex flex-col align-middle justify-center text-center rounded-xl hover:text-orange_text" key={service.title}>
            <p className="text-2xl flex align-middle justify-center">
              {service.icon}
            </p>
            <h2 className="text-2xl">{service.title}</h2>
            <h2 className="text-lg">{service.projects} projects</h2>
          </div>
        
        })
      }



      </div>
    </div>
  );
}
