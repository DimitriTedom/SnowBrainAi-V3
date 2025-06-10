
import { TrendingUp } from "lucide-react";
import ThemeTrigger from "./ThemeTrigger";

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-between px-[2rem] xl:p-[20rem] py-4 bg-white dark:bg-gray-900 shadow-sm">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800 dark:text-white">
          SnowDev
        </div>

        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <ThemeTrigger/>
          {/* Get Started Button */}
          <button
            onClick={() => {}}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Try SnowBrain <TrendingUp />
          </button>
        </div>
      </nav>
    </>
  );
}
