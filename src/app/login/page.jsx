"use client";

import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to manage your hotel bookings and more.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address
            </label>
            <div className="relative mt-2">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password
            </label>
            <div className="relative mt-2">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full pl-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-3 rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Create a new account{" "}
          <a
            href="/signup"
            className="text-gray-800 hover:underline font-medium"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
