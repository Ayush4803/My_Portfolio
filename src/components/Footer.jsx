import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-20 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">© {new Date().getFullYear()} Ayush Kumar — Built with React & Tailwind </div>
    </footer>
  )
}
