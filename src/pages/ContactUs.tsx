import React from "react";
import { Link } from "react-router-dom";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="inline-block mb-6">
          <button className="px-4 py-2 bg-teal text-white rounded hover:bg-golden transition-colors font-semibold shadow">
            ← Back to Home
          </button>
        </Link>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          We would love to hear from you! Whether you have questions, want to partner, or need support, reach out to us anytime.
        </p>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Office</h2>
          <p className="text-gray-600 mb-2">Feedlink Compassion Bridge</p>
          <p className="text-gray-600 mb-2">123 Kindness Lane, Koregaon Park</p>
          <p className="text-gray-600 mb-2">Pune, Maharashtra 411001, India</p>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Details</h2>
          <p className="text-gray-600 mb-2">Email: <a href="mailto:contact@feedlink.org" className="text-teal hover:underline">contact@feedlink.org</a></p>
          <p className="text-gray-600 mb-2">Phone: <a href="tel:+919876543210" className="text-teal hover:underline">+91 98765 43210</a></p>
        </div>
      </div>
    </div>
  );
} 