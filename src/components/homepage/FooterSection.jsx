import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

const FooterSection = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // You can add logic here to trigger navigation based on certain conditions
  }, []);
  return (
    <footer className="bg-[#F7F7F7] dark:bg-gray-800 dark:text-gray-100 h-24 py-3 flex flex-col justify-between items-center font-sans">
      <ul className="flex justify-between items-center w-[450px] ">
        <li className="hover:text-primary cursor-pointer">
          <Link
            activeClass="active"
            to="template"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Template
          </Link>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <Link
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Features
          </Link>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <p>
        &copy; Copyright - {new Date().getFullYear()}
        <span className="text-primary font-medium"> Showcase</span>
      </p>
    </footer>
  );
};

export default FooterSection;
