import { useNavigate } from "react-router-dom";
function Home() {

    const navigate = useNavigate();
    return (
        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto gap-16">

            {/* Left Side */}
            <div className="flex-1">

                <p className="text-lime-400 text-lg mb-4">
                    Hello, I'm
                </p>

                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                    <span className="text-lime-400">Gaurav Kumar Singh</span>
                </h1>

                <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                    Engineering Student | Developer
                </h2>

                <p className="text-gray-400 leading-8 max-w-xl mb-8">
                    Computer Science student passionate about modern web development, AI-powered applications, problem solving, and creating impactful user-centric digital experiences.
                </p>

                <div className="flex gap-5 flex-wrap">

                    <a
                        href="/resume.pdf"
                        download
                        className="bg-lime-400 text-black px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300 inline-block"
                    >
                        Download Resume
                    </a>

                    <button
                        onClick={() => navigate("/contact")}
                        className="border border-lime-400 px-7 py-3 rounded-2xl hover:bg-lime-400 hover:text-black transition duration-300"
                    >
                        Contact Me
                    </button>

                </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 flex justify-center">

                <div className="relative">

                    <div className="absolute inset-0 bg-lime-400 blur-3xl opacity-30 rounded-full"></div>

                    <img
                        src="\photo.png"
                        alt="profile"
                        className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-lime-400 shadow-2xl"
                    />

                </div>

            </div>

        </section>
    );
}

export default Home;