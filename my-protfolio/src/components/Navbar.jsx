import { FaSun, FaMoon } from "react-icons/fa";


function Navbar({ isDark, setIsDark }) {
    const linkHover = isDark ? "hover:text-green-500" : "hover:text-blue-500";
    const buttonHover = isDark ? "hover:bg-green-500 hover:text-white" : "hover:bg-blue-500 hover:text-white"
    const items = ["about", "experience", "projects", "education", "contact"];
    return (
        <header>
          
            <nav className=" fixed top-0 w-full flex justify-between items-center px-6 py-4 font-sans bg-transparent backdrop-blur-md z-50">
                {/* Name / Logo */}
                <a className={`ml-20 font-bold text-lg transition-colors duration-300  ${linkHover}`}>
                    Saranginath Tk
                </a>

               
                <ul className="mr-20 flex gap-10 font-thin items-center">
                    {items.map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item}`} className={`transition-colors duration-300 ${linkHover}`}>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>

                        </li>
                    ))}
                   
                    <li>
                        <a
                            href="https://drive.google.com/file/d/1lXLSgEjHguscDoZDhe2bDfaZXhmCn21G/view"
                            target="_self"
                            rel="noopener noreferrer"
                            className={`px-3 py-1 border border-gray-500 rounded  transition-colors ${buttonHover}`}
                        >
                            Resume
                        </a>
                    </li>

                  
                    <li>
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-2 border border-gray-500 rounded flex items-center justify-center hover:bg-linear-to-r from-pink-500 via-purple-500 to-orange-500  "
                        >
                            {isDark ? <FaSun /> : <FaMoon />}
                        </button>
                    </li>
                </ul>
            </nav>

            {/* Horizontal line under navbar */}
            <div className="fixed top-16 w-full h-px bg-gray-500 dark:bg-gray-700 z-40"></div>
        </header>
    );
}

export default Navbar;