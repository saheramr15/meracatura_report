import { useState, useEffect } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";  

const network = process.env.DFX_NETWORK;
const identityProvider =
  network === "ic"
    ? "https://identity.ic0.app" // Mainnet
    : "http://rdmx6-jaaaa-aaaaa-aaadq-cai.localhost:4943"; // Local dev

export default function LoginPage() {
  const [authClient, setAuthClient] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [principal, setPrincipal] = useState(null);
  const [name, setName] = useState("");  
  const navigate = useNavigate(); 

  useEffect(() => {
    AuthClient.create().then((client) => {
      setAuthClient(client);
      client.isAuthenticated().then((auth) => {
        setIsAuthenticated(auth);
        if (auth) {
          const identity = client.getIdentity();
          setPrincipal(identity.getPrincipal().toString());
        }
      });
    });
  }, []);

  const login = async () => {
    if (!authClient) return;
    await authClient.login({
      identityProvider,
      onSuccess: async () => {
        setIsAuthenticated(true);
        const identity = authClient.getIdentity();
        setPrincipal(identity.getPrincipal().toString());
      },
    });
  };

  const logout = async () => {
    if (!authClient) return;
    await authClient.logout();
    setIsAuthenticated(false);
    setPrincipal(null);
    setName("");
  };

  const handleNameSubmit = () => {
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }
    // You can send {principal, name} to backend here
    navigate("/Report_Submission_Page", { state: { principal, name } });
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-300 to-blue-950 text-white px-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
        Welcome to Mercatura Forum
      </h1>

      <p className="text-base sm:text-lg mb-6 text-center px-2">
        Access your dashboard and submit daily reports securely.
      </p>

      {!isAuthenticated ? (
        <button
          onClick={login}
          className="group flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 bg-white text-blue-950 font-semibold px-6 sm:px-8 py-3 rounded-full shadow-xl hover:bg-blue-100 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400 w-full sm:w-auto"
        >
          <span className="text-sm sm:text-base">Login with Internet Identity</span>
          <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      ) : (
        <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-sm">
          <p className="text-sm mb-4 text-center">
            Signed in as:
            <br />
            <span className="text-xs break-all text-gray-500">{principal}</span>
          </p>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            onClick={handleNameSubmit}
            className="w-full bg-blue-950 text-white font-semibold px-4 py-2 rounded hover:bg-blue-800 transition-all duration-300"
          >
            Continue
          </button>
          <button
            onClick={logout}
            className="w-full mt-3 bg-red-400 text-white font-semibold px-4 py-2 rounded hover:bg-red-700 transition-all duration-300"
          >
            Logout
          </button>
        </div>
      )}
    </main>
  );
}
