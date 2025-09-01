// src/pages/ThankYou.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-richblack-900">
      <div className="bg-richblack-800 shadow-2xl rounded-2xl p-10 text-center w-full max-w-md flex flex-col items-center justify-center">
        {/* Success Icon */}
        <CheckCircle className="w-20 h-20 text-green-400 mb-6" />

        {/* Heading */}
        <h1 className="text-3xl font-bold text-white mb-3">
          Payment Successful!
        </h1>

        {/* Subtext */}
        <p className="text-richblack-300 text-base mb-8">
          🎉 Thank you for your purchase.  
          A confirmation email has been sent to you.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg 
                     hover:bg-yellow-300 transition-all duration-200 shadow-md"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
