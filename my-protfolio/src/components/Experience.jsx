import { infosysData, appMasteryData } from '../data/data';
import { motion } from 'framer-motion';
function Experience() {
    return (
        <section id="experience">
            <div>
                <div>
                    <h1 className="font-bold text-center text-4xl">Work Experience</h1>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <div className="flex flex-col justify-center items-center p-13 gap-10">
                        <div className='flex border border-gray-200 rounded-2xl shadow-2xs'>
                            <div className=" p-10  w-225 text-left " >
                                <h1 className='text-2xl font-bold'>Technology Analyst</h1>
                                <h4 className='text-teal-600'>Infosys Limited, Bangalore</h4>
                                <ul className='list-disc  font-thin text-gray-500 marker:text-purple-500'>
                                    {infosysData.map((data) => (
                                        <li className="" key={data}>{data}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='p-10'>
                                <h3 className='bg-gray-300 border border-gray-600 rounded-2xl p-2'>May 2022 – November 2025</h3>
                            </div>
                        </div>
                        <div className='border border-gray-200 rounded-2xl   text-left p-10 flex shadow-lg'>
                            <div className=" w-225 ">
                                <h1 className='font-bold text-2xl'>Backend Developer</h1>
                                <h4 className='text-teal-500'>App Mastery, Bangalore</h4>
                                <ul className='list-disc text-gray-500 font-thin marker:text-purple-500'>
                                    {
                                        appMasteryData.map((data) => (
                                            <li key={data}>{data}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div >
                                <h1 className="bg-gray-300 border border-gray-600 p-2 rounded-2xl">September 2019 – April 2022</h1>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </section>
    )
}
export default Experience;