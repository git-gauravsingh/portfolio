function AchievementCard({ title, desc }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-lime-400 hover:-translate-y-2 transition duration-300 shadow-xl">

      <div className="text-5xl mb-6">
        🏆
      </div>

      <h2 className="text-2xl font-bold mb-4 text-lime-400">
        {title}
      </h2>

      <p className="text-gray-400 leading-7">
        {desc}
      </p>

    </div>
  );
}

export default AchievementCard;