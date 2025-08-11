import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl font-semibold"
          href="#home"
        >
          Ayush Kumar
        </motion.a>

        <nav className="hidden md:flex gap-6 items-center text-sm text-gray-300">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="https://github.com/Ayush4803" target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md bg-primary/20 hover:bg-primary/30">GitHub</a>
        </nav>

        <div className="md:hidden text-gray-300">☰</div>
      </div>
    </header>
  )
}
