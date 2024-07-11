import { MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

export default function NavBarComponent() {
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleGetStartClick = () => {
    navigate("/register"); // Redirect to '/register' on Get Start click
  };

  const handleLoginClick = () => {
    navigate("/login"); // Redirect to '/login' on Login click
  };

  useEffect(() => {
    // You can add logic here to trigger navigation based on certain conditions
  }, []);
  return (
    <nav className="dark:bg-gray-900 dark:text-gray-100 fixed top-0 z-10 w-full drop-shadow-md font-sans">
      <div className="flex justify-between dark:bg-gray-900 bg-white items-center px-20 py-2">
        <Link
          activeClass="active"
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div className="flex justify-center items-center gap-4 cursor-pointer">
            <img
              width="30px"
              height="30px"
              src="logoHomepage.png"
              alt="logoHomepage"
            />
            <p className="text-xl font-semibold text-gray-700 dark:text-gray-100">Showcase</p>
          </div>
        </Link>
        <div>
          <ul className="flex justify-center items-center font-normal tracking-wider gap-7 w-40">
            <li className="hover:text-primary cursor-pointer font-medium">
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
            <li className="hover:text-primary cursor-pointer font-medium">
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
            <li className="hover:text-primary cursor-pointer font-medium">
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
            <li className="hover:text-primary cursor-pointer font-medium">
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
        </div>
        <div className="flex justify-center items-center gap-3">
          <MdDarkMode
            onClick={toggleDarkMode}
            className="w-7 h-7 hover:scale-110 transition-all cursor-pointer"
          />
          <button
            onClick={handleLoginClick}
            className="px-7 hover:text-white py-3 hover:bg-primary rounded-md"
          >
            Login
          </button>
          <button
            onClick={handleGetStartClick}
            className="px-7 bg-primary py-3 rounded-md text-white"
          >
            Get Start
          </button>
        </div>
      </div>
    </nav>
  );
}
