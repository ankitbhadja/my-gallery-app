import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import AboutSection from "../components/About";
import Skill from "../components/Skill";
import Experience from "../components/Experience";

const generateCircles = (count) =>
  Array.from({ length: count }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${60 + Math.random() * 120}px`,
    color:
      Math.random() > 0.5
        ? "rgba(173, 216, 230, 0.6)" // light blue
        : "rgba(255, 255, 255, 0.5)", // light white
    duration: 6 + Math.random() * 3,
    delay: Math.random() * 8,
  }));




export default function Resume() {
  return (
    <>
  {/* Navigation */}
  <nav className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#" className="text-2xl font-bold text-primary">
        AB
      </a>
      <div className="hidden md:flex space-x-8">
        <a
          href="#about"
          className="nav-link text-dark hover:text-primary font-medium"
        >
          About
        </a>
        <a
          href="#skills"
          className="nav-link text-dark hover:text-primary font-medium"
        >
          Skills
        </a>
        <a
          href="#experience"
          className="nav-link text-dark hover:text-primary font-medium"
        >
          Experience
        </a>
        <a
          href="#contact"
          className="nav-link text-dark hover:text-primary font-medium"
        >
          Contact
        </a>
      </div>
      <button id="menu-btn" className="md:hidden text-dark hover:text-primary">
        <i className="fas fa-bars text-xl" />
      </button>
    </div>
    {/* Mobile menu */}
    <div
      id="mobile-menu"
      className="hidden md:hidden bg-white px-4 py-3 shadow-lg"
    >
      <a
        href="#about"
        className="block py-2 text-dark hover:text-primary font-medium"
      >
        About
      </a>
      <a
        href="#skills"
        className="block py-2 text-dark hover:text-primary font-medium"
      >
        Skills
      </a>
      <a
        href="#experience"
        className="block py-2 text-dark hover:text-primary font-medium"
      >
        Experience
      </a>
      <a
        href="#contact"
        className="block py-2 text-dark hover:text-primary font-medium"
      >
        Contact
      </a>
    </div>
  </nav>
  {/* Hero Section */}
  <AboutSection />
  {/* Skills Section */}
  <Skill />
{/* Experience Section */}
<section
  id="experience"
>
<Experience />

</section>
  {/* Footer */}
  <footer className="bg-dark text-white py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Ankit Bhadja</h2>
          <p className="text-gray-400 mt-1">Backend Developer</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <i className="fab fa-linkedin text-xl" />
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <i className="fab fa-github text-xl" />
          </a>
          <a
            href="mailto:ankitbhadja1@gmail.com"
            className="text-white hover:text-blue-400 transition-colors"
          >
            <i className="fas fa-envelope text-xl" />
          </a>
        </div>
      </div>
      <div className="mt-6 text-center text-gray-400 text-sm">
        <p>© 2024 Ankit Bhadja. All rights reserved.</p>
      </div>
    </div>
  </footer>

</>

  );
}