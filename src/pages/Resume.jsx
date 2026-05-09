function Resume() {
  return (
    <section className="max-w-7xl mx-auto py-20">

      {/* Heading */}
      <div className="mb-16">

        <p className="text-lime-400 text-lg mb-3">
          Professional Profile
        </p>

        <h1 className="text-5xl font-extrabold">
          My <span className="text-lime-400">Resume</span>
        </h1>

      </div>

      {/* Main Resume Card */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl">

        {/* Top Info */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-14">

          <div>

            <h2 className="text-4xl font-bold mb-4">
              Gaurav Kumar Singh
            </h2>

            <p className="text-gray-400 text-lg leading-8">
              Bachelor of Technology <br /> Computer Science & Engineering <br />
              Birla Institute of Technology, Mesra
            </p>

          </div>

          <div className="text-gray-400 leading-8">

            <p>📞 +91-6394736226</p>
            <p>
              📧{" "}
              <a
                href="mailto:gksinghh77@gmail.com"
                className="hover:text-lime-400 transition duration-300"
              >
                gksinghh77@gmail.com
              </a>
            </p>

            <p>
              💻{" "}
              <a
                href="https://github.com/git-gauravsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-400 transition duration-300"
              >
                GitHub
              </a>
            </p>

            <p>
              🔗{" "}
              <a
                href="https://www.linkedin.com/in/linked-gauravsingh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-lime-400 transition duration-300"
              >
                LinkedIn
              </a>
            </p>

          </div>

        </div>

        {/* Education */}
        <div className="mb-14">

          <h3 className="text-3xl font-bold text-lime-400 mb-8">
            Education
          </h3>

          <div className="space-y-6">

            <div className="border-l-2 border-lime-400 pl-6">

              <h4 className="text-2xl font-semibold">
                Bachelor of Technology <span className="text-gray-400 text-lg leading-8">
              <br /> Computer Science & Engineering </span>
              </h4>

              <p className="text-gray-400">
                Birla Institute of Technology, Mesra
              </p>

              <p className="text-lime-400 mt-2">
                SGPA: 8.94
              </p>

            </div>

            <div className="border-l-2 border-zinc-700 pl-6">

              <h4 className="text-xl font-semibold">
                CBSE XII
              </h4>

              <p className="text-gray-400">
                Jawahar Navodaya Vidyalaya, Ballia <br />Percentage: 85.8
              </p>

            </div>

            <div className="border-l-2 border-zinc-700 pl-6">

              <h4 className="text-xl font-semibold">
                CBSE X
              </h4>

              <p className="text-gray-400">
                Jawahar Navodaya Vidyalaya, Ballia <br />Percentage: 93.6
              </p>

            </div>

          </div>

        </div>

        {/* Experience */}
        <div className="mb-14">

          <h3 className="text-3xl font-bold text-lime-400 mb-8">
            Experience
          </h3>

          <div className="bg-black rounded-2xl p-8 border border-zinc-800">

            <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">

              <div>

                <h4 className="text-2xl font-semibold">
                  Technical Head — Prakrida’26
                </h4>

                <p className="text-gray-400">
                  Inter-College Sports Meet
                </p>

              </div>

              <p className="text-lime-400">
                March 2026
              </p>

            </div>

            <ul className="text-gray-400 space-y-3 list-disc ml-6">

              <li>Led the technical team for inter-college sports fest</li>
              <li>Managed registrations and technical operations</li>
              <li>Coordinated event execution with multiple teams</li>

            </ul>

          </div>

        </div>

        {/* Projects */}
        <div className="mb-14">

          <h3 className="text-3xl font-bold text-lime-400 mb-8">
            Projects
          </h3>

          <div className="space-y-8">

            {/* Project 1 */}
            <div className="bg-black rounded-2xl p-8 border border-zinc-800">

              <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">

                <h4 className="text-2xl font-semibold">
                  MANO-MITRA
                </h4>

                <p className="text-lime-400">
                  August 2025
                </p>

              </div>

              <p className="text-gray-400 leading-8">
                AI-based mental health monitoring platform with NLP chatbot,
                sentiment analysis, and Google Fit integration for stress prediction.
              </p>

            </div>

            {/* Project 2 */}
            <div className="bg-black rounded-2xl p-8 border border-zinc-800">

              <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-4">

                <h4 className="text-2xl font-semibold">
                  MedCare
                </h4>

                <p className="text-lime-400">
                  January 2026
                </p>

              </div>

              <p className="text-gray-400 leading-8">
                Multi-page healthcare platform with doctor finder,
                symptom checker, medicine store, authentication,
                and responsive dark-themed UI.
              </p>

            </div>

          </div>

        </div>

        {/* Skills */}
        <div className="mb-14">

          <h3 className="text-3xl font-bold text-lime-400 mb-8">
            Technical Skills
          </h3>

          <div className="flex flex-wrap gap-4">

            {[
              "C/C++",
              "DSA",
              "Object Oriented Programming",
              "Java",
              "Python",
              "React",
              "JavaScript",
              "HTML",
              "CSS",
              "Git",
              "GitHub",
              "Docker",
              "Linux",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-black border border-zinc-700 px-5 py-2 rounded-full text-lime-400"
              >
                {skill}
              </span>
            ))}

          </div>

        </div>

        {/* Achievements */}
        <div className="mb-14">

          <h3 className="text-3xl font-bold text-lime-400 mb-8">
            Achievements
          </h3>

          <ul className="space-y-4 text-gray-400 leading-8">

            <li>🏆 Smart India Hackathon 2025 — Top 5 College Level</li>

            <li>👨‍💼 Technical Head — PRAKRIDA’26</li>

            <li>📚 BYJU'S Discovery School Super League Topper</li>

            <li>🏀 2-Time Regional Basketball Player</li>

            <li>🎮 College-level BGMI Tournament Winner</li>

          </ul>

        </div>

        {/* Download Resume */}
        <div className="text-center">

          <a
            href="/resume.pdf"
            download
            className="bg-lime-400 text-black px-10 py-4 rounded-2xl font-bold hover:scale-105 transition duration-300 shadow-lg inline-block"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}

export default Resume;