import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    // Debug logs - check env values
 

    // Check if any variable is missing
    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      alert("❌ EmailJS environment variables are missing!")
      return
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      () => alert('✅ Message sent successfully!'),
      (error) => alert('❌ Failed to send: ' + error.text)
    )
  }

  return (
    <section id="contact" className="mt-20">
      <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="rounded-2xl p-6 bg-gray-900/40 border border-gray-800 flex flex-col gap-3"
      >
        <input
          name="name"
          placeholder="Your name"
          className="bg-transparent border border-gray-700 rounded px-3 py-2 outline-none"
          required
        />
        <input
          name="email"
          placeholder="Your email"
          className="bg-transparent border border-gray-700 rounded px-3 py-2 outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          className="bg-transparent border border-gray-700 rounded px-3 py-2 outline-none"
          required
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 rounded bg-primary text-black font-medium"
        >
          Send
        </button>
      </form>
    </section>
  )
}
