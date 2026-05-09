import ProjectCard from "../components/ProjectCard";

function Projects() {

  const projects = [
    {
      title: "MEDCARE",
      desc: "A healthcare recommendation platform with symptom analysis, best budget doctor, hospital and medicine suggestions, user authentication, and interactive multi-page experience.",
      tech: ["React", "Tailwind", "JavaScript"],
      live: "https://medcare-opal.vercel.app/",
      github: "https://github.com/git-gauravsingh/MEDCARE.git",
    },

    {
      title: "Mano-Mitra",
      desc: "A smart mental health monitoring platform that uses NLP, sentiment analysis, and fitness data integration to provide AI-driven emotional support, stress prediction, and real-time wellness assistance.",
      tech: ["React", "Tailwind", "Vite"],
      live: "https://mano-dun.vercel.app/",
      github: "https://github.com/git-gauravsingh/MANO-MITRA.git",

    },

    {
      title: "My Details",
      desc: "A modern multi-page portfolio website showcasing projects, achievements, resume, and technical skills with responsive design, interactive UI, downloadable resume support, and smooth user experience.",
      tech: ["React", "Tailwind", "Vite"],
      live: "portfolio-sepia-tau-27.vercel.app/",
      github: "https://github.com/git-gauravsingh/portfolio.git",

    },

    {
      title: "Tug of Knowledge",
      desc: "An interactive quiz platform that offers a large collection of questions based on different age groups, classes, categories, and difficulty levels. Users can compete against the system or challenge their friends in an engaging life-based gameplay mode where each wrong answer reduces one of the three available lives.The platform also allows users to upload their own question sheets for personalized practice sessions and custom quiz battles. With competitive gameplay and flexible question management, the system provides a fun and effective learning experience.",
      tech: ["In Progress"],
      /* live: "",
      github: "", */

    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20">

      {/* Heading */}
      <div className="mb-16">

        <p className="text-lime-400 text-lg mb-3">
          My Work
        </p>

        <h1 className="text-5xl font-extrabold">
          Featured <span className="text-lime-400">Projects</span>
        </h1>

      </div>

      {/* Projects Grid */}
      <div className="grid lg:grid-cols-3 gap-10">

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            desc={project.desc}
            tech={project.tech}
            live={project.live}
            github={project.github}
          />
        ))}

      </div>

    </section>
  );
}

export default Projects;
