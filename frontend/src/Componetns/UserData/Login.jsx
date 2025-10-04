//  src/Componetns/UserData/Login.jsx

import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // live-clear single-field error
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
  };

  const validate = () => {
    const errs = {};
    // simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = "Email required";
    } else if (!emailRegex.test(formData.email)) {
      errs.email = "Valid email required";
    }

    if (!formData.password) {
      errs.password = "Password required";
    } else if (formData.password.length < 6) {
      errs.password = "Password should be at least 6 characters";
    }

    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      // change this URL to your real backend endpoint
      const url = "/api/auth/login";
      const payload = {
        email: formData.email,
        password: formData.password,
        remember: formData.remember,
      };

      const response = await axios.post(url, payload, {
        headers: { "Content-Type": "application/json" },
      });

      // success handling
      console.log("user login hua hai");
      console.log("Login response:", response.data);

      // optional: if backend returns a token, save it
      if (response.data?.token) {
        localStorage.setItem("token", response.data.token);
      }

      // optional: redirect after login
      // navigate('/profile');

      // clear password for safety
      setFormData((prev) => ({ ...prev, password: "" }));
    } catch (err) {
      console.error("Login error:", err);
      // try to get error message from response
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Login failed";
      setServerError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Login to Your Account
        </h2>

        {serverError && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 p-2 rounded">
            {serverError}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full mt-1 p-2 border rounded-md focus:ring focus:ring-indigo-300 ${
                errors.email ? "border-red-400" : ""
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className={`w-full mt-1 p-2 border rounded-md focus:ring focus:ring-indigo-300 ${
                errors.password ? "border-red-400" : ""
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center text-sm">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="form-checkbox h-4 w-4"
              />
              <span className="ml-2">Remember me</span>
            </label>

            <Link to="/forgot" className="text-sm text-indigo-600 hover:underline">
              Forgot?
            </Link>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`w-full py-2 rounded-md text-white transition ${
              submitting ? "bg-indigo-300 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {submitting ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-indigo-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
