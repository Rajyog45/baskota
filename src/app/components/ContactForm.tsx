"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Failed to submit");

    setSubmitted(true);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  } catch (err) {
    console.error("Submit error:", err);

    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError("Failed to submit. Please try again.");
    }
  } finally {
    setLoading(false);
  }
};


  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-xl shadow-md max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-3">Thank you!</h2>
          <p>We have received your message and will get back to you soon.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-40  bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        >
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium text-sm">
              First Name*
            </label>
            <input
              type="text"
              placeholder="Enter your first name"
              required
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="border border-gray-300 p-2 md:p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium text-sm">
              Last Name*
            </label>
            <input
              placeholder="Enter you last name"
              type="text"
              required
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="border border-gray-300 p-2 md:p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium text-sm">
              Email*
            </label>
            <input
              placeholder="Email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border border-gray-300 p-2 md:p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium text-sm">Phone</label>
            <input
              placeholder="Phone NUmber"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="border border-gray-300 p-2 md:p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 text-gray-700 font-medium text-sm">Company</label>
            <input
              placeholder="Company"
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="border border-gray-300 p-2 md:p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
            />
          </div>

          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 text-gray-700 font-medium text-sm">
              Comments or Questions
            </label>
            <textarea
              placeholder="Enter you comment"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="border border-gray-300 p-2 md:p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
              rows={4}
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-25 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-medium transition disabled:opacity-70"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
}
