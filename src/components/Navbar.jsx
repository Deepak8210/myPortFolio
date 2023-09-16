import { useState } from "react";
import { Link } from "react-scroll";
import resume from "../assets/resume.pdf";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuClick = () => {
    if (!isMenuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };
  return (
    <nav className=" border-b w-full md:px-4  lg:px-24 flex uppercase justify-between items-start p-2 md:items-center font-baijam top-0 left-0 z-10 bg-white">
      <div className="flex items-center gap-1">
        <i className="bx bx-edit-alt text-3xl text-primaryGreen"></i>
        <div className="flex flex-col -space-y-2 select-none">
          <span className="text-secondary">my</span>
          <span className="font-semibold text-primaryGreen tracking-widest">
            Portfolio
          </span>
        </div>
      </div>
      <div className="flex flex-col  text-right">
        <i
          className={`${
            isMenuOpen ? "bx bx-x" : "bx bx-menu"
          } md:hidden text-2xl mb-2 text-secondary`}
          onClick={menuClick}
        ></i>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8 md:space-y-0 space-y-4 p-0 uppercase text-xs tracking-[3px] font-semibold text-secondary select-none`}
        >
          <li>
            <a
              href="#"
              className=" cursor-pointer text-gray-500 hover:text-primaryGreen hover:scale-95 inline-block duration-200"
            >
              Home
            </a>
          </li>

          <li>
            <Link
              to="education"
              smooth={true}
              duration={500}
              className=" cursor-pointer hover:text-primaryGreen hover:scale-95 inline-block duration-200"
            >
              Education
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              duration={600}
              className="cursor-pointer hover:text-primaryGreen hover:scale-95 inline-block duration-200"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={700}
              className=" cursor-pointer hover:text-primaryGreen hover:scale-95 inline-block duration-200"
            >
              Contact
            </Link>
          </li>

          <li>
            <a
              href={resume}
              download
              smooth={"true"}
              duration={650}
              className="rounded-md cursor-pointer tracking-widest text-white hover:scale-95 inline-block duration-200 bg-primaryGreen p-2"
            >
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
