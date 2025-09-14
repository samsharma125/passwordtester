import React from "react";

const getStrength = (password) => {
  let score = 0;
  let suggestions = [];

  // Special check for very short passwords
  if (password.length < 4) {
    return { 
      label: "Very Weak", 
      color: "bg-red-500 w-1/5", 
      suggestions: ["Password is too short, use at least 8 characters"] 
    };
  }

  // Length suggestion
  if (password.length < 8) {
    suggestions.push("Use at least 8 characters");
  } else {
    score++;
  }

  // Character type checks
  if (/[A-Z]/.test(password)) score++; 
  else suggestions.push("Add uppercase letters");

  if (/[a-z]/.test(password)) score++; 
  else suggestions.push("Add lowercase letters");

  if (/[0-9]/.test(password)) score++; 
  else suggestions.push("Add numbers");

  if (/[^A-Za-z0-9]/.test(password)) score++; 
  else suggestions.push("Add symbols (e.g., @, #, !, etc.)");

  // Strength based on score
  let strength = {};
  if (score <= 1) strength = { label: "Weak", color: "bg-orange-500 w-2/5" };
  else if (score === 2) strength = { label: "Fair", color: "bg-yellow-500 w-3/5" };
  else if (score === 3) strength = { label: "Good", color: "bg-blue-500 w-4/5" };
  else if (score >= 4) strength = { label: "Very Strong", color: "bg-green-500 w-full" };

  return { ...strength, suggestions };
};

export default function PasswordStrengthMeter({ password }) {
  const strength = getStrength(password);

  return (
    <div>
      {password && (
        <>
          <div className="h-2 w-full bg-gray-300 rounded-lg mb-2">
            <div
              className={`h-2 rounded-lg transition-all duration-300 ${strength.color}`}
            ></div>
          </div>
          <p className="text-sm font-medium text-gray-700 mb-1">
            Strength: <span className="font-bold">{strength.label}</span>
          </p>
          {strength.suggestions.length > 0 && (
            <ul className="text-xs text-gray-600">
              {strength.suggestions.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
