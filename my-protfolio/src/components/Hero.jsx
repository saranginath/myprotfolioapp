import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import myImage from '../assets/saranginathcartoon.png';
import { motion } from 'framer-motion';
function Hero() {
    return (
        <section id="about" className="min-h-screen flex items-center px-6 ">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">

                <div>

                    <h2 className="text-3xl mt-20 md:text-4xl font-bold text-transparent bg-clip-text mb-7 bg-linear-to-r from-orange-400 via-white-500  to-green-500">
                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer",
                                2000,
                                "Software Engineer",
                                2000,
                            ]} wrapper="span" speed={50}
                            repeat={Infinity} />



                    </h2>

                    <div className=" text-lg tracking-wide text-gray-500">
                        <p> Hi there! 👋 I’m Sarangi Nath, a Full-Stack Developer with 6+ years of experience building scalable, high-performance applications using TypeScript, JavaScript, React, Tailwind CSS, Node.js, and cloud technologies.</p><br />

                        <p>I bring strong expertise in microservices architecture, RESTful API design, and distributed systems, with a focus on performance optimization, reliability, and high availability. I’ve successfully delivered robust, production-grade solutions that improve system efficiency and user experience. </p><br />

                        <p>I’m passionate about solving complex challenges in fast-paced, collaborative environments and continuously improving my skills to stay aligned with evolving technologies.</p><br />

                        <p> Let’s work together to build impactful, high-quality products that users will love!</p><br />

                    </div>
                </div>
                <div className="flex justify-center md:justify-end items-center mt-20">
                    <div className="relative rounded-2xl p-1 grid ">
                        <img src={myImage} alt="myportfolioimage" className="w-64 h-64 md:w-100 md:h-100 object-cover rounded-2xl border border-gray-300 shadow-lg hover:scale-105 transition-transform duration-300 " />
                        <ul className="flex  gap-6 text-2xl items-center justify-center pt-10  ">
                            <li className="border border-gray-800 rounded p-2 transition-transform duration-300 hover:scale-125 hover:text-green-800 cursor-pointer"> <a href="mailto:saranginath22@gmail.com"><FaEnvelope /></a></li>
                            <li className="border border-gray-800 border-gray-800rounded p-2 transition-transform duration-300 hover:scale-125 hover:text-green-800 cursor-pointer"> <a href="https://www.linkedin.com/in/sarangi-nath/"><FaLinkedin /></a></li>
                            <li className="border border-gray-800 rounded p-2 transition-transform duration-300 hover:scale-125 hover:text-green-800 cursor-pointer"><a href="https://github.com/saranginath"><FaGithub /></a></li>
                        </ul>
                    </div>
                </div>


            </div >

        </section >
    )
}
export default Hero;

