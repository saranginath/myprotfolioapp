const projects = [
    { title: "E-commerce App", desc: "React + Node.js" },
    { title: "Food App", desc: "Microservices" },
];

function Projects() {
    return (
        <section id="projects">
            <div>
                <h1 className="font-bold text-4xl text-center ">Projects</h1>
            </div>
            <div className="flex gap-20 mt-10 ml-20 mr-20 mb-20">
                <div className="border shadow-lg border-gray-200 rounded-2xl p-2 flex flex-col">
                    <div>
                        <h1>AI travel plan</h1>
                        <h6 className="font-thin">Period: January 2026-March 2026</h6>
                        <ul className="list-disc p-6 text-gray-500 marker:text-purple-500">
                            <li>Designed and implemented user-friendly interfaces using React for seamless travel planning experience.</li>
                            <li>
                                Developed backend services using Node.js and Express to handle API requests and manage user sessions.
                            </li>
                            <li>
                                Implemented prompt engineering techniques to improve AI response accuracy and relevance.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border shadow-lg border-gray-200 rounded-2xl p-4">
                    <h1>ToDo List</h1>
                    <h6 className="font-thin">Period: April 2024-May 2024</h6>
                    <ul className="list-disc p-6 text-gray-500 marker:text-purple-500 ">
                        <li>Designed and implemented user-friendly interfaces using React to deliver a seamless user experience.</li>
                        <li>
                            Developed backend services using Node.js and Express to handle API requests and manage user sessions.
                        </li>
                        <li>
                            Utilized MongoDB for efficient storage and retrieval of user data and task history.
                        </li>
                    </ul>

                </div>
                <div className="border shadow-lg border-gray-200 rounded-2xl p-4">
                    <h1>Task Management System</h1>
                    <h6 className="font-thin">Period: January 2023-March 2024</h6>
                    <ul className="list-disc p-6 text-gray-500 marker:text-purple-500">
                        <li>Designed and implemented user-friendly interfaces using React for seamless travel planning experience.</li>
                        <li>
                            React, TypeScript, Express.js; improved collaboration by 30%.
                        </li>
                        <li>
                            Real-time updates with WebSocket.
                        </li>
                    </ul>

                </div>
            </div>

        </section>
    );
}
export default Projects;