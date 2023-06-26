import React from "react";

import html from "../assets/images/1.png";
import css from "../assets/images/2.png";
import js from "../assets/images/3.png";
import bootstrap from "../assets/images/5.png";
import github from "../assets/images/4.png";
import react from "../assets/images/6.png";

function Experience() {
  

    const Techs = [
      {
        id: 1,
        src: html,
        title: "HTML",
        style: "shadow-orange-500",
      },

      {
        id: 2,
        src: css,
        title: "CSS",
        style: "shadow-blue-500",
      },

      {
        id: 3,
        src: js,
        title: "JS",
        style: "shadow-yellow-500",
      },

      {
        id: 4,
        src: bootstrap,
        title: "BootStrap",
        style: "shadow-purple-500",
      },

      {
        id: 5,
        src: react,
        title: "React",
        style: "shadow-blue-500",
      },

      {
        id: 6,
        src: github,
        title: "GitHub",
        style: "shadow-orange-500",
      },
    ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I'we worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 mb-20">
          {Techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                `shadow-md hover:scale-105 dueation-500 py-2 rounded-lg ${style} `
              }
            >
              <img src={src} alt="html" className="w-40 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
