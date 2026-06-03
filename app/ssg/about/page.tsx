export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          About Us
        </h1>

        <p className="text-lg text-gray-600">
          This page is generated at build time using
          Static Site Generation (SSG).
        </p>
      </div>
    </div>
  );
}