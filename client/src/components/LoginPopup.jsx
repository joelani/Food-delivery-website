import React, { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <form className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-lg relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-7">
          <h2 className="text-2xl font-semibold">{currentState}</h2>

          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
            className="w-5 cursor-pointer"
          />
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          {currentState === "Sign Up" && (
            <input
              type="text"
              placeholder="your name"
              required
              className="border px-3 py-3 rounded-md"
            />
          )}

          <input
            type="email"
            placeholder="email address"
            required
            className="border px-3 py-3 rounded-md"
          />

          <input
            type="password"
            placeholder="password"
            required
            className="border px-3 py-3 rounded-md"
          />

          <button
            type="submit"
            className="bg-Primary text-white py-3 rounded-md"
          >
            {currentState === "Sign Up" ? "Create account" : "Log in"}
          </button>

          {/* Footer toggle */}
          <div className="mt-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" required />
              <span>By continuing, you agree to our terms & conditions</span>
            </label>

            {currentState === "Sign Up" ? (
              <p className="mt-4">
                Already have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setCurrentState("Log In")}
                >
                  Log In
                </span>
              </p>
            ) : (
              <p className="mt-2">
                Don't have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setCurrentState("Sign Up")}
                >
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPopup;
