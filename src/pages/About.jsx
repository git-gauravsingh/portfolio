function About() {
    return (
        <section className="max-w-7xl mx-auto py-20">

            {/* Heading */}
            <div className="mb-16">
                <p className="text-lime-400 text-lg mb-3">
                    Know
                </p>

                <h1 className="text-5xl font-extrabold">
                    About <span className="text-lime-400">Me</span>
                </h1>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                {/* Image */}
                <div className="flex justify-center">

                    <div className="relative">

                        <div className="absolute inset-0 bg-lime-400 blur-3xl opacity-20 rounded-3xl"></div>

                        <img
                            src="/photo.png"
                            alt="about"
                            className="relative rounded-3xl w-full max-w-md border border-lime-400"
                        />

                    </div>

                </div>

                {/* Text Content */}
                <div>

                    <h2 className="text-3xl font-bold mb-6">
                        Computer Science Student, Developer & Tech Enthusiast
                    </h2>

                    <p className="text-gray-400 leading-8 mb-6">
                        I am a Computer Science and Engineering student at Birla Institute of Technology, Mesra
                        with strong interests in Web development, AI-powered applications,
                        and modern web technologies.
                    </p>

                    <p className="text-gray-400 leading-8 mb-6">
                        I enjoy building impactful digital products that combine clean UI,
                        responsive design, and practical real-world solutions using technologies
                        like React, JavaScript, and Node.js.
                    </p>

                    <p className="text-gray-400 leading-8 mb-10">
                        Apart from development, I actively participate in leadership,
                        technical event management, competitive sports, and innovation-driven
                        projects including Smart India Hackathon initiatives.
                    </p>

                    <p className="text-gray-400 leading-8 mb-6">
                        I am a passionate engineering student from Birla Institute of Technology, Mesra
                        with strong interests in frontend development,
                        UI/UX design, sports, and leadership.
                    </p>

                    <p className="text-gray-400 leading-8 mb-10">
                        I enjoy building modern, responsive, and futuristic
                        websites using React and Tailwind CSS while continuously
                        improving my technical and creative skills.
                    </p>

                    {/* Info Cards */}
                    <div className="grid sm:grid-cols-2 gap-6">

                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-lime-400 transition duration-300">

                            <h3 className="text-lime-400 text-xl font-bold mb-3">
                                Education
                            </h3>

                            <p className="text-gray-400">
                                Jawahar Navodaya Vidyalaya <br />
                                Birla Institute of Technology, Mesra<br />
                                Engineering Student
                            </p>

                        </div>

                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-lime-400 transition duration-300">

                            <h3 className="text-lime-400 text-xl font-bold mb-3">
                                Interests
                            </h3>

                            <p className="text-gray-400">
                                Web Development<br />
                                AI and Problem Solving<br />
                                Sports
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;