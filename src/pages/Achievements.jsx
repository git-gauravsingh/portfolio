import AchievementCard from "../components/AchievementCard";

function Achievements() {

  const achievements = [

    {
      title: "Smart India Hackathon 2025",
      desc: "Achieved Top 5 position at college level for developing an AI-powered mental health support platform.",
    },

    {
      title: "Technical Head — PRAKRIDA'26",
      desc: "Led technical operations, registrations, and coordination for BIT Patna’s annual sports fest.",
    },

    {
      title: "BYJU'S Discovery League Topper",
      desc: "Achieved school topper position in BYJU'S Discovery School Super League at JNV Ernakulam.",
    },
    
    {
      title: "Class Representative",
      desc: "Represented students of the CSE department and actively coordinated academic and extracurricular activities.",
    },

    {
      title: "Regional Basketball Player",
      desc: "Represented regional basketball teams multiple times with strong performance and leadership.",
    },

    {
      title: "BGMI Champion 2025",
      desc: "Won college-level BGMI championship demonstrating teamwork and strategic thinking.",
    },

    {
      title: "Academic Excellence",
      desc: "Achieved excellent academic performance throughout school and engineering journey.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-20">

      {/* Heading */}
      <div className="mb-16">

        <p className="text-lime-400 text-lg mb-3">
          Recognition & Success
        </p>

        <h1 className="text-5xl font-extrabold">
          My <span className="text-lime-400">Achievements</span>
        </h1>

      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10">

        {achievements.map((item, index) => (
          <AchievementCard
            key={index}
            title={item.title}
            desc={item.desc}
          />
        ))}

      </div>

    </section>
  );
}

export default Achievements;