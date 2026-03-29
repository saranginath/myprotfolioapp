function Education() {
    return (
        <section id="education">
            <div>
                <div>
                    <h1 className="text-4xl text-center font-bold">Education</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="border rounded-2xl border-gray-300 shadow-lg w-225 text-center mt-10 p-6">
                        <h2>Master of Computer Applications</h2>
                        <p className="font-thin text-1xl text-gray-500 font-sans">APJ Abdul Kalam Technological University, College of Engineering,
                            Kerala, India</p>
                        <h6>March 2019</h6>
                    </div>
                    <div className="border border-gray-300 shadow-lg   w-225 rounded-2xl text-center mt-10 p-6">
                        <h2>Bachelor of Computer Applications</h2>
                        <p className="font-thin text-1xl text-gray-500 font-sans">Kannur University, Chinmaya Arts and Science College for Womens, Kerala, India</p>
                        <h6>May 2017</h6>

                    </div>

                </div>
            </div>
        </section>
    )
}
export default Education;