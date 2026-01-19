export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12 max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold">Jonel C. Pabulayan</h1>
        <p className="mt-2 text-lg">Information Systems Student | Business Application Development</p>
        <p className="mt-4 text-sm text-gray-600">Iloilo City • jonelpabulayan09@gmail.com • 0961 604 1225</p>
      </section>


      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="leading-relaxed">
          A dedicated Information Systems student from West Visayas State University with hands-on
          experience in web and mobile application development, data visualization, and basic
          machine learning systems. Currently seeking an OJT opportunity to apply technical skills
          and contribute to real-world projects.
        </p>
      </section>


      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Academic Projects</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="font-semibold">WestCare Mobile Application</h3>
            <p className="text-sm text-gray-700">
              Mobile-based system providing real-time campus announcements, weather monitoring,
              and emergency access. Built with Firebase Realtime Database and Read More / Read Less
              functionality for announcements.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Telco Customer Churn Prediction System</h3>
            <p className="text-sm text-gray-700">
              Streamlit web app using an XGBoost classification model trained on the IBM Telco
              Customer Churn dataset. Includes preprocessing pipelines and churn probability output.
            </p>
          </li>
        </ul>
      </section>


      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Technical Skills</h2>
        <ul className="grid grid-cols-2 gap-4 text-sm">
          <li><strong>Languages:</strong> TypeScript, Python, HTML, CSS</li>
          <li><strong>Frameworks:</strong> React, Flutter, Tailwind CSS</li>
          <li><strong>Tools:</strong> GitHub, Figma, Visual Studio Code, Excel</li>
        </ul>
      </section>


      <footer className="pt-6 border-t text-sm text-gray-500">
      © {new Date().getFullYear()} Jonel C. Pabulayan
      </footer>
    </main>
  );
}