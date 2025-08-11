import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white antialiased">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <Hero />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
