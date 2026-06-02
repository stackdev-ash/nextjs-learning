function About() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-2xl rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-blue-600">
          About Page
        </h1>

        <p className="mb-4 text-gray-700">
          Welcome to the About Page of my Next.js learning project.
          This page demonstrates static routing using the App Router.
        </p>

        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <h2 className="mb-2 text-xl font-semibold text-blue-700">
            What I'm Learning
          </h2>

          <ul className="list-disc pl-5 text-gray-700">
            <li>Next.js App Router</li>
            <li>Static Routing</li>
            <li>Dynamic Routing</li>
            <li>Layouts</li>
            <li>Server Components</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default About;