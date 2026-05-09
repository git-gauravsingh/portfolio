function SkillCard({ title }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center hover:border-lime-400 hover:-translate-y-2 transition duration-300 shadow-lg">

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

    </div>
  );
}

export default SkillCard;