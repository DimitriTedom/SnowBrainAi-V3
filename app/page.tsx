"use client"
import Navbar from "@/components/NavBar";


const Home = () => {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black transition-colors duration-200">
      <Navbar />

      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-extrabold tracking-tigh sm:text-5xl">
          Your Ai Job Assistant
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Our large Language Model with more thant 1 Million Tokens of Context Memory
        </p>
      </section>
    </main>
  );
};

export default Home;
