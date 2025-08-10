import { ArrowRightIcon } from "@heroicons/react/24/solid"; 

export default function LandingPage() {
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 to-blue-950 text-white px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
        Welcome to Mercatura Forum
      </h1>

      <p className="text-base sm:text-lg mb-6 text-center px-2">
        Submit your daily report to keep the workflow on track!
      </p>

      <button className="group flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 bg-white text-blue-950 font-semibold px-6 sm:px-8 py-3 rounded-full shadow-xl hover:bg-blue-100 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 w-full sm:w-auto">
        <span className="text-sm sm:text-base">Login to Submit Report</span>
        <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      <p className="mt-4 text-xs sm:text-sm italic text-blue-100 text-center">
        * Login is required before submitting your report
      </p>
    </main>
  );
}
