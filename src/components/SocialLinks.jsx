import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedInn <FaLinkedin size={33} className="ml-2"/>
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={33} className="ml-8"/>
        </>
      ),
      href: "https://github.com",
      style: "rounded-tr-md ml-2",
    },

    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={32} className="ml-12" />
        </>
      ),
      href: "mailto:example@gmail.com",
      style: "rounded-tr",
    },

    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={32} className="ml-5"/>
        </>
      ),
    },
  ];
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id, child, href, style, download}) => (
          <li key={id} className={"flex justifu-between items-center w-40 h-14 px-6   ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +"" + style}>
            <a
              href={href}
              className="flex justify-center items-center  w-full  text-white  "
            >
              {child }
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
