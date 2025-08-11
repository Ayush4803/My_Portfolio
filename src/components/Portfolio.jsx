import React from 'react'

const projects = [
  {
    title: 'Online Food Ordering App',
    desc: 'React-based food ordering web app with dynamic menus and shimmer loading effects.',
    link: 'https://storied-travesseiro-d858e1.netlify.app/'
  },
  {
    title: 'YouTube Auto Pause & Play Extension',
    desc: 'Chrome extension to pause YouTube when you switch tabs and resume when you come back.',
    link: 'https://github.com/Ayush4803/Youtube-Autopause-Extension'
  },
  {
    title: 'Weather App',
    desc: 'Responsive weather app built with HTML, CSS, and JavaScript using OpenWeatherMap API.',
    link: 'https://harmonious-melomakarona-770397.netlify.app/'
  }
]

export default function Portfolio() {
  return (
    <section id="projects" className="mt-20">
      <h2 className="text-3xl font-bold">Projects</h2>
      <p className="text-gray-400 mt-2">Selected works — full details on GitHub and live links.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="block p-6 rounded-2xl bg-gray-900/40 border border-gray-800 hover:scale-[1.01] transition-transform"
          >
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-300 mt-2">{p.desc}</p>
            <div className="mt-4 text-sm text-primary">View Project →</div>
          </a>
        ))}
      </div>
    </section>
  )
}
