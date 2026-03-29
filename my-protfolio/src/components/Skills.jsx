function Skills() {

    return (
        <section id="skills">
            <div >
                <div className="m-10" >
                    <h1 className="font-bold text-center text-4xl">Technical Skills</h1>
                </div>
                <div className="grid grid-cols-2 gap-5 m-20">
                    <div className="border border-gray-600 rounded-2xl p-2">
                        <div>
                            <h1>Programming Languages</h1>
                        </div>


                        <div className="w-120 h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 my-4"></div>

                        <div className="flex gap-2">
                            <h5>Javascript</h5>
                            <h5>Typescript</h5>
                            <h5>SQL</h5>
                        </div>



                    </div>
                    <div className="border border-gray-600 rounded-2xl p-2">
                        <h1>Backend Technologies</h1>
                    </div>
                    <div className="border border-gray-600 rounded-2xl p-2">
                        <h1>Frontend Technologies</h1>
                    </div>
                    <div className="border border-gray-600 rounded-2xl p-2">
                        <h1>Developer Tools</h1>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default Skills;