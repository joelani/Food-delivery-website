import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Signup");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currentState === "Signup") {
      newUrl += "/api/user/register";
    } else {
      newUrl += "/api/user/login";
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  useEffect(() => {
    // Reset form data when switching between states
    setData({
      name: "",
      email: "",
      password: "",
    });
  }, [currentState]);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <form
        onSubmit={onLogin}
        className="bg-white w-[90%] max-w-80 p-6 rounded-xl shadow-lg relative"
      >
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
        <div className="flex flex-col gap-4 ">
          {currentState === "Signup" && (
            <input
              name="name"
              onChange={handleChange}
              value={data.name}
              type="text"
              placeholder="your name"
              required
              className="border border-NeutralGray px-3 py-2 rounded-md focus:outline focus:border-Primary focus:outline-Primary"
            />
          )}

          <input
            name="email"
            onChange={handleChange}
            value={data.email}
            type="email"
            placeholder="email address"
            required
            className="border border-NeutralGray px-3 py-2 rounded-md focus:outline focus:border-Primary focus:outline-Primary"
          />

          <input
            name="password"
            onChange={handleChange}
            value={data.password}
            type="password"
            placeholder="password"
            required
            className="border border-NeutralGray px-3 py-2 rounded-md focus:outline focus:border-Primary focus:outline-Primary"
          />

          <button
            type="submit"
            className="bg-Primary text-white py-2 rounded-md"
          >
            {currentState === "Signup" ? "Create account" : "Log in"}
          </button>

          {/* Footer toggle */}
          <div className="mt-1.5 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" required />
              <span className="text-xs">
                By continuing, you agree to our terms & conditions
              </span>
            </label>

            {currentState === "Signup" ? (
              <p className="mt-1.5">
                Already have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setCurrentState("Log In")}
                >
                  Log In
                </span>
              </p>
            ) : (
              <p className="mt-1">
                Don't have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setCurrentState("Signup")}
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
