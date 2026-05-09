function ProjectCard({ title, desc, tech, live, github }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-lime-400 hover:-translate-y-2 transition duration-300 shadow-xl">

      {/* Top Image Area */}
      <div className="h-52 bg-gradient-to-br from-lime-400/20 to-black flex items-center justify-center">

        <h2 className="text-3xl font-bold text-lime-400">
          {title}
        </h2>

      </div>

      {/* Content */}
      <div className="p-6">

        <p className="text-gray-400 leading-7 mb-5">
          {desc}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-6">

          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-black border border-zinc-700 px-3 py-1 rounded-full text-sm text-lime-400"
            >
              {item}
            </span>
          ))}

        </div>

        {/* Buttons */}
        <div className="flex gap-4">

          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime-400 text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition duration-300"
          >
            Live Demo
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-lime-400 px-5 py-2 rounded-xl hover:bg-lime-400 hover:text-black transition duration-300"
          >
            GitHub
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;