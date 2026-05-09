function Contact() {
  return (
    <section className="max-w-7xl mx-auto py-20">

      {/* Heading */}
      <div className="mb-16">

        <p className="text-lime-400 text-lg mb-3">
          Get In Touch
        </p>

        <h1 className="text-5xl font-extrabold">
          Contact <span className="text-lime-400">Me</span>
        </h1>

      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-14">

        {/* Left Info */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-xl">

          <h2 className="text-3xl font-bold mb-8">
            Let's Connect<span className="text-lime-400">...</span>
          </h2>

          <p className="text-gray-400 leading-8 mb-10">
            Feel free to reach out for collaborations,
            projects, internships, or just a friendly conversation.
          </p>

          <div className="space-y-8">

            <div>
              <h3 className="text-lime-400 text-xl font-semibold mb-2">
                Email
              </h3>

              <a
                href="mailto:gksinghh77@gmail.com"
                className="hover:text-lime-400 transition duration-300"
              >
                gksinghh77@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-lime-400 text-xl font-semibold mb-2">
                Phone
              </h3>

              <p className="text-gray-400">
                +91 6394736226
              </p>
            </div>

            <div>
              <h3 className="text-lime-400 text-xl font-semibold mb-2">
                Location
              </h3>

              <p className="text-gray-400">
                Patna, India
              </p>
            </div>

          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-xl">

          <form className="space-y-6">

            <div>

              <label className="block text-gray-300 mb-3">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-lime-400"
              />

            </div>

            <div>

              <label className="block text-gray-300 mb-3">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-lime-400"
              />

            </div>

            <div>

              <label className="block text-gray-300 mb-3">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-lime-400"
              ></textarea>

            </div>

            <button
              type="submit"
              className="bg-lime-400 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;