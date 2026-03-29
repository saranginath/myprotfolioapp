import { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

function Navbar({ isDark, setIsDark }) {
  const [open, setOpen] = useState(false); // Mobile menu toggle
  const linkHover = isDark ? "hover:text-green-500" : "hover:text-blue-500";
  const buttonHover = isDark ? "hover:bg-green-500 hover:text-white" : "hover:bg-blue-500 hover:text-white";
  const items = ["about", "experience", "projects", "education", "contact"];

  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="flex justify-between items-center px-4 md:px-6 py-4 font-sans bg-transparent backdrop-blur-md">
        
        {/* Logo / Name */}
        <a className={`font-bold text-lg transition-colors duration-300 ${linkHover}`}>
          Saranginath Tk
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-thin items-center">
          {items.map(item => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`transition-colors duration-300 ${linkHover}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1lXLSgEjHguscDoZDhe2bDfaZXhmCn21G/view"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-1 border border-gray-500 rounded transition-colors ${buttonHover}`}
            >
              Resume
            </a>
          </li>
          <li>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 border border-gray-500 rounded flex items-center justify-center transition-colors duration-300"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 border border-gray-500 rounded flex items-center justify-center transition-colors duration-300"
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 border border-gray-500 rounded flex items-center justify-center"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col gap-4 mt-2 px-4 pb-4 md:hidden bg-white dark:bg-gray-900 shadow-md transition-all duration-300">
          {items.map(item => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`block py-2 transition-colors duration-300 ${linkHover}`}
                onClick={() => setOpen(false)} // close menu on click
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://drive.google.com/file/d/1lXLSgEjHguscDoZDhe2bDfaZXhmCn21G/view"
              target="_blank"
              rel="noopener noreferrer"
              className={`block px-3 py-2 border border-gray-500 rounded transition-colors ${buttonHover}`}
            >
              Resume
            </a>
          </li>
        </ul>
      )}

      {/* Horizontal line under navbar */}
      <div className="w-full h-px bg-gray-500 dark:bg-gray-700"></div>
    </header>
  );
}

export default Navbar;