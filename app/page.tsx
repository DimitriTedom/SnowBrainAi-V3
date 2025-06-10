import Navbar from "@/components/NavBar";


const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navbar />

      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Welcome to SnowDev
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Build fast, modern, and beautiful applications with Next.js and Tailwind CSS.
        </p>
      </section>
    </main>
  );
};

export default Home;
