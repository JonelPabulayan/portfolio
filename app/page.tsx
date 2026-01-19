import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-blue-50 text-gray-900 px-6 py-14">
      <div className="max-w-5xl mx-auto">
        <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I’m <span className="text-gray-700">Jonel C. Pabulayan</span>
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Information Systems Student specializing in Business Application Development.
            </p>
            <p className="mt-4 text-sm text-gray-600">Iloilo City • jonelpabulayan09@gmail.com • 0961 604 1225</p>
            <p className="mt-6 text-sm text-gray-600 max-w-md">
              I build practical web and mobile applications, dashboards, and data-driven systems
              through academic projects. Currently seeking an On-the-Job Training (OJT)
              opportunity to grow and contribute to real-world solutions.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#projects"
                className="px-5 py-2 rounded-xl border border-gray-400 text-sm hover:bg-gray-200"
              >
                View Projects
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/my pic.png"
                alt="Jonel Pabulayan"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="leading-relaxed text-gray-700 max-w-3xl">
            I am a Bachelor of Science in Information Systems student at West Visayas State University
            with experience in web development, mobile applications, and data visualization. My
            academic background and hands-on projects helped me develop strong problem-solving
            skills and familiarity with modern development tools.
          </p>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Academic Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                WestCare Mobile Application
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                A mobile-based system that delivers real-time campus announcements,
                weather monitoring, and emergency access. Integrated Firebase Realtime
                Database with Read More / Read Less functionality.
              </p>
              <a
                href="https://github.com/JonelPabulayan/WestCare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
              View on GitHub
              </a>
            </div>

            <div className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Telco Customer Churn Prediction System
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                An interactive Streamlit web application using an XGBoost model to
                predict customer churn. Includes preprocessing pipelines and churn
                probability output.Include feature scaling and categorical encoding 
                using saved preprocessing pipelines.
              </p>
              <a
                href="https://github.com/JonelPabulayan/Streamlit-App"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
              View on GitHub
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-white shadow-sm">TypeScript, Python, HTML, CSS</div>
            <div className="p-4 rounded-xl bg-white shadow-sm">React, Flutter, Tailwind CSS</div>
            <div className="p-4 rounded-xl bg-white shadow-sm">GitHub, Figma, Excel, Visual Studio Code</div>
            <div className="p-4 rounded-xl bg-white shadow-sm">Dashboard & Data Visualization</div>
            <div className="p-4 rounded-xl bg-white shadow-sm">Mobile App Development</div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 border-t text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Jonel C. Pabulayan • Iloilo City
        </footer>
      </div>
    </main>
  );
}
