import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { AuthClient } from "@dfinity/auth-client";

export default function ReportFormPage() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const authClient = await AuthClient.create();
    await authClient.logout();
    navigate("/"); // Redirect back to login
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 to-blue-950 text-white px-4">
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 bg-red-400 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
        Logout
      </button>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        <PencilSquareIcon className="w-6 h-6 text-yellow-300 inline-block mr-2" />
        Submit Your Daily Report
      </h1>

      <p className="text-xs sm:text-lg mb-8 text-center max-w-md">
        Share your progress and challenges for today. This helps the team stay
        aligned and move forward together.
      </p>

      <form className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg text-gray-800">
        <p className="text-sm font-semibold text-gray-800 mb-4">
          * Date will be generated automatically
        </p>

        {/* Progress */}
        <label className="block font-semibold mb-2">Progress</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
          rows="4"
          placeholder="Describe what you accomplished today..."
        />

        {/* Challenges */}
        <label className="block font-semibold mb-2">Challenges</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
          rows="4"
          placeholder="Mention any blockers or challenges..."
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-950 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Submit Report
        </button>
      </form>

      <p className="mt-4 text-sm italic text-blue-100 text-center">
        * Please submit before the end of the day
      </p>
    </main>
  );
}
