import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
function Footer() {
    return (
        <footer className="border-t border-gray-600 mt-12">
            <div className="max-2-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-100 pt-6">
                <div className="ml-20 space-y-2">
                    <h2 className="text-lg font-semibold ">Saranginath</h2>
                    <p className="text-sm max-w-md text-gray-500">
                        Software Engineer with a passion for creating innovative, scalable, and high-performance solutions.
                    </p>
                </div>
                <div className="text-center md:text-left">
                    <h3 className="font-bold">Links</h3>
                    <ul>
                        <li><a href="#about" className="font-thin">About</a></li>
                        <li><a href="#experience" className="font-thin">Experience</a></li>
                        <li ><a href="#projects" className="font-thin">Projects</a></li>
                        <li ><a href="#skills" className="font-thin">Skills</a></li>
                        <li ><a href="#contact" className="font-thin">Connect</a></li>

                    </ul>

                </div>
                <div>
                    <h3 className="text-lg font-bold mb-2">Connect</h3>
                    <div className="flex gap-4 text-4xl">
                        <a href="mailto:saranginath22@gmail.com"><FaEnvelope /></a>
                        <a href="https://www.linkedin.com/in/sarangi-nath/"><FaLinkedin /></a>
                        <a href="https://github.com/saranginath"><FaGithub /></a>
                    </div>
                </div>


            </div>
             
            <div className="mt-6  text-center text-sm border-t border-gray-400 pt-4 pb-4">
                &copy; 2026 Saranginath. All rights reserved.
            </div>
        </footer >
    )
}

export default Footer;