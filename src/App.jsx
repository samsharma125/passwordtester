import React, { useState } from "react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";

export default function App() {
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-purple-600 to-pink-400">
      {/* Glassmorphism card */}
      <div className="backdrop-blur-md bg-white/20 border border-white/30 p-8 rounded-2xl shadow-2xl w-96 text-center">
        <h1 className="text-3xl font-extrabold mb-6 text-white drop-shadow-lg">
          🔐 Password Strength Checker
        </h1>

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-3 rounded-lg mb-6 border border-white/30 bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:bg-white/40 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Password strength meter */}
        <PasswordStrengthMeter password={password} />

        {/* Extra info */}
        <p className="mt-4 text-sm text-gray-100">
          Use <span className="font-semibold text-yellow-200">uppercase</span>,{" "}
          <span className="font-semibold text-yellow-200">numbers</span>, and{" "}
          <span className="font-semibold text-yellow-200">special characters</span>{" "}
          for a stronger password.
        </p>

        {/* Button */}
        {/* <button
          className="mt-6 w-full py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-semibold shadow-md transition duration-300"
        >
          Submit
        </button> */}
      </div>
    </div>
  );
}
