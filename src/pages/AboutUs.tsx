import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-block mb-6">
          <button className="px-4 py-2 bg-teal text-white rounded hover:bg-golden transition-colors font-semibold shadow">
            ← Back to Home
          </button>
        </Link>
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 text-center mb-10">
          Feedlink is dedicated to bridging the gap between surplus food and those in need, fostering compassion and community support.
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Story</h2>
          <p className="text-gray-600">
            Founded in 2024 by Harsh Walke, Feedlink was born out of a desire to reduce food waste and help communities thrive. We connect restaurants, volunteers, and organizations to ensure surplus food reaches those who need it most. What started as a local initiative in Pune has grown into a movement, inspiring others to join the fight against hunger.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to create a sustainable, compassionate network that makes food accessible to everyone, while minimizing waste and supporting local communities. We believe that no meal should go to waste and no person should go hungry.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Impact</h2>
          <p className="text-gray-600">
            Since our inception, Feedlink has helped distribute thousands of meals to those in need, prevented tons of food from ending up in landfills, and built a community of caring individuals and businesses. Our platform empowers restaurants to give back, volunteers to make a difference, and recipients to find hope.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Compassion for every individual</li>
            <li>Sustainability in every action</li>
            <li>Community-driven solutions</li>
            <li>Transparency and trust</li>
            <li>Empowerment through technology</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Founder</h2>
          <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-3 flex items-center justify-center text-2xl font-bold text-gray-500">
              H
            </div>
            <div className="text-lg font-medium text-gray-900">Harsh Walke</div>
            <div className="text-gray-600 text-sm">Founder</div>
          </div>
        </section>
      </div>
    </div>
  );
} 