import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const roles = [
    "a Frontend Developer",
    "a Competitive Programmer",
    "an AI/ML Enthusiast",
    "a Problem Solver",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      <div className="space-y-6">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold leading-tight flex flex-wrap gap-2"
        >
          Hi, I’m Ayush —{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-primary"
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 max-w-xl"
        >
          Aspiring to be a part of a reputed organization, working in a responsible
          position and performing consistently to the best of my skills and abilities
          in order to learn and grow along with the organization.
        </motion.p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-4 py-2 rounded-md bg-primary text-black font-medium"
          >
            See Projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-md border border-gray-700"
          >
            Contact
          </a>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 text-sm text-gray-400 space-y-2">
          <div>
            <strong>Tech:</strong> React • Tailwind • Javascript • SQL • C++
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.codechef.com/users/ayushkumar062"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              CodeChef
            </a>
            <a
              href="https://leetcode.com/u/Ayush_4803/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              LeetCode
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-kumar-997818282"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-white">Achievements</h3>
          <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
            <li>
              Achieved peak rating of <strong>1605</strong> on CodeChef (3-star coder).
            </li>
            <li>
              Secured <strong>Global Rank 35</strong> at CodeChef Starters 151 Div3 Round.
            </li>
          </ul>
        </div>
      </div>

      {/* Image */}
      <div className="h-96 md:h-[520px] w-full rounded-3xl overflow-hidden border border-gray-800">
        <img
          src="/MY_PIC.jpg"
          alt="Portfolio Graphic"
          className="w-500 h-800 object-cover"
        />
      </div>
    </section>
  );
}
